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
  title: "How to Create a Tailwind CSS Color Palette from Scratch",
  description: "Learn how to use a Tailwind CSS color palette generator to build a complete 50-950 shade system from a single hex color.",
  slug: "/guides/tailwind-css-color-palette-generator",
}));

const metaDataObj: SeoMeta = {
  title: "How to Create a Tailwind CSS Color Palette from Scratch",
  description: "Learn how to use a Tailwind CSS color palette generator to build a complete 50-950 shade system from a single hex color.",
  slug: "/guides/tailwind-css-color-palette-generator",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function TailwindGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Palette className="w-4 h-4" />
              <span>Tailwind Integration</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              How to Create a Tailwind CSS Color Palette from Scratch
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Generate a perfectly balanced 50-950 shade system for your Next.js and Tailwind projects instantly.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Understanding the Tailwind Shade System</h2>

              <div className="bg-surface border border-border p-6 rounded-2xl">
                <p className="font-bold text-text-primary mb-2">Quick Answer:</p>
                <p className="m-0 text-text-secondary">
                  To create a Tailwind CSS color palette, start with a core brand color (usually the 500 shade). Then, use a generator to mathematically calculate lighter tints (50-400) by mixing with white, and darker shades (600-950) by mixing with black, ensuring consistent contrast steps.
                </p>
              </div>

              <p>
                Tailwind CSS revolutionized utility-first styling, and a massive part of its success is its default color palette. Rather than dealing with random hex codes, Tailwind relies on a numeric scale (50 to 950) to manage colors.
              </p>
              <p>
                In this system, the 500 value is typically your primary brand color. The lower numbers (50, 100, 200) represent lighter tints, perfect for backgrounds and soft borders. The higher numbers (700, 800, 950) represent darker shades, essential for text, dark mode backgrounds, and deep shadows. Having this gradient allows developers to easily style hover states (e.g., changing a button from <code>bg-blue-500</code> to <code>bg-blue-600</code>) and build accessible interfaces without constantly referencing a design file.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">The Math Behind the Shades</h2>
              <p>
                You cannot simply pick 11 random colors that look somewhat similar and call it a Tailwind scale. A proper scale requires mathematical precision to ensure that the contrast ratio increases at a predictable rate.
              </p>
              <p>
                Generally, creating the lighter tints involves interpolating your base 500 color with white. The 50 shade is almost pure white with just a hint of the base hue (often around 95% lightness in HSL). Creating the darker shades involves interpolating the base color with black, taking the 950 shade down to around 10-15% lightness.
              </p>
              <p>
                Furthermore, the saturation often needs to be adjusted along the curve. Simply adding white or black can make colors look &quot;muddy&quot; or &quot;washed out.&quot; Advanced color generation algorithms (like the ones we use) adjust the saturation up or down depending on the lightness to ensure every single shade pops.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Generating the Palette Automatically</h2>
              <p>
                Manually guessing hex values and checking contrast for 11 different shades is nearly impossible to get right. By using our dedicated <Link href="/tools/tints-shades" className="text-primary hover:underline">Tints & Shades tool</Link>, you can lock in your primary brand color, and we will automatically calculate the optimal lightness steps to build out your full Tailwind configuration in milliseconds.
              </p>
              <p>
                Once generated, you can visually inspect the scale. The tool displays the exact hex codes and provides one-click copy functionality. If you are building a larger theme, you can use our main <Link href="/" className="text-primary hover:underline">generator</Link> to build out primary, secondary, and accent colors, and then generate full 50-950 scales for each of them.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Implementing in Tailwind v4</h2>
              <p>
                With the release of Tailwind v4, integrating custom colors has moved away from the complex `tailwind.config.js` and into pure CSS using the new <code>@theme</code> directive. This makes sharing and implementing generated palettes significantly easier.
              </p>
              <p>
                Once you generate your palette, simply copy the export and paste it into your `globals.css` file:
              </p>
              <pre className="bg-surface p-4 rounded-xl border border-border overflow-x-auto text-sm text-text-primary">
{`@import "tailwindcss";

@theme {
  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-200: #bfdbfe;
  --color-brand-300: #93c5fd;
  --color-brand-400: #60a5fa;
  --color-brand-500: #3b82f6; /* Base Brand Color */
  --color-brand-600: #2563eb;
  --color-brand-700: #1d4ed8;
  --color-brand-800: #1e40af;
  --color-brand-900: #1e3a8a;
  --color-brand-950: #172554;
}`}
              </pre>
              <p>
                As soon as this is saved, your Next.js app will immediately have access to classes like <code>bg-brand-500</code> and <code>text-brand-950</code> without requiring any server restarts or complex configuration merges.
              </p>
            </section>

          </article>

          <div className="mt-20 p-8 md:p-12 bg-surface border border-border rounded-3xl text-center space-y-8">
             <h3 className="text-4xl font-display font-bold text-text-primary">Generate Your Tailwind Scale</h3>
             <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Input your brand color and instantly get a full 50-950 scale ready to paste into your CSS.
             </p>
             <Link
                href="/tools/tints-shades"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Open Tints & Shades →</span>
             </Link>
          </div>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
