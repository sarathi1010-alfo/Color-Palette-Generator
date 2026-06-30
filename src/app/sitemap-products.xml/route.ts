import palettesData from '@/data/palettes.json';
import colorsData from '@/data/color-names.json';
import { generateCanonicalUrl, sanitizeSlug } from '@/lib/url/utils';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const lastMod = new Date().toISOString();

  // 1. Palette Pages
  const palettePages = palettesData
    .map(palette => {
      const category = palette.category || 'all';
      const slug = (palette as any).slug || palette.id;
      return `/palettes/${sanitizeSlug(category)}/${sanitizeSlug(slug)}`;
    })
    .filter(route => route && !route.includes('undefined') && !route.includes('null'));

  // 2. Category & Mood Pages
  const categories = Array.from(new Set(palettesData.map(p => p.category)));
  const categoryPages = categories.map(cat => `/palettes/category/${sanitizeSlug(cat)}`);

  const moods = Array.from(new Set(palettesData.map(p => p.mood)));
  const moodPages = moods.map(mood => `/palettes/mood/${sanitizeSlug(mood)}`);

  // 3. Color Pages
  const colorPages = colorsData
    .filter(color => color && color.name)
    .map(color => `/colors/${sanitizeSlug(color.name)}`);

  const allRoutes = [
    ...categoryPages,
    ...moodPages,
    ...palettePages,
    ...colorPages
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${generateCanonicalUrl(route)}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
