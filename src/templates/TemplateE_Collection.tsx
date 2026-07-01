import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Palette, Copy, Check } from "lucide-react";
import { useState } from "react";

// [NUMBER] [MOOD/INDUSTRY] Color Palettes for [PROJECT_TYPE] in 2026

export const metadata = resolveMetadata(buildLandingMeta({
  title: "[NUMBER] [MOOD/INDUSTRY] Color Palettes for [PROJECT_TYPE] in 2026",
  description: "Browse curated [MOOD/INDUSTRY] color schemes. Perfect for [PROJECT_TYPE]. Includes hex codes, export code, and design tips.",
  slug: "/palettes/collection-slug",
}));

const samplePalettes = [
    {
        name: "[Palette Name]",
        colors: ["#000000", "#111111", "#222222", "#333333", "#444444"],
        harmony: "Analogous",
        mood: "Professional",
        why: "Explanation of why it works..."
    }
];

export default function CollectionTemplate() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-5xl">
          <header className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Palette className="w-3 h-3" />
              <span>Curation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              [NUMBER] [MOOD/INDUSTRY] <span className="text-primary italic">Color Palettes</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Why [MOOD/INDUSTRY] colors work for [PROJECT_TYPE] and how to apply them to your designs.
            </p>
          </header>

          <div className="space-y-16">
            {samplePalettes.map((palette, idx) => (
                <section key={idx} className="bg-surface border border-border rounded-[3rem] p-8 md:p-12 space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-display font-bold">{palette.name}</h2>
                            <p className="text-text-secondary">{palette.harmony} • {palette.mood}</p>
                        </div>
                        <button
                            onClick={() => copyToClipboard(palette.colors.join(", "), idx)}
                            className="flex items-center justify-center space-x-2 bg-text-primary text-background px-6 py-3 rounded-2xl font-bold text-sm hover:scale-[1.02] transition-transform"
                        >
                            {copiedIndex === idx ? <Check size={18} /> : <Copy size={18} />}
                            <span>{copiedIndex === idx ? "Copied!" : "Copy Hex Codes"}</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-5 h-48 rounded-[2rem] overflow-hidden shadow-2xl">
                        {palette.colors.map((color, i) => (
                            <div key={i} className="group relative flex items-end p-4" style={{ backgroundColor: color }}>
                                <span className="bg-background/90 text-text-primary px-2 py-1 rounded text-[10px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                                    {color}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Design Logic</h3>
                            <p className="text-text-secondary leading-relaxed">{palette.why}</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Export CSS</h3>
                            <pre className="bg-background p-6 rounded-2xl border border-border text-xs font-mono overflow-x-auto">
                                {`:root {\n  --primary: ${palette.colors[0]};\n  --secondary: ${palette.colors[1]};\n  --accent: ${palette.colors[2]};\n}`}
                            </pre>
                        </div>
                    </div>
                </section>
            ))}
          </div>

          <section className="mt-32 p-12 bg-surface border border-border rounded-[3rem] space-y-8">
              <h2 className="text-3xl font-display font-bold text-center">Quick Reference Guide</h2>
              <div className="overflow-x-auto">
                  <table className="w-full text-left">
                      <thead>
                          <tr className="text-text-secondary text-sm font-bold uppercase tracking-widest border-b border-border">
                              <th className="pb-4">Palette Name</th>
                              <th className="pb-4">Mood</th>
                              <th className="pb-4">Best For</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="border-b border-border/50">
                              <td className="py-4 font-bold">[Name]</td>
                              <td className="py-4">[Mood]</td>
                              <td className="py-4">[Scenario]</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </section>
        </PageWrapper>
      </main>

      <Footer />
    </div>
  );
}
