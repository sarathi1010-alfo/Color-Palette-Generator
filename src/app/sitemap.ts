import type { MetadataRoute } from 'next';
import palettesData from '@/data/palettes.json';
import colorsData from '@/data/color-names.json';
import { generateCanonicalUrl, sanitizeSlug } from '@/lib/url/utils';

export const revalidate = 3600; // 1 hour ISR

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Static Pages
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
    '/guides/color-theory-pairings',
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
      priority: 0.7,
    }));

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
