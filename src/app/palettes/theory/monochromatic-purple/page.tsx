import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildPaletteMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import { UIPreviewPane } from "@/components/generator/UIPreviewPane";
import { Swatch } from "@/types/color";
import Link from "next/link";
import programmaticPalettes from "@/data/programmatic-palettes.json";

const palette = programmaticPalettes.find(p => p.slug === "monochromatic-purple");

if (!palette) {
  throw new Error("Palette monochromatic-purple not found in data");
}

export const metadata = resolveMetadata(buildPaletteMeta({
  title: palette.name,
  description: palette.description,
  slug: `/palettes/${palette.slug}`,
  colors: palette.colors,
  category: palette.harmony
}));

export default function MonochromaticPurplePage() {
  const swatches: Swatch[] = palette.colors.map((hex, i) => ({
    id: `color-${i}`,
    hex,
    isLocked: false,
    locked: false,
    name: "Color"
  }));

  const hexes = swatches.map(s => s.hex.replace('#', '')).join('-');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <JsonLd schema={buildFaqSchema(palette.faqs)} />

      <main className="flex-1 py-20 px-6 max-w-7xl mx-auto w-full">
        <article className="text-center space-y-6 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-surface border border-border text-text-secondary text-xs font-bold uppercase tracking-widest">
            {palette.harmony} Theory Palette
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold">
            {palette.name} <span className="text-primary italic">Collection</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {palette.description} Perfect for creating a professional and balanced design system.
          </p>
          <div className="flex justify-center gap-4">
              <Link
                href={`/generator?p=${hexes}`}
                className="bg-text-primary text-background px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
              >
                Edit in Generator
              </Link>
          </div>
        </article>

        {/* Colors Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
           {swatches.map((swatch, index) => (
             <div key={index} className="flex flex-col gap-2">
               <div
                 className="h-32 rounded-2xl shadow-inner w-full border border-border/50"
                 style={{ backgroundColor: swatch.hex }}
               />
               <div className="flex flex-col items-center">
                 <span className="font-mono text-sm font-bold uppercase">{swatch.hex}</span>
               </div>
             </div>
           ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
           <div className="prose prose-invert max-w-none space-y-8">
              <h2 className="text-3xl font-display font-bold text-text-primary">Why {palette.name} Works?</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                 The {palette.name} palette is built on the principles of {palette.harmony.toLowerCase()} color harmony. By choosing colors that are mathematically related on the color wheel, you ensure a natural visual flow that feels intentional rather than accidental.
              </p>
              <h3 className="text-xl font-bold text-text-primary">Best Use Cases</h3>
              <p className="text-text-secondary">
                 This specific scheme is highly recommended for {palette.baseColor.toLowerCase()} themed projects, including modern SaaS dashboards, brand identities, and immersive mobile applications.
              </p>
           </div>
           <div className="bg-surface/50 border border-border rounded-3xl p-6 lg:p-12 shadow-xl">
             <h3 className="text-center font-display font-bold mb-6 text-xl">Live UI Preview</h3>
             <UIPreviewPane swatches={swatches} />
           </div>
        </div>

        {/* FAQ Section */}
        <section className="border-t border-border pt-20">
           <h2 className="text-3xl font-display font-bold mb-12 text-center">Questions about {palette.name}</h2>
           <div className="max-w-3xl mx-auto space-y-6">
              {palette.faqs.map((faq, i) => (
                <div key={i} className="bg-surface p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              ))}
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
