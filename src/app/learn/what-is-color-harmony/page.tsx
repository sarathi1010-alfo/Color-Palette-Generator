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
  title: "What is Color Harmony? Design Term Explained",
  description: "Learn what color harmony means in UI/UX design, how it works, and why it is essential for professional visual balance.",
  slug: "/learn/what-is-color-harmony",
}));

const metaDataObj: SeoMeta = {
  title: "What is Color Harmony? Design Term Explained",
  description: "Learn what color harmony means in UI/UX design, how it works, and why it is essential for professional visual balance.",
  slug: "/learn/what-is-color-harmony",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function ColorHarmonyMicroPage() {
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
              What is Color Harmony?
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-2xl">
               <p className="text-2xl text-text-primary font-display leading-relaxed m-0 italic">
                  &quot;Color harmony refers to the aesthetically pleasing arrangement of colors. In design, harmony is achieved when the colors used in a composition work together to create a sense of order and balance, rather than chaos or boredom.&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Achieving Visual Balance</h2>
                <p>
                    Visual balance is the core goal of color harmony. You can achieve it by using standard formulas like complementary, triadic, or analogous schemes. Harmony ensures that your design communicates the right message and provides a comfortable experience for the user.
                </p>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
