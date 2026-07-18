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
  title: "What is a Monochromatic Palette? Design Term Explained",
  description: "Learn what a monochromatic palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-a-monochromatic-palette",
}));

const metaDataObj: SeoMeta = {
  title: "What is a Monochromatic Palette? Design Term Explained",
  description: "Learn what a monochromatic palette means in UI/UX design, how it works, and why it is important for your creative workflow.",
  slug: "/learn/what-is-a-monochromatic-palette",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: new Date().toISOString()
};

export default function MonochromaticMicroPage() {
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
              What is a Monochromatic Palette?
            </h1>
            <div className="bg-surface border border-primary/20 p-8 rounded-2xl">
               <p className="text-2xl text-text-primary font-display leading-relaxed m-0 italic">
                  &quot;A monochromatic color palette is built using only a single base hue, combined with its various shades, tints, and tones. By adjusting lightness and saturation, it creates a cohesive, highly harmonious visual experience without introducing clashing colors.&quot;
               </p>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none space-y-12 text-text-secondary">
            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">How Does a Monochromatic Palette Work?</h2>
                <p>It works by taking one primary color on the color wheel (the hue) and modifying it to create variations. You add white to create tints (lighter versions), add black to create shades (darker versions), or add gray to create tones (softer versions). This ensures all colors in the palette naturally relate to each other.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Real-World Example in SaaS Design</h2>
                <p>Many modern SaaS dashboards utilize monochromatic blue palettes. They might use a dark navy blue for the sidebar background, a medium blue for active states and primary buttons, and very light blue tints for row hover states and subtle card backgrounds. This creates a professional, clean, and distraction-free interface.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Why is a Monochromatic Palette Important?</h2>
                <p>It is important because it is arguably the safest and most foolproof way to create a visually appealing design. It practically guarantees harmony, reduces cognitive load for the user, and naturally establishes a strong brand identity tied to that single hue.</p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-text-primary">Monochromatic vs Analogous</h2>
                <div className="not-prose overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-surface border border-border rounded-2xl">
                        <thead>
                            <tr className="border-b border-border text-text-primary">
                                <th className="p-4">Comparison</th>
                                <th className="p-4">Monochromatic</th>
                                <th className="p-4">Analogous</th>
                            </tr>
                        </thead>
                        <tbody className="text-text-secondary">
                            <tr>
                                <td className="p-4 font-bold">Key Difference</td>
                                <td className="p-4">Uses only ONE hue, adjusted by lightness/saturation.</td>
                                <td className="p-4">Uses 2-3 distinct hues that sit next to each other on the wheel.</td>
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
                        <span>Single Base Hue</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>Variation through Lightness and Saturation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>High Cohesion, Low Contrast</span>
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