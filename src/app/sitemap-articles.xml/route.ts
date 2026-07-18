import { generateCanonicalUrl } from '@/lib/url/utils';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

const articles = [
  '/guides/color-theory-pairings',
  '/guides/choose-website-color-palette',
  '/guides/wcag-contrast-checker-color-accessibility',
  '/guides/color-theory-complementary-triadic-analogous',
  '/guides/css-variables-color-palette-generator',
  '/guides/color-palette-generator-vs-coolors',
  '/guides/color-psychology-branding',
  '/guides/tailwind-css-color-palette-generator',
  '/guides/ultimate-guide-color-theory-2026',
  '/learn/what-is-color-theory',
  '/learn/what-is-a-monochromatic-palette',
  '/learn/what-is-a-complementary-palette',
  '/learn/what-is-a-triadic-palette',
  '/learn/what-is-an-analogous-palette'
];

export async function GET() {
  const lastMod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${articles.map(route => `
  <url>
    <loc>${generateCanonicalUrl(route)}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
