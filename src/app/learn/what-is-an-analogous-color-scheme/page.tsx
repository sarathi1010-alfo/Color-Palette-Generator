import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HelpCircle } from "lucide-react";
import { SeoMeta } from "@/types/seo";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "What is an Analogous Color Scheme? Design Term Explained",
  description: "Learn what an analogous color scheme means in UI/UX design, how it works, and why it is great for serene, harmonious palettes.",
  slug: "/learn/what-is-an-analogous-color-scheme",
}));

const metaDataObj: SeoMeta = {
  title: "What is an Analogous Color Scheme? Design Term Explained",
  description: "Learn what an analogous color scheme means in UI/UX design, how it works, and why it is great for serene, harmonious palettes.",
  slug: "/learn/what-is-an-analogous-color-scheme",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function AnalogousMicroPage() {
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
              What is an Analogous Color Scheme?
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-2xl">
               <p className="text-2xl text-text-primary font-display leading-relaxed m-0 italic">
                  &quot;Analogous color schemes use colors that are next to each other on the color wheel. They usually match well and create serene and comfortable designs. Analogous color schemes are often found in nature and are harmonious and pleasing to the eye.&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Best Practices for Analogous Palettes</h2>
                <p>
                    When using an analogous scheme, choose one color to dominate, a second to support, and a third as an accent (along with black, white, or gray). This ensures enough contrast and hierarchy in your design.
                </p>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
