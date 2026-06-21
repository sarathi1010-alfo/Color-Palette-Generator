export const seoConfig = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? 'Color Palette Generator',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paletteflow.alfo.online',
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en',
  titleSeparator: ' | ',
  defaultTitle: 'Color Palette Generator',
  defaultDescription: 'The fastest, most visual color palette tool on the web — generate, explore, copy, and export beautiful palettes in seconds.',
  googleAdsenseAccount: 'ca-pub-6393936268623951',
  author: {
    name: 'Alfo Tech',
    url: 'https://alfo.online',
  },
  social: {
    twitter: '@alfo_tech',
  }
};
