import type { Metadata } from 'next';
import type { SeoMeta } from '@/types/seo';
import { formatTitle } from './formatTitle';
import { buildCanonical } from './buildCanonical';

const DEFAULT_LOCALE = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en';

export function resolveMetadata(meta: SeoMeta, isHomepage = false): Metadata {
  const canonical = meta.canonical ?? buildCanonical(meta.slug);
  const title = formatTitle(meta.title, isHomepage);

  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Color Palette Generator';
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paletteflow.alfo.online';

  return {
    title,
    description: meta.description,
    alternates: {
      canonical,
      languages: meta.alternateLocales
        ? Object.fromEntries(meta.alternateLocales.map(a => [a.locale, a.url]))
        : undefined,
      types: {
        'application/rss+xml': `${SITE_URL}/rss.xml`, // Fallback for rss, optional
      }
    },
    robots: {
      index: !meta.noindex,
      follow: !meta.nofollow,
      googleBot: {
        index: !meta.noindex,
        follow: !meta.nofollow,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title,
      description: meta.description,
      url: canonical,
      siteName: SITE_NAME,
      type: meta.pageType === 'article' ? 'article' : 'website',
      images: meta.ogImage
        ? [
            {
              url: meta.ogImage.url,
              width: meta.ogImage.width ?? 1200,
              height: meta.ogImage.height ?? 630,
              alt: meta.ogImage.alt,
            },
          ]
        : undefined,
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt,
      authors: meta.author?.url ? [meta.author.url] : undefined,
      locale: meta.locale ?? DEFAULT_LOCALE,
    },
    twitter: {
      card: meta.ogImage ? 'summary_large_image' : 'summary',
      title,
      description: meta.description,
      images: meta.ogImage ? [meta.ogImage.url] : undefined,
    },
  };
}
