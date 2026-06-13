import type { SeoMeta } from '@/types/seo';
import { buildCanonical } from './buildCanonical';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Color Palette Generator';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paletteflow.alfo.online';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/palettes?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBreadcrumbSchema(items?: Array<{ label: string; href: string }>) {
  if (!items || items.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: buildCanonical(item.href),
    })),
  };
}

export function buildArticleSchema(meta: SeoMeta) {
  const url = meta.canonical ?? buildCanonical(meta.slug);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    url,
    ...(meta.ogImage && { image: [meta.ogImage.url] }),
    ...(meta.publishedAt && { datePublished: meta.publishedAt }),
    ...(meta.updatedAt && { dateModified: meta.updatedAt }),
    author: meta.author ? {
      '@type': 'Person',
      name: meta.author.name,
      ...(meta.author.url && { url: meta.author.url }),
    } : {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function buildProductSchema(meta: SeoMeta) {
  const url = meta.canonical ?? buildCanonical(meta.slug);

  if (!meta.productData) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: meta.productData.name,
    description: meta.description,
    url,
    ...(meta.ogImage && { image: [meta.ogImage.url] }),
    ...(meta.productData.sku && { sku: meta.productData.sku }),
    ...(meta.productData.brand && {
      brand: {
        '@type': 'Brand',
        name: meta.productData.brand,
      },
    }),
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: meta.productData.currency,
      price: meta.productData.price,
      availability: `https://schema.org/${meta.productData.availability}`,
    },
    ...(meta.productData.ratingValue && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: meta.productData.ratingValue,
        reviewCount: meta.productData.reviewCount ?? 1,
      },
    }),
  };
}

export function buildFaqSchema(items?: Array<{ question: string; answer: string }>) {
  if (!items || items.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildAuthorSchema(meta: SeoMeta) {
  const url = meta.canonical ?? buildCanonical(meta.slug);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: meta.title,
    description: meta.description,
    url,
    ...(meta.ogImage && { image: meta.ogImage.url }),
  };
}

export function buildSitelinksSearchBoxSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/palettes?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildHowToSchema(page: any) {
  if (!page.steps || page.steps.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: page.title,
    description: page.description,
    step: page.steps.map((s: any, i: number) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.heading,
      text: s.body,
      ...(s.image?.url && { image: s.image.url }),
    })),
    ...(page.estimatedTime && { totalTime: page.estimatedTime }),
  };
}
