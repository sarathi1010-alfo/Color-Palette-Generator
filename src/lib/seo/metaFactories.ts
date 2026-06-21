import type { SeoMeta } from '@/types/seo';
import { seoConfig } from '@/seo.config';

function getOgImageUrl(title: string, type: string) {
  return `${seoConfig.siteUrl}/api/og?title=${encodeURIComponent(title)}&type=${type}`;
}

// Meta title should be 50-60 chars
function enforceTitleLength(title: string): string {
    return title.substring(0, 60);
}

// Meta description should be 140-160 chars
function enforceDescriptionLength(description: string, fallback: string = seoConfig.defaultDescription): string {
    const desc = description || fallback;
    return desc.substring(0, 160);
}

export function buildLandingMeta(page: { title: string; description: string; slug: string }): SeoMeta {
  return {
    title: enforceTitleLength(page.title),
    description: enforceDescriptionLength(page.description),
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
    title: enforceTitleLength(tool.title),
    description: enforceDescriptionLength(tool.description),
    slug: tool.slug,
    pageType: 'website',
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
  const rawTitle = `${color.name} (${color.hex}) Color Code, Hex, RGB and Palettes`;
  const rawDescription = color.description || `Everything about the color ${color.name} (${color.hex}). Get hex, rgb codes, complementary colors, and beautiful color palettes using ${color.name}.`;

  const title = enforceTitleLength(rawTitle);
  return {
    title,
    description: enforceDescriptionLength(rawDescription),
    slug: `/colors/${color.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    pageType: 'product',
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

feature/seo-normalization-7102403181818996676
import { sanitizeSlug } from '@/lib/url/utils';

export function buildPaletteMeta(palette: { title: string; slug: string; description?: string; colors: string[]; category?: string }): SeoMeta {
  const rawTitle = `${palette.title} Color Palette`;
  const rawDescription = palette.description || `Beautiful ${palette.title} color palette featuring hex codes ${palette.colors.join(', ')}. Perfect for your next design project.`;

  const title = enforceTitleLength(rawTitle);
  const categorySlug = sanitizeSlug(palette.category || 'all');
  const idSlug = sanitizeSlug(palette.slug);

  return {
    title,
    description: enforceDescriptionLength(rawDescription),
    slug: `/palettes/${categorySlug}/${idSlug}`,
export function buildPaletteMeta(palette: { title: string; slug: string; description?: string; colors: string[], category?: string }): SeoMeta {
  const title = `${palette.title} - Free Color Palette | PaletteFlow`;
  const description = palette.description
    ? palette.description.substring(0, 160)
    : `Explore ${palette.title} with hex codes ${palette.colors.join(', ')}. Copy colors instantly. Free online palette tool.`;
  const routeCategory = palette.category || 'all';

  return {
    title,
    description,
    slug: `/palettes/${routeCategory}/${palette.slug}`, // Based on dynamic route structure
feature/color-palette-generator-v1-6453441805522074869
    pageType: 'website',
    noindex: false,
    ogImage: {
      url: getOgImageUrl(title, 'palette'),
      alt: `${palette.title} color palette preview`,
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Palettes', href: '/palettes' },
      { label: palette.title, href: `/palettes/${categorySlug}/${idSlug}` },
    ],
  };
}

export function buildCategoryMeta(category: { name: string; slug: string; description: string; type: 'category' | 'mood' }): SeoMeta {
  const rawTitle = `${category.name} Color Palettes`;
  const basePath = category.type === 'mood' ? '/palettes/mood' : '/palettes/category';
  const slug = `${basePath}/${category.slug}`;

  const title = enforceTitleLength(rawTitle);
  return {
    title,
    description: enforceDescriptionLength(category.description),
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
  const title = enforceTitleLength(page.title);
  return {
    title,
    description: enforceDescriptionLength(page.description),
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
