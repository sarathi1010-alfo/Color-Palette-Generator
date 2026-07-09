import type { MetadataRoute } from 'next';
import { generateCanonicalUrl } from '@/lib/url/utils';

export const revalidate = 3600; // 1 hour ISR

export default function sitemap(): MetadataRoute.Sitemap {
  // Primary Static Pages
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
    '/blog/choose-ui-color-palette',
    '/palettes/theory/analogous-blue',
    '/palettes/theory/triadic-red',
    '/palettes/theory/complementary-green',
    '/palettes/theory/monochromatic-purple',
    '/palettes/theory/neutral-warm',
    '/palettes/theory/split-complementary-purple',
    '/palettes/theory/tetradic-blue',
    '/palettes/theory/monochromatic-green',
    '/palettes/theory/analogous-orange',
    '/palettes/theory/triadic-yellow',
  ];

  return staticRoutes.map(route => ({
    url: generateCanonicalUrl(route),
    lastModified: new Date().toISOString(),
    changeFrequency: route === '/' ? 'weekly' as const : 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));
}
