import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";
import { Palette, Layers } from "lucide-react";
import { SeoMeta } from "@/types/seo";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "Color Theory 101: Complementary, Triadic, and Analogous Schemes Explained",
  description: "Master color theory by understanding complementary, triadic, and analogous color schemes and when to use them in your designs.",
  slug: "/guides/color-theory-complementary-triadic-analogous",
}));

const metaDataObj: SeoMeta = {
  title: "Color Theory 101: Complementary, Triadic, and Analogous Schemes Explained",
  description: "Master color theory by understanding complementary, triadic, and analogous color schemes and when to use them in your designs.",
  slug: "/guides/color-theory-complementary-triadic-analogous",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function ColorTheorySchemesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Palette className="w-4 h-4" />
              <span>Design Education</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Color Theory 101: Complementary, Triadic, and Analogous Schemes Explained
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Demystify the color wheel. Learn the core schemes designers use to create visually stunning and harmonious interfaces.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">What Are Color Schemes?</h2>

              <div className="bg-surface border border-border p-6 rounded-2xl">
                <p className="font-bold text-text-primary mb-2">Quick Answer:</p>
                <p className="m-0 text-text-secondary">
                  Color schemes are logical combinations of colors based on their position on the color wheel. Complementary schemes use opposites for high contrast, analogous use neighbors for harmony, and triadic use three evenly spaced colors for balanced vibrancy.
                </p>
              </div>

              <p>
                A great design relies on rules, not just intuition. The color wheel provides a mathematical framework for pairing colors that inherently look good together. Whether you&apos;re working on a new logo or generating a theme on our <Link href="/" className="text-primary hover:underline">homepage generator</Link>, knowing these relationships is essential.
              </p>
              <p>
                Color theory dates back to Isaac Newton&apos;s development of the first color wheel in 1666. By mapping the spectrum of visible light into a circle, Newton provided a tool that artists and designers have used for centuries. Today, digital UI/UX designers use the exact same principles to build interfaces that don&apos;t strain the user&apos;s eyes and subconsciously guide them toward conversion goals.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Complementary: High Contrast & Impact</h2>
              <p>
                Complementary colors sit directly across from each other on the color wheel (e.g., Red and Green, Blue and Orange, Purple and Yellow).
              </p>

              <h3 className="text-2xl font-bold text-text-primary">When to Use</h3>
              <p>
                Because they create intense contrast, complementary schemes are perfect for making elements pop. The sheer difference in wavelength between the two colors forces the human eye to pay attention. This is why you often see sports teams and blockbuster movie posters utilizing strong complementary palettes (like the famous teal and orange cinematic look).
              </p>
              <p>
                In web design, you must use this power sparingly. If you use complementary colors in equal 50/50 amounts, the design will vibrate and cause eye fatigue. Instead, use one color as your dominant background (say, a deep navy blue) and use its complement (a bright, fiery orange) exclusively for your primary call-to-action buttons. You can find excellent, balanced examples in our <Link href="/palettes" className="text-primary hover:underline">palette library</Link>.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Analogous: Harmony & Calm</h2>
              <p>
                Analogous colors sit next to each other on the color wheel (e.g., Blue, Blue-Green, and Green).
              </p>

              <h3 className="text-2xl font-bold text-text-primary">When to Use</h3>
              <p>
                These schemes are found often in nature—think of the shifting hues of a sunset or the varied greens of a forest. Because there is minimal contrast between the colors, analogous schemes create a serene, unified, and highly professional look. They are ideal for backgrounds, subtle gradients, and applications where you want a calm user experience without jarring visual interruptions.
              </p>
              <p>
                The challenge with analogous palettes is ensuring you maintain enough contrast for accessibility. If your three colors are too similar in lightness, text will become unreadable. A pro tip is to use one of the analogous colors as the dominant hue, a second to support it, and the third (lightened or darkened significantly) as a subtle accent.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Triadic: Balanced Vibrancy</h2>
              <p>
                A triadic scheme uses three colors that are evenly spaced around the color wheel, forming an equilateral triangle (e.g., Red, Yellow, Blue).
              </p>

              <h3 className="text-2xl font-bold text-text-primary">When to Use</h3>
              <p>
                Triadic palettes are energetic and vibrant. Even when you use pale or unsaturated versions of the hues, a triadic scheme retains a lively, dynamic feel. They are fantastic for children&apos;s products, creative agencies, and brands that want to convey a sense of fun and diversity.
              </p>
              <p>
                The trick to making them work in UI design without creating chaos is to let one color dominate while the other two act as accents. For example, you might use a soft pastel yellow for your main background, with deep red headers and bright blue buttons. This maintains the inherent balance of the triad while injecting a controlled, playful energy into the design.
              </p>
            </section>

          </article>

          <div className="mt-20 p-8 md:p-12 bg-surface border border-border rounded-3xl text-center space-y-8">
             <h3 className="text-4xl font-display font-bold text-text-primary">Generate These Schemes Instantly</h3>
             <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Apply these rules to your designs automatically with our smart generator tools.
             </p>
             <Link
                href="/generator"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Try the Generator →</span>
             </Link>
          </div>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
