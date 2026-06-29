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
  title: "How to Export Color Palettes to CSS Variables, Tailwind, and SCSS",
  description: "Learn how to export generated color palettes directly to CSS variables, Tailwind CSS configurations, and SCSS for seamless developer workflows.",
  slug: "/guides/css-variables-color-palette-generator",
}));

const metaDataObj: SeoMeta = {
  title: "How to Export Color Palettes to CSS Variables, Tailwind, and SCSS",
  description: "Learn how to export generated color palettes directly to CSS variables, Tailwind CSS configurations, and SCSS for seamless developer workflows.",
  slug: "/guides/css-variables-color-palette-generator",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function ExportGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Palette className="w-4 h-4" />
              <span>Developer Workflow</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              How to Export Color Palettes to CSS Variables, Tailwind, and SCSS
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Bridge the gap between design and development. Learn how to convert your visual palettes directly into production-ready code.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Why Use CSS Variables?</h2>

              <div className="bg-surface border border-border p-6 rounded-2xl">
                <p className="font-bold text-text-primary mb-2">Quick Answer:</p>
                <p className="m-0 text-text-secondary">
                  Exporting color palettes to CSS variables allows developers to maintain a single source of truth for colors across an application, enabling dynamic theme switching (like dark mode) and simplifying global style updates without changing hardcoded hex values.
                </p>
              </div>

              <p>
                Hardcoding hex values into your CSS is a nightmare for maintenance. By exporting your colors from our <Link href="/" className="text-primary hover:underline">main generator</Link> directly into CSS Variables (Custom Properties), you ensure your design system remains flexible and scalable. When the marketing team decides that the primary brand blue needs to be 5% darker, you don&apos;t want to execute a global search and replace across 50 components. You want to change a single variable in your root configuration and watch the entire application update instantly.
              </p>
              <p>
                Furthermore, modern web applications demand dynamic theming. If you want to support a dark mode toggle, CSS variables are not just a luxury; they are an architectural requirement. You can define `--bg-surface` as white in your root scope, and redefine it as a dark charcoal in a `[data-theme=&quot;dark&quot;]` scope. The CSS engine handles the rest.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Exporting to Native CSS</h2>
              <p>
                Native CSS variables let you define colors on the <code>:root</code> element, making them globally available throughout your stylesheet tree. When you export a palette from PaletteFlow, you get clean, formatted CSS ready to be pasted directly into your global stylesheet.
              </p>
              <pre className="bg-surface p-4 rounded-xl border border-border overflow-x-auto text-sm text-text-primary">
{`:root {
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-900: #1e3a8a;

  --secondary-50: #f0fdf4;
  --secondary-500: #10b981;
  --secondary-900: #064e3b;

  --background: #ffffff;
  --text-primary: #111827;
}`}
              </pre>
              <p>
                Using these is as simple as calling the <code>var()</code> function in your CSS rules: <code>background-color: var(--primary-500);</code>. This native implementation requires zero build tools, zero preprocessors, and is supported by every modern browser.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Integrating with Tailwind CSS v4</h2>
              <p>
                Tailwind CSS has become the industry standard for utility-first styling. In older versions, integrating custom colors meant navigating a complex `tailwind.config.js` file and ensuring your object syntax was perfectly formatted.
              </p>
              <p>
                With the advent of Tailwind CSS v4, the configuration has moved entirely to CSS via the <code>@theme</code> directive. This is a massive leap forward for developer experience. Exporting to Tailwind now involves generating the exact CSS syntax required by the compiler. You can browse our <Link href="/palettes" className="text-primary hover:underline">library</Link> and instantly copy the Tailwind v4-ready format for any palette.
              </p>
              <pre className="bg-surface p-4 rounded-xl border border-border overflow-x-auto text-sm text-text-primary">
{`@theme {
  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-500: #3b82f6;
  --color-brand-900: #1e3a8a;
  --color-brand-950: #172554;
}`}
              </pre>
              <p>
                Once pasted into your main CSS file, Tailwind immediately makes these available as utility classes, such as <code>bg-brand-500</code> or <code>text-brand-900</code>.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">SCSS Variables</h2>
              <p>
                While CSS variables are powerful for runtime evaluation (like dark mode), many enterprise applications still rely heavily on Sass (SCSS) for build-time compilation.
              </p>
              <p>
                Exporting to SCSS variables (using the <code>$</code> syntax) allows you to leverage powerful Sass color functions. For example, if you export your base brand color as <code>$color-primary: #3b82f6;</code>, you can use <code>darken($color-primary, 10%)</code> for hover states or <code>rgba($color-primary, 0.5)</code> for transparent overlays directly within your mixins.
              </p>
              <p>
                PaletteFlow provides immediate, one-click exports to SCSS maps, making it trivial to integrate our generated harmonies into complex, legacy enterprise stylesheets.
              </p>
            </section>

          </article>

          <div className="mt-20 p-8 md:p-12 bg-surface border border-border rounded-3xl text-center space-y-8">
             <h3 className="text-4xl font-display font-bold text-text-primary">Export Your First Palette</h3>
             <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Generate a custom palette and instantly copy the CSS, Tailwind, or SCSS code to your clipboard.
             </p>
             <Link
                href="/"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Go to Generator →</span>
             </Link>
          </div>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
