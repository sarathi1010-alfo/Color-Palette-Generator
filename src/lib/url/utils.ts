export function sanitizeSlug(slug: string): string {
  if (!slug) return '';
  return slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function generatePaletteUrl(category: string | undefined, slugOrId: string): string {
  const cat = category ? sanitizeSlug(category) : 'all';
  const slug = sanitizeSlug(slugOrId);
  return `/palettes/${cat}/${slug}`;
}

export function generateColorUrl(name: string): string {
  return `/colors/${sanitizeSlug(name)}`;
}
