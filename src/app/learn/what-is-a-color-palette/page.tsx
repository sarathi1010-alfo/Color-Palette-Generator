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
  title: "What is a Color Palette? Design Term Explained",
  description: "Learn what a color palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-a-color-palette",
}));

const metaDataObj: SeoMeta = {
  title: "What is a Color Palette? Design Term Explained",
  description: "Learn what a color palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-a-color-palette",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function MicroAnswerPage() {
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
              What is a Color Palette?
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-2xl">
               <p className="text-2xl text-text-primary font-display leading-relaxed m-0 italic">
                  &quot;A color palette is a curated collection of colors used in design and branding to create a consistent visual identity. It defines the specific hues, tints, and shades that will be used across a project to ensure harmony and emotional resonance.&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">How Does a Color Palette Work?</h2>
                <p>
                    A color palette works by establishing a hierarchy of colors. Typically, this includes a primary brand color, secondary supporting colors, and neutral tones for backgrounds and text. By sticking to a defined palette, designers can create a cohesive look and feel across different mediums.
                </p>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
