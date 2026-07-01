import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HelpCircle } from "lucide-react";
import { SeoMeta } from "@/types/seo";

// What is [COLOR_TERM]? (direct question format)

export const metadata = resolveMetadata(buildLandingMeta({
  title: "What is [COLOR_TERM]? Design Term Explained",
  description: "Learn what [COLOR_TERM] means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/example-slug",
}));

const metaDataObj: SeoMeta = {
  title: "What is [COLOR_TERM]? Design Term Explained",
  description: "Learn what [COLOR_TERM] means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/example-slug",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function MicroAnswerTemplate() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-3xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <HelpCircle className="w-4 h-4" />
              <span>Glossary</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              What is [COLOR_TERM]?
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-2xl">
               <p className="text-2xl text-text-primary font-display leading-relaxed m-0 italic">
                  &quot;[40-60 word definition of the term for featured snippet optimization]&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">How Does [TERM] Work?</h2>
                <p>Explanation of the mechanics...</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Real-World Example of [TERM] in [INDUSTRY]</h2>
                <p>Contextual application...</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Why is [TERM] Important?</h2>
                <p>Significance in design/dev workflow...</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">[TERM] vs [RELATED_TERM]</h2>
                <div className="not-prose overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-surface border border-border rounded-2xl">
                        <thead>
                            <tr className="border-b border-border text-text-primary">
                                <th className="p-4">Comparison</th>
                                <th className="p-4">[TERM]</th>
                                <th className="p-4">[RELATED_TERM]</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr>
                                <td className="p-4 font-bold">Key Difference</td>
                                <td className="p-4">...</td>
                                <td className="p-4">...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="bg-surface p-8 rounded-3xl border border-border">
                <h3 className="text-xl font-bold text-text-primary mb-4 m-0">Core Principles</h3>
                <ul className="list-none p-0 m-0 space-y-2">
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>[Principle 1]</span>
                    </li>
                </ul>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
