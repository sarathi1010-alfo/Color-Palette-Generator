import { seoConfig } from '@/seo.config';

export function formatTitle(rawTitle: string, isHomepage = false): string {
  if (isHomepage) return seoConfig.siteName;
  return `${rawTitle}${seoConfig.titleSeparator}${seoConfig.siteName}`;
}
