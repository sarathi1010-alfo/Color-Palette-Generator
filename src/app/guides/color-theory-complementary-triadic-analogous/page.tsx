import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";
import { Layers, Zap } from "lucide-react";
import { SeoMeta } from "@/types/seo";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "The Ultimate Guide to Complementary, Triadic, and Analogous Colors",
  description: "Master the fundamental color harmonies. Learn how to combine colors using complementary, triadic, and analogous schemes for perfect design balance.",
  slug: "/guides/color-theory-complementary-triadic-analogous",
}));

const metaDataObj: SeoMeta = {
  title: "The Ultimate Guide to Complementary, Triadic, and Analogous Colors",
  description: "Master the fundamental color harmonies. Learn how to combine colors using complementary, triadic, and analogous schemes for perfect design balance.",
  slug: "/guides/color-theory-complementary-triadic-analogous",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: "2024-12-20T09:00:00Z",
  updatedAt: "2026-06-15T10:30:00Z"
};

export default function ColorTheoryGuidePage() {
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
              Complementary, Triadic, and Analogous <span className="text-primary italic">Harmonies</span>
            </h1>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">What is Color Harmony?</h2>
              <p>
                Color harmony is the art and science of combining colors in a way that is pleasing to the eye. It creates a sense of order and balance in visual experiences. Understanding these rules is a prerequisite for anyone learning <Link href="/blog/choose-ui-color-palette" className="text-primary hover:underline font-bold">how to choose a color palette for UI design</Link> that is both accessible and beautiful.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Complementary Color Schemes</h2>
              <p>
                Complementary colors are pairs of colors which, when combined or mixed, cancel each other out by producing a grayscale color like white or black. When placed next to each other, they create the strongest contrast for those two colors.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Analogous Color Schemes</h2>
              <p>
                Analogous color schemes use colors that are next to each other on the color wheel. They usually match well and create serene and comfortable designs.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Triadic Color Schemes</h2>
              <p>
                A triadic color scheme uses colors that are evenly spaced around the color wheel. Triadic color harmonies tend to be quite vibrant, even if you use pale or unsaturated versions of your hues.
              </p>
            </section>

            <section className="bg-text-primary text-background p-12 rounded-[2.5rem] text-center space-y-8 not-prose">
                <h2 className="text-4xl font-display font-bold">Ready to design?</h2>
                <p className="text-lg opacity-80">Start generating harmonious palettes instantly.</p>
                <Link href="/generator" className="inline-flex items-center space-x-2 bg-background text-text-primary px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
                    <Zap size={20} />
                    <span>Open Generator</span>
                </Link>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
