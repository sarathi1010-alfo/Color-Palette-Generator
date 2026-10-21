const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://alfo.online';

export async function GET() {
  const CLUSTERS = ['pdf', 'color', 'resume', 'calculators', 'converters'];

  const sitemaps = CLUSTERS.map(
    (cluster) => `
    <sitemap>
      <loc>${BASE_URL}/sitemap-${cluster}.xml</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
  `
  ).join('');

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${BASE_URL}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
    ${sitemaps}
  </sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}