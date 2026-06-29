import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildHowToSchema, buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";
import { Palette, Layers } from "lucide-react";
import { SeoMeta } from "@/types/seo";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "How to Build Perfect Color Theory Pairings",
  description: "A comprehensive guide to understanding color theory and building harmonious, professional color palettes using complementary, analogous, and triadic relationships.",
  slug: "/guides/color-theory-pairings",
}));

const howToData = {
  title: "How to Build Perfect Color Theory Pairings",
  description: "Learn how to use color theory to build a harmonious and professional color palette.",
  estimatedTime: "PT15M",
  steps: [
    {
      heading: "Understand the Color Wheel",
      body: "Start by familiarizing yourself with the traditional color wheel. The relationships between colors—whether they sit next to each other or opposite—dictate their harmony."
    },
    {
      heading: "Choose a Base Color",
      body: "Select a primary brand color or emotional anchor. This base color will serve as the foundation for the rest of your palette."
    },
    {
      heading: "Apply a Pairing Rule",
      body: "Decide on a color relationship: Complementary (opposites, high contrast), Analogous (neighbors, low contrast, calming), or Triadic (evenly spaced, vibrant)."
    },
    {
      heading: "Adjust Tints and Shades",
      body: "To make your palette usable in UI design, generate tints (adding white) and shades (adding black) to ensure you have enough contrast for text and backgrounds."
    },
    {
      heading: "Test for Accessibility",
      body: "Always check your final palette combinations against WCAG contrast guidelines to ensure readability."
    }
  ]
};

const metaDataObj: SeoMeta = {
  title: howToData.title,
  description: howToData.description,
  slug: "/guides/color-theory-pairings",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: "2026-06-28T00:00:00.000Z",
  updatedAt: new Date().toISOString()
};

export default function ColorTheoryGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <JsonLd schema={buildHowToSchema(howToData)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Palette className="w-4 h-4" />
              <span>Design Guide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Mastering Color Theory: <span className="text-text-secondary">How to Build Perfect Pairings</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Unlock the science behind harmonious design. Learn how to systematically build stunning color palettes that balance emotion, accessibility, and visual hierarchy.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">The Foundation: The Color Wheel</h2>
              <p>
                Every great color palette starts with a solid understanding of the color wheel. Originating from Isaac Newton&apos;s early experiments with prisms, the color wheel visually maps the relationships between colors. Understanding these relationships is the key to moving beyond guesswork and systematically generating harmonious designs.
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-text-primary">Step-by-Step: Crafting Your Palette</h2>
              <p className="mb-8">
                Once you understand these foundational concepts, you can explore the practical steps of implementation. For a more detailed look at applying this directly to digital products, read our guide on <Link href="/blog/choose-ui-color-palette" className="text-primary hover:underline">how to choose a color palette for UI design</Link>.
              </p>

              <div className="space-y-10">
                {howToData.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-lg text-primary">
                      {idx + 1}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-text-primary m-0">{step.heading}</h3>
                      <p className="leading-relaxed m-0">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6 pt-8 border-t border-border">
              <h2 className="text-3xl font-display font-bold text-text-primary">Deep Dive into Pairing Rules</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="p-6 bg-surface rounded-2xl border border-border space-y-4">
                  <h4 className="text-xl font-bold text-text-primary">Complementary</h4>
                  <p className="text-sm leading-relaxed">
                    Colors directly opposite each other on the wheel (e.g., Blue and Orange). High contrast, high impact. Best used sparingly for call-to-action buttons.
                  </p>
                </div>

                <div className="p-6 bg-surface rounded-2xl border border-border space-y-4">
                  <h4 className="text-xl font-bold text-text-primary">Analogous</h4>
                  <p className="text-sm leading-relaxed">
                    Colors next to each other on the wheel (e.g., Blue, Teal, Green). Low contrast, calming, and naturally pleasing. Perfect for background elements.
                  </p>
                </div>

                <div className="p-6 bg-surface rounded-2xl border border-border space-y-4">
                  <h4 className="text-xl font-bold text-text-primary">Triadic</h4>
                  <p className="text-sm leading-relaxed">
                    Three colors evenly spaced around the wheel (e.g., Red, Yellow, Blue). Vibrant and playful, but requires careful balancing to avoid overwhelming the user.
                  </p>
                </div>

                <div className="p-6 bg-surface rounded-2xl border border-border space-y-4">
                  <h4 className="text-xl font-bold text-text-primary">Monochromatic</h4>
                  <p className="text-sm leading-relaxed">
                    Variations in lightness and saturation of a single base color. Clean, elegant, and almost guaranteed to look professional.
                  </p>
                </div>
              </div>
            </section>
          </article>

          <div className="mt-20 p-8 md:p-12 bg-text-primary text-background rounded-3xl text-center space-y-8">
             <h3 className="text-4xl font-display font-bold">Put Theory into Practice</h3>
             <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Ready to build your own pairings? Use our smart generator to instantly apply these rules and export your perfect palette.
             </p>
             <Link
                href="/generator"
                className="inline-flex items-center space-x-3 bg-background text-text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Start Generating →</span>
             </Link>
          </div>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
