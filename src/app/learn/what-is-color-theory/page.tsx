import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HelpCircle } from "lucide-react";
import { SeoMeta } from "@/types/seo";
import Link from "next/link";

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
  publishedAt: "2026-07-28T11:10:46Z",
  updatedAt: "2026-08-17T00:00:00Z"
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
                  &quot;Color theory is the practical combination of art and science that determines what colors look good together. It explains how humans perceive color, the visual effects of how colors mix, match or contrast with each other, and the messages colors communicate in design.&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">How Does Color Theory Work?</h2>
                <p>Color theory works by organizing colors on a color wheel, which is divided into primary colors (red, blue, yellow), secondary colors (created by mixing primary colors), and tertiary colors. By understanding the relationships between these colors, designers can create harmonious color schemes such as complementary (opposites on the wheel), analogous (next to each other), or triadic (evenly spaced).</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Real-World Example in UI Design</h2>
                <p>In digital design, an e-commerce website might use color theory to guide user behavior. For instance, they might choose a calm, trustworthy blue for their primary branding and background elements, but use a high-contrast complementary color like bright orange for their &quot;Add to Cart&quot; buttons to draw the user&apos;s eye and encourage conversion.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Why is Color Theory Important?</h2>
                <p>Color theory is crucial because it provides a logical structure for color usage, ensuring that designs are not just visually pleasing, but also functional. It helps in creating visual hierarchy, conveying brand personality, and importantly, ensuring accessibility by maintaining proper contrast ratios between text and background elements.</p>
                <p>
                   Beyond just aesthetic harmony, understanding the underlying principles of color combinations is the most important step before diving into advanced interface development. By mastering these fundamentals, you can build accessible digital products that convert. If you are ready to put this theory into practice and learn how to construct a professional, WCAG-compliant design system, you should study our complete masterclass on <Link href="/blog/choose-ui-color-palette" className="text-primary hover:underline font-bold">how to choose a color palette for UI design</Link>. This guide will teach you the 60-30-10 rule and exactly how to scale your brand colors for any modern web application.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Color Theory vs Color Psychology</h2>
                <div className="not-prose overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-surface border border-border rounded-2xl">
                        <thead>
                            <tr className="border-b border-border text-text-primary">
                                <th className="p-4">Comparison</th>
                                <th className="p-4">Color Theory</th>
                                <th className="p-4">Color Psychology</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr>
                                <td className="p-4 font-bold">Key Difference</td>
                                <td className="p-4">The technical rules of how colors mix, contrast, and harmonize visually.</td>
                                <td className="p-4">The emotional and psychological impact that colors have on human behavior.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="bg-surface p-8 rounded-3xl border border-border">
                <h3 className="text-xl font-bold text-text-primary mb-4 m-0">Core Principles</h3>
                <ul className="list-none p-0 m-0 space-y-2">
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>The Color Wheel</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>Color Harmonies (Schemes)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>Color Properties (Hue, Saturation, Value)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>Color Context and Contrast</span>
                    </li>
                </ul>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}