"use client";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Briefcase, Copy, Check } from "lucide-react";
import { useState } from "react";
import { SeoMeta } from "@/types/seo";

// The Best Color Palettes for [INDUSTRY] Brands in 2026

export const metadata = resolveMetadata(buildLandingMeta({
  title: "The Best Color Palettes for [INDUSTRY] Brands in 2026",
  description: "Discover why color matters for [INDUSTRY] and explore curated palettes with hex codes, explanations, and industry-specific design tips.",
  slug: "/guides/industry-example",
}));

const metaDataObj: SeoMeta = {
  title: "The Best Color Palettes for [INDUSTRY] Brands in 2026",
  description: "Discover why color matters for [INDUSTRY] and explore curated palettes with hex codes, explanations, and industry-specific design tips.",
  slug: "/guides/industry-example",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

const palettes = [
    {
        name: "[Industry Palette 1]",
        colors: ["#000000", "#111111", "#222222", "#333333", "#444444"],
        logic: "Why this works for the industry..."
    }
];

export default function IndustryUseCaseTemplate() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <header className="space-y-6 mb-16 border-b border-border pb-12 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Briefcase className="w-4 h-4" />
              <span>Industry Use-Case</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Best Color Palettes for <span className="text-primary italic">[INDUSTRY]</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              Understand the psychological impact of color in [INDUSTRY] and how to choose a scheme that builds trust and authority.
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none space-y-16 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Why Color Matters in [INDUSTRY]</h2>
                <p>Explanation of industry color standards and psychological associations...</p>
            </section>

            <section className="space-y-12 not-prose">
                <h2 className="text-3xl font-display font-bold text-text-primary">5 Curated [INDUSTRY] Palettes</h2>
                <div className="space-y-8">
                    {palettes.map((p, idx) => (
                        <div key={idx} className="bg-surface border border-border rounded-3xl p-8 space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">{p.name}</h3>
                                <button
                                    onClick={() => copyToClipboard(p.colors.join(", "), idx)}
                                    className="p-2 hover:bg-background rounded-lg transition-colors"
                                >
                                    {copiedIndex === idx ? <Check size={20} className="text-green-500"/> : <Copy size={20}/>}
                                </button>
                            </div>
                            <div className="flex h-24 rounded-xl overflow-hidden shadow-lg">
                                {p.colors.map((c, i) => (
                                    <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                                ))}
                            </div>
                            <p className="text-text-secondary italic">{p.logic}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">How to Apply These Palettes</h2>
                <p>Best practices for UI implementation, branding, and consistency...</p>
            </section>

            <section className="bg-surface p-8 rounded-3xl border border-border not-prose space-y-6">
                <h2 className="text-2xl font-bold text-text-primary m-0 text-center">Quick Reference Table</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-background">
                            <tr className="text-text-secondary text-xs font-bold uppercase tracking-widest border-b border-border">
                                <th className="p-4">Industry</th>
                                <th className="p-4">Best Harmony</th>
                                <th className="p-4">Primary HEX</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border/50">
                                <td className="p-4">[INDUSTRY]</td>
                                <td className="p-4">[Harmony Name]</td>
                                <td className="p-4 font-mono">#000000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
