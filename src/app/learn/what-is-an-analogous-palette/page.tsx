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
  title: "What is an Analogous Palette? Design Term Explained",
  description: "Learn what an analogous palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-an-analogous-palette",
}));

const metaDataObj: SeoMeta = {
  title: "What is an Analogous Palette? Design Term Explained",
  description: "Learn what an analogous palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-an-analogous-palette",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function AnalogousMicroPage() {
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
              What is an Analogous Palette?
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-2xl">
               <p className="text-2xl text-text-primary font-display leading-relaxed m-0 italic">
                  &quot;An analogous color palette uses colors that are directly next to each other on the color wheel. Because these colors share a common base hue, they create a serene, unified, and naturally harmonious design with very little visual tension.&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">How Does an Analogous Palette Work?</h2>
                <p>An analogous scheme typically consists of three colors: a primary dominant color, a supporting color, and a third color that serves as a blend or subtle accent. For example, a palette using Blue, Blue-Green, and Green. They work well together because they are inherently related, often found together in nature (like the colors of autumn leaves or an ocean sunset).</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Real-World Example in Wellness Apps</h2>
                <p>Applications in the health, meditation, and wellness space frequently rely on analogous palettes. A common choice is an analogous scheme of soft blues, teals, and light greens. This combination feels incredibly soothing and organic, helping to lower the user&apos;s cognitive load and evoke a sense of calm and trust.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Why is an Analogous Palette Important?</h2>
                <p>It is important when the goal of the interface is comfort rather than excitement. While a complementary palette screams for attention, an analogous palette whispers. It is the perfect choice for backgrounds, large surface areas, and interfaces where the user needs to spend a long time reading or working without eye strain.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Analogous vs Monochromatic</h2>
                <div className="not-prose overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-surface border border-border rounded-2xl">
                        <thead>
                            <tr className="border-b border-border text-text-primary">
                                <th className="p-4">Comparison</th>
                                <th className="p-4">Analogous</th>
                                <th className="p-4">Monochromatic</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr>
                                <td className="p-4 font-bold">Key Difference</td>
                                <td className="p-4">Uses 3 distinct, neighboring hues.</td>
                                <td className="p-4">Uses only 1 single hue, varied by shade/tint.</td>
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
                        <span>Adjacent Neighbors on the Color Wheel</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>Low Tension and High Harmony</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>Requires a separate contrasting color for CTAs if needed</span>
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