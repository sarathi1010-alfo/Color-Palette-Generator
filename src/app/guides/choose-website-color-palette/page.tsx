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
  title: "How to Choose the Best Color Palette for Your Website in 2025",
  description: "Learn how to choose a website color palette using the 60-30-10 rule, brand identity, audience psychology, and competitor analysis.",
  slug: "/guides/choose-website-color-palette",
}));

const metaDataObj: SeoMeta = {
  title: "How to Choose the Best Color Palette for Your Website in 2025",
  description: "Learn how to choose a website color palette using the 60-30-10 rule, brand identity, audience psychology, and competitor analysis.",
  slug: "/guides/choose-website-color-palette",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: "2024-11-05T09:00:00Z",
  updatedAt: "2026-07-10T00:00:00Z"
};

export default function ChoosePaletteGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Palette className="w-4 h-4" />
              <span>Design Guide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              How to Choose the Best Color Palette for Your Website in 2025
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Discover the exact steps to select the perfect colors for your brand, leveraging psychology, the 60-30-10 rule, and smart tools.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Understanding Brand Identity & Audience Psychology</h2>

              <div className="bg-surface border border-border p-6 rounded-2xl">
                <p className="font-bold text-text-primary mb-2">Quick Answer:</p>
                <p className="m-0 text-text-secondary">
                  To choose a website color palette, define your brand&apos;s core emotion, understand your target audience&apos;s psychological response to color, apply the 60-30-10 design rule, and analyze competitors to stand out while remaining industry-appropriate.
                </p>
              </div>

              <p>
                Colors speak faster than words. The moment a user lands on your homepage, their brain is subconsciously processing the hues, shades, and overall aesthetic. Before opening a <Link href="/" className="text-primary hover:underline">color generator</Link>, you need to understand the emotions you want to evoke. If you are specifically building digital products, you might also want to learn <Link href="/blog/choose-ui-color-palette" className="text-primary hover:underline font-bold">how to choose a color palette for UI design</Link> for more technical requirements. Audience psychology plays a massive role in how your website is perceived, dictating everything from brand trust to conversion rates.
              </p>
              <p>
                In 2025, website design is deeply intertwined with behavioral science. Consumers are bombarded with thousands of micro-decisions daily. If your color palette causes cognitive friction, they will bounce. Conversely, if it immediately telegraphs security, innovation, or calm, they will stay. For instance, blue builds trust in fintech, while vibrant yellows and oranges stimulate excitement in creative agencies.
              </p>

              <h3 className="text-2xl font-bold text-text-primary">Defining Your Core Emotion</h3>
              <p>
                Grab a pen and write down three adjectives that describe your brand. Are you &quot;reliable, corporate, and secure&quot;? Or are you &quot;playful, disruptive, and loud&quot;?
                Your core emotion dictates your primary color. If you are building a wellness app, soothing greens and earthy neutrals are non-negotiable. If you are launching an AI startup, deep purples and neon cyan accents suggest cutting-edge technology.
              </p>

              <h3 className="text-2xl font-bold text-text-primary">Competitor Analysis</h3>
              <p>
                Look at your competitors. If every healthcare site is using blue and white, choosing a soft teal or a warm earthy tone could help you stand out. The goal is to be distinct but not jarring. You want to subvert expectations just enough to be memorable, but not so much that you alienate the user. Explore our <Link href="/palettes" className="text-primary hover:underline">explore library</Link> to see what color combinations are trending in different industries.
              </p>
              <p>
                Create a mood board of your top five competitors. Map out their primary, secondary, and accent colors. You will quickly spot industry clichés. The secret to a 2025-ready palette is finding the &quot;white space&quot; in that visual landscape.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">The 60-30-10 Rule</h2>
              <p>
                The 60-30-10 rule is a timeless design principle that ensures balance in your color scheme. Originating from interior design, it has become the gold standard for UI/UX professionals:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>60% Primary Color:</strong> Usually a neutral tone used for backgrounds. It sets the overall tone of the design.</li>
                <li><strong>30% Secondary Color:</strong> Used for headers, sidebars, or highlighting content. It supports the primary color but stands out enough to create visual interest.</li>
                <li><strong>10% Accent Color:</strong> The most vibrant color, reserved for call-to-action buttons (CTAs) and important links. It tells the user exactly where to look and what to do.</li>
              </ul>
              <p>
                This rule prevents your design from feeling overwhelming and naturally guides the user&apos;s eye to important elements. When every element screams for attention, nothing gets it. By restricting your most vibrant color to just 10% of the interface, you guarantee high conversion rates.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Accessibility: The Non-Negotiable Standard</h2>
              <p>
                In 2025, aesthetics mean nothing if they aren&apos;t accessible. Over 300 million people globally have some form of color vision deficiency. If your text doesn&apos;t contrast sufficiently with your background, you are actively turning away users (and damaging your SEO).
              </p>
              <p>
                The Web Content Accessibility Guidelines (WCAG) require a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Before finalizing any palette, you must run it through a checker. Our tools integrate this seamlessly.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Leveraging the Personality Generator</h2>
              <p>
                In 2025, you don&apos;t have to guess. Use intelligent tools like the PaletteFlow Personality Generator. By inputting your brand&apos;s traits (e.g., &quot;playful, modern, energetic&quot;), the generator uses AI and color theory to instantly provide palettes that match your exact vibe, saving hours of manual tweaking.
              </p>
              <p>
                The generator doesn&apos;t just spit out random hex codes. It calculates the optimal contrast ratios, generates the necessary tints and shades for your Tailwind config, and ensures the relationships between the colors (whether analogous, complementary, or triadic) are mathematically sound.
              </p>
            </section>

          </article>

          <div className="mt-20 p-8 md:p-12 bg-surface border border-border rounded-3xl text-center space-y-8">
             <h3 className="text-4xl font-display font-bold text-text-primary">Ready to Find Your Colors?</h3>
             <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Stop guessing and start generating. Create your perfect palette in seconds.
             </p>
             <Link
                href="/"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Open Generator →</span>
             </Link>
          </div>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
