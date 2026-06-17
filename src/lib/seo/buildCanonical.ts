import { generateCanonicalUrl } from '@/lib/url/utils';

export function buildCanonical(slug: string): string {
  return generateCanonicalUrl(slug);
}
