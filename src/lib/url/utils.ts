export function normalizeRoute(path: string): string {
  if (!path) return '/';

  let normalizedPath = path;

  // Remove protocol, domain and port if present, ensuring it's an absolute URL first
  if (normalizedPath.startsWith('http://') || normalizedPath.startsWith('https://')) {
      try {
          const url = new URL(normalizedPath);
          normalizedPath = url.pathname;
      } catch (e) {
          // Fallback if URL parsing fails
          normalizedPath = normalizedPath.replace(/^(?:https?:\/\/)?[^\/]+/, '');
      }
  } else if (!normalizedPath.startsWith('/')) {
      // Ensure leading slash for relative paths
      normalizedPath = `/${normalizedPath}`;
  }

  // Replace multiple slashes with a single slash
  normalizedPath = normalizedPath.replace(/\/+/g, '/');

  // Lowercase the path
  normalizedPath = normalizedPath.toLowerCase();

  // Remove trailing slash unless it's just '/'
  if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  return normalizedPath;
}

export function sanitizeSlug(slug: string): string {
  if (!slug) return '';
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and hyphens
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}

export function generatePaletteUrl(category: string | undefined, slugOrId: string): string {
  const cat = category ? sanitizeSlug(category) : 'all';
  const slug = sanitizeSlug(slugOrId);
  return `/palettes/${cat}/${slug}`;
}

export function generateColorUrl(name: string): string {
  return `/colors/${sanitizeSlug(name)}`;
}

export function validateInternalLink(href: string): string {
    if (!href) return '/';

    // External links pass through
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return href;
    }

    return normalizeRoute(href);
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paletteflow.alfo.online';

export function generateCanonicalUrl(path: string): string {
    const normalizedPath = normalizeRoute(path);
    const base = BASE_URL.replace(/\/$/, '');

    return normalizedPath === '/' ? `${base}/` : `${base}${normalizedPath}`;
}
