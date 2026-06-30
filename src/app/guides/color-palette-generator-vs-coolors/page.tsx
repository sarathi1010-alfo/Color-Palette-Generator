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
  title: "PaletteFlow vs Coolors: Which Color Palette Generator Is Right for You?",
  description: "Compare PaletteFlow and Coolors to see which color palette generator offers the best features, export options, accessibility tools, and pricing for your workflow.",
  slug: "/guides/color-palette-generator-vs-coolors",
}));

const metaDataObj: SeoMeta = {
  title: "PaletteFlow vs Coolors: Which Color Palette Generator Is Right for You?",
  description: "Compare PaletteFlow and Coolors to see which color palette generator offers the best features, export options, accessibility tools, and pricing for your workflow.",
  slug: "/guides/color-palette-generator-vs-coolors",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function CompareGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <Palette className="w-4 h-4" />
              <span>Tool Comparison</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              PaletteFlow vs Coolors: Which Color Palette Generator Is Right for You?
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Find out which color tool fits your design workflow best by comparing features, pricing, and developer integrations.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Head-to-Head Comparison</h2>

              <div className="bg-surface border border-border p-6 rounded-2xl">
                <p className="font-bold text-text-primary mb-2">Quick Answer:</p>
                <p className="m-0 text-text-secondary">
                  While Coolors is a popular general-purpose color palette generator, PaletteFlow distinguishes itself by being 100% free and specifically geared toward developer workflows, offering instant CSS/Tailwind exports, integrated real-time WCAG contrast checking, and zero paywalls for advanced features.
                </p>
              </div>

              <p>
                Choosing the right tool can save you hours of design and development time. Coolors has been a staple in the design community for years, providing a fun, spacebar-smashing experience for generating random colors. However, modern web development requires tools that bridge the gap between UI design and frontend code. You can try our developer-focused <Link href="/" className="text-primary hover:underline">generator</Link> directly to see the difference.
              </p>
              <p>
                The primary difference lies in the target audience. Coolors is fantastic for illustrators, graphic designers, and artists looking for general inspiration. PaletteFlow was built from the ground up for UI/UX designers and frontend engineers who need to deploy these colors into production code immediately.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Pricing and Accessibility</h2>
              <p>
                Let&apos;s address the elephant in the room: pricing. Coolors operates on a freemium model. It offers a free tier, but many advanced features are locked behind a Pro subscription. If you want to save unlimited palettes, access specific export formats, or utilize advanced contrast checking, you have to hit a paywall.
              </p>
              <p>
                PaletteFlow is built on the philosophy that essential design tools should be accessible to everyone, from solo indie hackers to enterprise teams. All features, including our comprehensive <Link href="/palettes" className="text-primary hover:underline">palette library</Link>, full export options, and our robust image color extraction tools, are completely free to use. There are no accounts required, no hidden fees, and no paywalls interrupting your workflow.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Developer Focus vs General Design</h2>

              <h3 className="text-2xl font-bold text-text-primary">Developer Exports</h3>
              <p>
                PaletteFlow shines when it comes to developer handoff. We prioritize instant exports to Tailwind CSS v4 configurations, native CSS Variables, and SCSS maps. Coolors provides exports, but PaletteFlow&apos;s output is formatted exactly how modern frontend developers need it to drop into a codebase, saving you from writing tedious mapping scripts or manually formatting JSON objects.
              </p>
              <p>
                Furthermore, our integrated Tints & Shades generator automatically builds out the full 50-950 scale required by frameworks like Tailwind, ensuring you have the necessary variants for hover states, active states, and dark mode borders.
              </p>

              <h3 className="text-2xl font-bold text-text-primary">Real-time WCAG Checking</h3>
              <p>
                Accessibility is not an afterthought for us; it is a core feature. While you build your palette, PaletteFlow runs continuous WCAG contrast checks in the background. It instantly calculates the contrast ratio between your chosen foreground and background colors, ensuring your designs are legally compliant and usable by everyone before you even click export.
              </p>
              <p>
                With Coolors, checking contrast often requires switching views or relying on basic visual checks. PaletteFlow integrates this data directly into the generation pipeline, flagging AA and AAA compliance failures immediately so you don&apos;t ship inaccessible code.
              </p>
            </section>

          </article>

          <div className="mt-20 p-8 md:p-12 bg-surface border border-border rounded-3xl text-center space-y-8">
             <h3 className="text-4xl font-display font-bold text-text-primary">Experience the Difference</h3>
             <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Try the free, developer-first alternative to Coolors today.
             </p>
             <Link
                href="/"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Launch PaletteFlow →</span>
             </Link>
          </div>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
