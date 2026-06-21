import type { MetadataRoute } from 'next';
import palettesData from '@/data/palettes.json';
import colorsData from '@/data/color-names.json';
import { seoConfig } from '@/seo.config';
import { generateCanonicalUrl, sanitizeSlug } from '@/lib/url/utils';

export const revalidate = 3600; // 1 hour ISR

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Static Pages
 feature/seo-normalization-7102403181818996676
  const staticRoutes = [
    '/',
    '/about',
    '/generator',
    '/palettes',
    '/tools',
    '/tools/gradient-generator',
    '/tools/contrast-checker',
    '/tools/tints-shades',
    '/tools/image-extractor',
  ];

  const staticPages = staticRoutes.map(route => ({
    url: generateCanonicalUrl(route),
    lastModified: new Date().toISOString(),
    changeFrequency: route === '/' ? 'weekly' as const : 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));

  // 2. Palette Pages
  // Ensure valid slugs
  const palettePages = palettesData
    .map(palette => {
      const category = palette.category || 'all';
      const slug = (palette as any).slug || palette.id;
      return `/palettes/${sanitizeSlug(category)}/${sanitizeSlug(slug)}`;
    })
    .filter(route => route && !route.includes('undefined') && !route.includes('null'))
    .map(route => ({
      url: generateCanonicalUrl(route),

  const staticPages = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/generator`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/palettes`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/colors`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tools`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tools/gradient-generator`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/tools/contrast-checker`,
 feature/color-palette-generator-v1-6453441805522074869
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // 3. Category & Mood Pages
  const categories = Array.from(new Set(palettesData.map(p => p.category)));
  const categoryPages = categories
    .map(cat => `/palettes/category/${sanitizeSlug(cat)}`)
    .map(route => ({
      url: generateCanonicalUrl(route),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  const moods = Array.from(new Set(palettesData.map(p => p.mood)));
  const moodPages = moods
    .map(mood => `/palettes/mood/${sanitizeSlug(mood)}`)
    .map(route => ({
      url: generateCanonicalUrl(route),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
feature/seo-normalization-7102403181818996676
      priority: 0.7,
    }));

      priority: 0.8,
    },
  ];

  // 2. Palette Pages
  const palettePages = palettesData.map((palette) => ({
    url: `${SITE_URL}/palettes/${palette.category || 'all'}/${(palette as any).slug || palette.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
 feature/color-palette-generator-v1-6453441805522074869

  // 4. Color Pages
  const colorPages = colorsData
    .filter(color => color && color.name)
    .map(color => {
      const slug = sanitizeSlug(color.name);
      return `/colors/${slug}`;
    })
    .map(route => ({
      url: generateCanonicalUrl(route),
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  return [
    ...staticPages,
    ...categoryPages,
    ...moodPages,
    ...palettePages,
    ...colorPages
  ];
}
