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
  title: "What is a Complementary Palette? Design Term Explained",
  description: "Learn what a complementary palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-a-complementary-palette",
}));

const metaDataObj: SeoMeta = {
  title: "What is a Complementary Palette? Design Term Explained",
  description: "Learn what a complementary palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-a-complementary-palette",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function ComplementaryMicroPage() {
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
              What is a Complementary Palette?
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-2xl">
               <p className="text-2xl text-text-primary font-display leading-relaxed m-0 italic">
                  &quot;A complementary color palette uses two colors that are directly opposite each other on the color wheel. This pairing creates maximum visual contrast, making elements pop and immediately drawing the viewer&apos;s attention.&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">How Does a Complementary Palette Work?</h2>
                <p>It works by pairing a warm color with a cool color (e.g., Red and Green, Blue and Orange, Purple and Yellow). Because they sit at opposite poles of the color spectrum, they create a natural tension and vibrancy when placed next to each other. One color is typically used as the dominant background or brand color, while the other acts as a powerful accent.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Real-World Example in E-commerce</h2>
                <p>A classic example is an e-commerce site using a deep navy blue for its primary branding, headers, and footer, paired with a bright, vibrant orange for its &quot;Buy Now&quot; buttons. The orange completely stands out against the blue, significantly increasing conversion rates by making the call-to-action impossible to miss.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Why is a Complementary Palette Important?</h2>
                <p>It is important because it is the most effective tool in a designer&apos;s toolkit for establishing clear visual hierarchy. When you need a specific element to stand out—like a button, an error message, or a key piece of data—a complementary accent color ensures it cuts through the visual noise.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Complementary vs Analogous</h2>
                <div className="not-prose overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-surface border border-border rounded-2xl">
                        <thead>
                            <tr className="border-b border-border text-text-primary">
                                <th className="p-4">Comparison</th>
                                <th className="p-4">Complementary</th>
                                <th className="p-4">Analogous</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr>
                                <td className="p-4 font-bold">Key Difference</td>
                                <td className="p-4">Opposite sides of the wheel; creates high tension and contrast.</td>
                                <td className="p-4">Adjacent on the wheel; creates low tension and smooth harmony.</td>
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
                        <span>Maximum Contrast</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>Warm vs Cool Dynamics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>Best used with a Dominant/Accent ratio (e.g., 80/20)</span>
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