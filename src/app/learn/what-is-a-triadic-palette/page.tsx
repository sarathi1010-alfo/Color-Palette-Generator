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
  title: "What is a Triadic Palette? Design Term Explained",
  description: "Learn what a triadic palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-a-triadic-palette",
}));

const metaDataObj: SeoMeta = {
  title: "What is a Triadic Palette? Design Term Explained",
  description: "Learn what a triadic palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-a-triadic-palette",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function TriadicMicroPage() {
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
              What is a Triadic Palette?
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-2xl">
               <p className="text-2xl text-text-primary font-display leading-relaxed m-0 italic">
                  &quot;A triadic color palette consists of three colors that are evenly spaced around the color wheel, forming a perfect triangle. This creates a vibrant, energetic, and highly dynamic visual scheme, even when using pale or desaturated versions of the hues.&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">How Does a Triadic Palette Work?</h2>
                <p>Because the three colors are spaced 120 degrees apart on the wheel (e.g., Red, Yellow, Blue; or Purple, Orange, Green), there is a strong contrast between all of them. To make a triadic scheme work in UI design without overwhelming the user, designers typically choose one color to dominate, using the second as a secondary structural color, and the third strictly as an accent.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Real-World Example in Kids&apos; Apps</h2>
                <p>Educational or entertainment apps for children frequently use triadic schemes (like vibrant Red, Blue, and Yellow) because the high energy and contrast capture attention. In more professional software, a desaturated triad (like a soft teal, a muted gold, and a pale coral) might be used for complex data visualization to clearly differentiate chart categories.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Why is a Triadic Palette Important?</h2>
                <p>It is important when you need a multi-colored approach that remains mathematically balanced. It allows for more variety and color coding than a monochromatic or complementary scheme while preventing the chaos of choosing colors randomly.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Triadic vs Complementary</h2>
                <div className="not-prose overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-surface border border-border rounded-2xl">
                        <thead>
                            <tr className="border-b border-border text-text-primary">
                                <th className="p-4">Comparison</th>
                                <th className="p-4">Triadic</th>
                                <th className="p-4">Complementary</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr>
                                <td className="p-4 font-bold">Key Difference</td>
                                <td className="p-4">Uses 3 colors forming a triangle; complex and vibrant.</td>
                                <td className="p-4">Uses 2 opposite colors; simple and high-contrast.</td>
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
                        <span>Equidistant Spacing (120 degrees)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>High Vibrancy and Energy</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>Requires careful balance (One dominant, two subordinate)</span>
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