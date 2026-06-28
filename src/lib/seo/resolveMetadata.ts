import type { Metadata } from 'next';
import type { SeoMeta } from '@/types/seo';
import { formatTitle } from './formatTitle';
import { buildCanonical } from './buildCanonical';
import { seoConfig } from '@/seo.config';

export function resolveMetadata(meta: SeoMeta, isHomepage = false): Metadata {
  const canonical = meta.canonical ?? buildCanonical(meta.slug);
  const title = formatTitle(meta.title, isHomepage);

  return {
    title,
    description: meta.description,
    alternates: {
      canonical,
      languages: meta.alternateLocales
        ? Object.fromEntries(meta.alternateLocales.map(a => [a.locale, a.url]))
        : undefined,
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
      siteName: seoConfig.siteName,
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
      locale: meta.locale ?? seoConfig.defaultLocale,
    },
    twitter: {
      card: meta.ogImage ? 'summary_large_image' : 'summary',
      title,
      description: meta.description,
      images: meta.ogImage ? [meta.ogImage.url] : undefined,
    },
  };
}
