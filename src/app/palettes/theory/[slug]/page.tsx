import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import { notFound } from "next/navigation";
import programmaticData from "@/data/programmatic-palettes.json";
import { UIPreviewPane } from "@/components/generator/UIPreviewPane";
import { Swatch } from "@/types/color";
import Link from "next/link";
import { Zap, ArrowLeft, Layers } from "lucide-react";

interface ProgrammaticPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programmaticData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProgrammaticPageProps) {
  const { slug } = await params;
  const page = programmaticData.find((p) => p.slug === slug);

  if (!page) {
    return resolveMetadata(buildLandingMeta({
      title: "Palette Not Found",
      description: "The requested palette collection could not be found.",
      slug: "/palettes/not-found",
    }));
  }

  return resolveMetadata(buildLandingMeta({
    title: `${page.name} Color Palette - Hex Codes & UI Previews`,
    description: page.description,
    slug: `/palettes/theory/${page.slug}`,
  }));
}

export default async function ProgrammaticPalettePage({ params }: ProgrammaticPageProps) {
  const { slug } = await params;
  const page = programmaticData.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  const swatches: Swatch[] = page.colors.map((hex, i) => ({
    id: `color-${i}`,
    hex,
    isLocked: false,
    locked: false,
    name: `Color ${i + 1}`
  }));

  const hexes = page.colors.map(h => h.replace('#', '')).join('-');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <JsonLd schema={buildFaqSchema(page.faqs)} />
      <Navbar />

      <main className="flex-1 py-12 px-6 max-w-7xl mx-auto w-full">
        <Link
          href="/palettes"
          className="inline-flex items-center space-x-2 text-text-secondary hover:text-primary mb-12 font-bold transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Library</span>
        </Link>

        <article className="space-y-12">
          <div className="space-y-4 max-w-3xl">
             <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
                <Layers className="w-4 h-4" />
                <span>{page.harmony} Harmony</span>
             </div>
             <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary">
                {page.name} <span className="text-primary italic">Palette</span>
             </h1>
             <p className="text-xl text-text-secondary leading-relaxed">
                {page.description} Perfect for digital products and brand identities centered around {page.baseColor}.
             </p>
          </div>

          {/* Color Strips */}
          <div className="grid grid-cols-1 md:grid-cols-5 h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-border">
             {page.colors.map((hex) => (
                <div
                  key={hex}
                  className="group relative flex items-center justify-center transition-all hover:flex-[1.5]"
                  style={{ backgroundColor: hex }}
                >
                   <span className="opacity-0 group-hover:opacity-100 bg-background/80 backdrop-blur-sm text-text-primary px-4 py-2 rounded-full font-mono text-sm font-bold shadow-xl transition-opacity">
                      {hex.toUpperCase()}
                   </span>
                </div>
             ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <section className="space-y-8">
                <h2 className="text-3xl font-display font-bold">Frequently Asked Questions</h2>
                <div className="space-y-6">
                   {page.faqs.map((faq, index) => (
                      <div key={index} className="bg-surface border border-border p-6 rounded-2xl space-y-3">
                         <h3 className="text-xl font-bold text-text-primary">{faq.question}</h3>
                         <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                      </div>
                   ))}
                </div>

                <div className="bg-text-primary text-background p-8 rounded-3xl space-y-6">
                   <h3 className="text-2xl font-bold">Ready to use this palette?</h3>
                   <p className="opacity-80">Export these exact hex codes directly to your codebase or iterate on them in our generator.</p>
                   <div className="flex flex-wrap gap-4">
                      <Link
                        href={`/generator?p=${hexes}`}
                        className="bg-background text-text-primary px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform inline-flex items-center space-x-2"
                      >
                         <Zap size={18} />
                         <span>Edit in Generator</span>
                      </Link>
                   </div>
                </div>
             </section>

             <section className="space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-display font-bold">Live UI Preview</h2>
                  <p className="text-text-secondary mt-2">See how these colors look on real web components.</p>
                </div>
                <div className="bg-surface border border-border rounded-3xl p-6 md:p-10 shadow-sm">
                   <UIPreviewPane swatches={swatches} />
                </div>
             </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
