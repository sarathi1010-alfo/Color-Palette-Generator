import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Check, X, Scale } from "lucide-react";
import { SeoMeta } from "@/types/seo";

// [ENTITY_A] vs [ENTITY_B]: Which Color Palette Generator is Better for [USE_CASE]?

export const metadata = resolveMetadata(buildLandingMeta({
  title: "[ENTITY_A] vs [ENTITY_B]: Which Color Palette Generator is Better for [USE_CASE]?",
  description: "Comparing [ENTITY_A] and [ENTITY_B] for [USE_CASE]. Discover features, pros, cons, and our final verdict on the best color tool.",
  slug: "/guides/vs-comparison",
}));

const metaDataObj: SeoMeta = {
  title: "[ENTITY_A] vs [ENTITY_B]: Which Color Palette Generator is Better for [USE_CASE]?",
  description: "Comparing [ENTITY_A] and [ENTITY_B] for [USE_CASE]. Discover features, pros, cons, and our final verdict on the best color tool.",
  slug: "/guides/vs-comparison",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function ComparisonTemplate() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Scale className="w-4 h-4" />
              <span>Comparison</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              [ENTITY_A] vs [ENTITY_B]: Which is Better for [USE_CASE]?
            </h1>
            <div className="bg-surface border border-primary/20 p-6 rounded-2xl">
               <p className="m-0 text-text-primary">
                 <strong>Quick Verdict:</strong> [1-sentence AI summary of the comparison]
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary m-0">Feature Comparison</h2>
                <div className="overflow-x-auto not-prose">
                    <table className="w-full text-left border-collapse border border-border rounded-2xl overflow-hidden">
                        <thead className="bg-surface">
                            <tr className="text-text-primary border-b border-border">
                                <th className="p-4">Feature</th>
                                <th className="p-4">[ENTITY_A]</th>
                                <th className="p-4">[ENTITY_B]</th>
                                <th className="p-4 text-center">Winner</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr className="border-b border-border hover:bg-surface/50 transition-colors">
                                <td className="p-4 font-bold text-text-primary">Feature 1</td>
                                <td className="p-4">Description A</td>
                                <td className="p-4">Description B</td>
                                <td className="p-4 text-center text-primary font-bold">A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                <section className="bg-surface p-8 rounded-3xl border border-border space-y-4">
                    <h2 className="text-2xl font-bold text-text-primary m-0">[ENTITY_A]</h2>
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-green-500">Pros</h3>
                        <ul className="list-none p-0 space-y-1">
                            <li className="flex items-center space-x-2 text-sm"><Check size={14} className="text-green-500"/> <span>Pro 1</span></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-red-500">Cons</h3>
                        <ul className="list-none p-0 space-y-1">
                            <li className="flex items-center space-x-2 text-sm"><X size={14} className="text-red-500"/> <span>Con 1</span></li>
                        </ul>
                    </div>
                </section>
                <section className="bg-surface p-8 rounded-3xl border border-border space-y-4">
                    <h2 className="text-2xl font-bold text-text-primary m-0">[ENTITY_B]</h2>
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-green-500">Pros</h3>
                        <ul className="list-none p-0 space-y-1">
                            <li className="flex items-center space-x-2 text-sm"><Check size={14} className="text-green-500"/> <span>Pro 1</span></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-red-500">Cons</h3>
                        <ul className="list-none p-0 space-y-1">
                            <li className="flex items-center space-x-2 text-sm"><X size={14} className="text-red-500"/> <span>Con 1</span></li>
                        </ul>
                    </div>
                </section>
            </div>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Final Verdict: When to choose which?</h2>
                <div className="p-8 bg-primary/10 border border-primary/20 rounded-3xl">
                    <p className="text-text-primary font-bold m-0">Choose [ENTITY_A] if:</p>
                    <p className="mt-2">[Reasoning]</p>
                    <p className="text-text-primary font-bold mt-4 m-0">Choose [ENTITY_B] if:</p>
                    <p className="mt-2">[Reasoning]</p>
                </div>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
