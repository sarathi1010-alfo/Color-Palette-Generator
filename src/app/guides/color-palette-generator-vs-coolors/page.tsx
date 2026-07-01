import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema, buildFaqSchema } from "@/lib/seo/buildSchema";
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

const faqs = [
  {
    question: "Is PaletteFlow a good free alternative to Coolors?",
    answer: "Yes, PaletteFlow is a 100% free alternative to Coolors that offers pro-level features like Tailwind CSS exports and real-time WCAG contrast checking without any paywalls."
  },
  {
    question: "What are the main differences between PaletteFlow and Coolors?",
    answer: "PaletteFlow focuses on developer workflows with instant code exports and accessibility audits, while Coolors is more geared toward general design inspiration with a freemium model."
  }
];

export default function CompareGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <JsonLd schema={buildFaqSchema(faqs)} />
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
            <div className="bg-surface border border-primary/20 p-6 rounded-2xl">
               <p className="m-0 text-text-primary">
                 <strong>Quick Verdict:</strong> While Coolors is a popular general-purpose tool, PaletteFlow is the superior choice for developers needing instant code exports and free accessibility tools.
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Head-to-Head Comparison</h2>
              <div className="overflow-x-auto not-prose">
                    <table className="w-full text-left border-collapse border border-border rounded-2xl overflow-hidden">
                        <thead className="bg-surface">
                            <tr className="text-text-primary border-b border-border">
                                <th className="p-4">Feature</th>
                                <th className="p-4">Coolors</th>
                                <th className="p-4">PaletteFlow</th>
                                <th className="p-4 text-center">Winner</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr className="border-b border-border hover:bg-surface/50 transition-colors">
                                <td className="p-4 font-bold text-text-primary">Pricing</td>
                                <td className="p-4">Freemium (Paywalls)</td>
                                <td className="p-4">100% Free</td>
                                <td className="p-4 text-center text-primary font-bold">PaletteFlow</td>
                            </tr>
                            <tr className="border-b border-border hover:bg-surface/50 transition-colors">
                                <td className="p-4 font-bold text-text-primary">Tailwind Export</td>
                                <td className="p-4">Limited / Paid</td>
                                <td className="p-4">Native / Free</td>
                                <td className="p-4 text-center text-primary font-bold">PaletteFlow</td>
                            </tr>
                            <tr className="border-b border-border hover:bg-surface/50 transition-colors">
                                <td className="p-4 font-bold text-text-primary">WCAG Checking</td>
                                <td className="p-4">Separate View</td>
                                <td className="p-4">Real-time / Integrated</td>
                                <td className="p-4 text-center text-primary font-bold">PaletteFlow</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Pricing and Accessibility</h2>
              <p>
                Coolors operates on a freemium model. It offers a free tier, but many advanced features are locked behind a Pro subscription. If you want to save unlimited palettes, access specific export formats, or utilize advanced contrast checking, you have to hit a paywall.
              </p>
              <p>
                PaletteFlow is built on the philosophy that essential design tools should be accessible to everyone. All features, including our comprehensive <Link href="/palettes" className="text-primary hover:underline">palette library</Link> and robust image color extraction tools, are completely free to use.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-text-primary">Developer Focus vs General Design</h2>
              <h3 className="text-2xl font-bold text-text-primary">Developer Exports</h3>
              <p>
                PaletteFlow shines when it comes to developer handoff. We prioritize instant exports to Tailwind CSS v4 configurations, native CSS Variables, and SCSS maps. Coolors provides exports, but PaletteFlow&apos;s output is formatted exactly how modern frontend developers need it.
              </p>
            </section>

            <section className="space-y-8 pt-12 border-t border-border">
                <h2 className="text-3xl font-display font-bold text-text-primary">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="space-y-2">
                            <h3 className="text-xl font-bold text-text-primary">{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
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
