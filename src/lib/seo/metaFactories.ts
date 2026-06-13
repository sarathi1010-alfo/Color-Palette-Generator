import type { SeoMeta } from '@/types/seo';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paletteflow.alfo.online';

function getOgImageUrl(title: string, type: string) {
  return `${BASE_URL}/api/og?title=${encodeURIComponent(title)}&type=${type}`;
}

export function buildLandingMeta(page: { title: string; description: string; slug: string }): SeoMeta {
  return {
    title: page.title,
    description: page.description.substring(0, 160),
    slug: page.slug,
    pageType: 'landing',
    noindex: false,
    ogImage: {
      url: getOgImageUrl(page.title, 'landing'),
      alt: page.title,
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
    ],
  };
}

export function buildToolMeta(tool: { title: string; description: string; slug: string }): SeoMeta {
  return {
    title: tool.title,
    description: tool.description.substring(0, 160),
    slug: tool.slug,
    pageType: 'website', // Tools fit 'website' or 'landing' best
    noindex: false,
    ogImage: {
      url: getOgImageUrl(tool.title, 'tool'),
      alt: tool.title,
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Tools', href: '/tools' },
      { label: tool.title, href: tool.slug },
    ],
  };
}

export function buildColorMeta(color: { name: string; hex: string; description?: string }): SeoMeta {
  const title = `${color.name} (${color.hex}) Color Code, Hex, RGB and Palettes`;
  const description = color.description
    ? color.description.substring(0, 160)
    : `Everything about the color ${color.name} (${color.hex}). Get hex, rgb codes, complementary colors, and beautiful color palettes using ${color.name}.`;

  return {
    title,
    description,
    slug: `/colors/${color.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    pageType: 'product', // Representing a color as a product entity is a common SEO strategy for color sites
    noindex: false,
    ogImage: {
      url: getOgImageUrl(title, 'color'),
      alt: `Color ${color.name} ${color.hex}`,
    },
    productData: {
      name: `${color.name} Color`,
      price: 0,
      currency: 'USD',
      availability: 'InStock',
      brand: 'PaletteFlow',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Colors', href: '/colors' },
      { label: color.name, href: `/colors/${color.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` },
    ],
  };
}

export function buildPaletteMeta(palette: { title: string; slug: string; description?: string; colors: string[] }): SeoMeta {
  const title = `${palette.title} Color Palette`;
  const description = palette.description
    ? palette.description.substring(0, 160)
    : `Beautiful ${palette.title} color palette featuring hex codes ${palette.colors.join(', ')}. Perfect for your next design project.`;

  return {
    title,
    description,
    slug: `/palettes/palette/${palette.slug}`, // Based on dynamic route structure
    pageType: 'website',
    noindex: false,
    ogImage: {
      url: getOgImageUrl(title, 'palette'),
      alt: `${palette.title} Color Palette`,
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Palettes', href: '/palettes' },
      { label: palette.title, href: `/palettes/palette/${palette.slug}` },
    ],
  };
}

export function buildCategoryMeta(category: { name: string; slug: string; description: string; type: 'category' | 'mood' }): SeoMeta {
  const title = `${category.name} Color Palettes`;
  const basePath = category.type === 'mood' ? '/palettes/mood' : '/palettes/category';
  const slug = `${basePath}/${category.slug}`;

  return {
    title,
    description: category.description.substring(0, 160),
    slug,
    pageType: 'category',
    noindex: false,
    ogImage: {
      url: getOgImageUrl(title, 'category'),
      alt: `${category.name} Color Palettes`,
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Palettes', href: '/palettes' },
      { label: category.name, href: slug },
    ],
  };
}

export function buildFaqMeta(page: { title: string; description: string; slug: string }): SeoMeta {
  return {
    title: page.title,
    description: page.description.substring(0, 160),
    slug: page.slug,
    pageType: 'faq',
    noindex: false,
    ogImage: {
      url: getOgImageUrl(page.title, 'faq'),
      alt: page.title,
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: page.title, href: page.slug },
    ],
  };
}
