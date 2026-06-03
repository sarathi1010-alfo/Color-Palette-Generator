/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://alfo-palette-generator.vercel.app', // Placeholder URL
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/icon.svg', '/apple-icon.png'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://alfo-palette-generator.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
