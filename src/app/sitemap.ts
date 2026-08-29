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
    '/palettes/analogous-blue',
    '/palettes/triadic-red',
    '/palettes/complementary-green',
    '/palettes/monochromatic-purple',
    '/palettes/neutral-warm',
  ];

  return staticRoutes.map(route => ({
    url: generateCanonicalUrl(route),
    lastModified: new Date().toISOString(),
    changeFrequency: route === '/' ? 'weekly' as const : 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));
}
