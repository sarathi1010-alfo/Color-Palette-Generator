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
  title: "What is Color Theory? Design Term Explained",
  description: "Learn what color theory means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-color-theory",
}));

const metaDataObj: SeoMeta = {
  title: "What is Color Theory? Design Term Explained",
  description: "Learn what color theory means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-color-theory",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function ColorTheoryMicroPage() {
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
              What is Color Theory?
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-2xl">
               <p className="text-2xl text-text-primary font-display leading-relaxed m-0 italic">
                  &quot;Color theory is both the science and art of using color. It explains how humans perceive color; and the visual effects of how colors mix, match or contrast with each other. It also involves the messages colors communicate; and the methods used to replicate color.&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">The Importance of Color Theory</h2>
                <p>
                    In design, color theory helps you build a brand that stands out. It provides a logical structure for color, which helps you create palettes that evoke specific emotions and ensure readability and accessibility.
                </p>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
