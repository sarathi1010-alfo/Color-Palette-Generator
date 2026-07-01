import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Layers, Zap } from "lucide-react";
import { SeoMeta } from "@/types/seo";
import Link from "next/link";

// The Complete Guide to [COLOR_HARMONY] Color Schemes

export const metadata = resolveMetadata(buildLandingMeta({
  title: "The Complete Guide to [COLOR_HARMONY] Color Schemes",
  description: "Master the [COLOR_HARMONY] color harmony. Learn how it works, when to use it, and how to generate perfect schemes with PaletteFlow.",
  slug: "/guides/harmony-slug",
}));

const metaDataObj: SeoMeta = {
  title: "The Complete Guide to [COLOR_HARMONY] Color Schemes",
  description: "Master the [COLOR_HARMONY] color harmony. Learn how it works, when to use it, and how to generate perfect schemes with PaletteFlow.",
  slug: "/guides/harmony-slug",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function HarmonyTemplate() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Layers className="w-4 h-4" />
              <span>Color Theory</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              The Complete Guide to <span className="text-primary italic">[COLOR_HARMONY]</span> Color Schemes
            </h1>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">What is [COLOR_HARMONY]?</h2>
                <p>Detailed explanation of the harmony...</p>
            </section>

            <section className="bg-surface p-8 rounded-3xl border border-border space-y-6 not-prose">
                <h2 className="text-2xl font-bold text-text-primary m-0">How to Create [COLOR_HARMONY] Palettes</h2>
                <p className="text-text-secondary m-0">Follow these steps in the PaletteFlow generator:</p>
                <ol className="space-y-4 list-decimal list-inside text-text-secondary">
                    <li>Open the <Link href="/generator" className="text-primary hover:underline font-bold">Generator</Link></li>
                    <li>Select &apos;[COLOR_HARMONY]&apos; from the harmony settings</li>
                    <li>Hit spacebar to iterate</li>
                </ol>
            </section>

            <section className="space-y-8">
                <h2 className="text-3xl font-display font-bold text-text-primary">5 Examples in Action</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="space-y-3">
                            <div className="h-12 flex rounded-lg overflow-hidden border border-border">
                                <div className="flex-1 bg-primary" />
                                <div className="flex-1 bg-surface" />
                                <div className="flex-1 bg-text-secondary" />
                            </div>
                            <p className="text-sm font-bold text-text-primary m-0">Example {i}: Description</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">[COLOR_HARMONY] vs Others</h2>
                <p>Comparison with related harmonies...</p>
            </section>

            <section className="bg-text-primary text-background p-12 rounded-[2.5rem] text-center space-y-8 not-prose">
                <h2 className="text-4xl font-display font-bold">Ready to design?</h2>
                <p className="text-lg opacity-80">Start generating [COLOR_HARMONY] palettes instantly.</p>
                <Link href="/generator" className="inline-flex items-center space-x-2 bg-background text-text-primary px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
                    <Zap size={20} />
                    <span>Open Generator</span>
                </Link>
            </section>

            <section className="pt-12 border-t border-border not-prose">
                 <h2 className="text-2xl font-bold text-text-primary mb-6">Quick Reference Table</h2>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-surface">
                            <tr className="text-text-secondary text-xs font-bold uppercase tracking-widest border-b border-border">
                                <th className="p-4">Characteristics</th>
                                <th className="p-4">Best For</th>
                                <th className="p-4">Key Mood</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-primary">
                            <tr className="border-b border-border/50">
                                <td className="p-4">...</td>
                                <td className="p-4">...</td>
                                <td className="p-4">...</td>
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
