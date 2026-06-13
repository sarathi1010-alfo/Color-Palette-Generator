import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paletteflow.alfo.online';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // ROBOTS_ALLOW_AI_CRAWLERS=false
      {
        userAgent: ['GPTBot', 'Claude-Web', 'CCBot', 'Google-Extended', 'anthropic-ai', 'Bytespider'],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
