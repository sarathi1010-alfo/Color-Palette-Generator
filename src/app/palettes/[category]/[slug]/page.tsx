import { Footer } from "@/components/layout/Footer";
import { Metadata } from 'next';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildPaletteMeta } from '@/lib/seo/metaFactories';
import palettesData from '@/data/palettes.json';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { UIPreviewPane } from '@/components/generator/UIPreviewPane';
import { Swatch } from '@/types/color';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/seo/buildSchema';

interface PalettePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Ensure static generation for all known palettes
export async function generateStaticParams() {
  return palettesData.map((palette) => ({
    category: palette.category || 'all',
    slug: (palette as any).slug || palette.id,
  }));
}

export async function generateMetadata({ params }: PalettePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const palette = palettesData.find(
    (p) => (p as any).slug === slug || p.id === slug
  );

  if (!palette) {
    return resolveMetadata(buildPaletteMeta({ title: 'Palette Not Found', slug: 'not-found', colors: [] }));
  }

  return resolveMetadata(buildPaletteMeta({
    title: palette.name,
    slug: (palette as any).slug || palette.id,
    category: category,
    description: `Explore the ${palette.name} color palette. Perfect for ${category} projects. Get hex codes, live UI previews, and export to Tailwind, CSS, and Figma.`,
    colors: palette.colors.map((c: any) => typeof c === 'string' ? c : c.hex)
  }));
}

export default async function PalettePage({ params }: PalettePageProps) {
  const { category, slug } = await params;
  const palette = palettesData.find(
    (p) => (p as any).slug === slug || p.id === slug
  );

  if (!palette) {
    notFound();
  }

  const swatches: Swatch[] = palette.colors.map((c: any, i: number) => ({
    id: `color-${i}`,
    hex: typeof c === 'string' ? c : c.hex,
    isLocked: false,
    locked: false,
    name: typeof c === 'string' ? "Color" : c.name || "Color"
  }));

  // Create query string for 'Edit in Generator' link
  const hexes = swatches.map(s => s.hex.replace('#', '')).join('-');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-20 px-6 max-w-7xl mx-auto w-full" itemScope itemType="https://schema.org/CreativeWork">
        <JsonLd schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": palette.name,
          "description": `Explore the ${palette.name} color palette. Perfect for ${category} projects. Get hex codes, live UI previews, and export to Tailwind, CSS, and Figma.`,
          "url": `https://paletteflow.alfo.online/palettes/${category}/${(palette as any).slug || palette.id}`,
          "breadcrumb": buildBreadcrumbSchema(buildPaletteMeta({
            title: palette.name,
            slug: (palette as any).slug || palette.id,
            category: category,
            colors: palette.colors.map((c: any) => typeof c === 'string' ? c : c.hex)
          }).breadcrumbs)
        }} />
        {/* Header */}
        <article className="text-center space-y-6 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-surface border border-border text-text-secondary text-xs font-bold uppercase tracking-widest">
            {palette.category || 'Curated'} Palette
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold" itemProp="name">
            {palette.name} <span className="text-primary italic">Colors</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A beautiful, balanced color system ready for your next project.
            Preview it live on UI components below or export it directly to your codebase.
          </p>
          <div className="flex justify-center gap-4">
              <Link
                href={`/generator?p=${hexes}`}
                className="bg-text-primary text-background px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
              >
                Edit in Generator
              </Link>
          </div>
        </article>

        {/* Colors Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
           {swatches.map((swatch, index) => (
             <div key={index} className="flex flex-col gap-2">
               <div
                 className="h-32 rounded-2xl shadow-inner w-full border border-border/50"
                 style={{ backgroundColor: swatch.hex }}
               />
               <div className="flex flex-col items-center">
                 <span className="font-mono text-sm font-bold uppercase">{swatch.hex}</span>
                 {swatch.name && <span className="text-xs text-text-secondary">{swatch.name}</span>}
               </div>
             </div>
           ))}
        </div>

        {/* Live Preview Section */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-display font-bold">Live UI Preview</h2>
            <p className="text-text-secondary text-sm">See how these colors feel in a real interface.</p>
          </div>

          <div className="bg-surface/50 border border-border rounded-3xl p-6 lg:p-12">
            <UIPreviewPane swatches={swatches} />
          </div>
        </div>

        {/* SEO Internal Linking - Related Palettes */}
        <section className="border-t border-border pt-16">
           <div className="flex items-center justify-between mb-8">
             <h2 className="text-3xl font-display font-bold">More Palettes</h2>
             <Link href={`/palettes/category/${category.toLowerCase()}`} className="text-sm font-bold text-text-secondary hover:text-primary transition-colors">
               View All {category} →
             </Link>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {palettesData
                .filter(p => p.category.toLowerCase() === category.toLowerCase() && p.id !== palette.id)
                .slice(0, 4)
                .map((related: any) => (
                  <Link
                    key={related.id}
                    href={`/palettes/${related.category || 'all'}/${related.slug || related.id}`}
                    className="group bg-surface rounded-xl border border-border overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-sm"
                  >
                    <div className="flex h-24 w-full">
                      {related.colors.map((color: any, i: number) => (
                        <div
                          key={i}
                          className="flex-1 h-full"
                          style={{ backgroundColor: typeof color === 'string' ? color : color.hex }}
                        />
                      ))}
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-sm text-text-primary group-hover:text-primary transition-colors truncate">
                        {related.name}
                      </h3>
                    </div>
                  </Link>
                ))}
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
