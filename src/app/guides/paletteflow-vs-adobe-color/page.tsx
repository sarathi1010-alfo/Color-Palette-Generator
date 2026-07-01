import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Check, X, Scale } from "lucide-react";
import { SeoMeta } from "@/types/seo";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "PaletteFlow vs Adobe Color: Best Palette Generator for Designers?",
  description: "Comparing PaletteFlow and Adobe Color for professional design workflows. Discover features, pros, cons, and our final verdict.",
  slug: "/guides/paletteflow-vs-adobe-color",
}));

const metaDataObj: SeoMeta = {
  title: "PaletteFlow vs Adobe Color: Best Palette Generator for Designers?",
  description: "Comparing PaletteFlow and Adobe Color for professional design workflows. Discover features, pros, cons, and our final verdict.",
  slug: "/guides/paletteflow-vs-adobe-color",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function AdobeComparisonPage() {
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
              PaletteFlow vs Adobe Color: Which is Better for UI Design?
            </h1>
            <div className="bg-surface border border-primary/20 p-6 rounded-2xl">
               <p className="m-0 text-text-primary">
                 <strong>Quick Verdict:</strong> Adobe Color is unmatched for pure creative exploration within the CC ecosystem, but PaletteFlow is faster and more efficient for frontend developers and UI designers.
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
                                <th className="p-4">Adobe Color</th>
                                <th className="p-4">PaletteFlow</th>
                                <th className="p-4 text-center">Winner</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr className="border-b border-border hover:bg-surface/50 transition-colors">
                                <td className="p-4 font-bold text-text-primary">Ecosystem</td>
                                <td className="p-4">Adobe Creative Cloud</td>
                                <td className="p-4">Standalone / Web</td>
                                <td className="p-4 text-center text-primary font-bold">Adobe</td>
                            </tr>
                            <tr className="border-b border-border hover:bg-surface/50 transition-colors">
                                <td className="p-4 font-bold text-text-primary">Dev Exports</td>
                                <td className="p-4">Basic Hex/RGB</td>
                                <td className="p-4">Tailwind/CSS/SCSS</td>
                                <td className="p-4 text-center text-primary font-bold">PaletteFlow</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                <section className="bg-surface p-8 rounded-3xl border border-border space-y-4">
                    <h2 className="text-2xl font-bold text-text-primary m-0">Adobe Color</h2>
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-green-500">Pros</h3>
                        <ul className="list-none p-0 space-y-1">
                            <li className="flex items-center space-x-2 text-sm"><Check size={14} className="text-green-500"/> <span>Deep CC Integration</span></li>
                        </ul>
                    </div>
                </section>
                <section className="bg-surface p-8 rounded-3xl border border-border space-y-4">
                    <h2 className="text-2xl font-bold text-text-primary m-0">PaletteFlow</h2>
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-green-500">Pros</h3>
                        <ul className="list-none p-0 space-y-1">
                            <li className="flex items-center space-x-2 text-sm"><Check size={14} className="text-green-500"/> <span>Superior Dev Workflow</span></li>
                        </ul>
                    </div>
                </section>
            </div>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
