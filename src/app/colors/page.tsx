import { Footer } from "@/components/layout/Footer";
import colorNames from "@/data/color-names.json";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildCategoryMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";

export const metadata = resolveMetadata(buildCategoryMeta({
  name: "Color Dictionary",
  slug: "colors",
  description: "Explore our comprehensive dictionary of thousands of named colors. Find hex codes, RGB values, and perfect complementary shades for any color.",
  type: "category"
}));

const faqs = [
  {
    question: "What is a hex code?",
    answer: "A hex code is a six-digit hexadecimal number used in HTML, CSS, and SVG to represent colors. It consists of three pairs of characters representing the intensity of red, green, and blue (RGB)."
  },
  {
    question: "How do I find complementary colors?",
    answer: "Complementary colors are opposite each other on the color wheel. You can find them by searching for a color in our dictionary and viewing its harmonious pairings, or by using our Palette Generator to instantly create a complementary scheme."
  },
  {
    question: "What is the difference between RGB and HEX?",
    answer: "RGB (Red, Green, Blue) is a color model used for screens, specifying the intensity of each light channel from 0 to 255. HEX is simply a base-16 representation of those same RGB values, making it easier to write in code."
  }
];

export default function ColorsIndexPage() {
  // Group colors by first letter for easier navigation
  const groupedColors = colorNames.reduce((acc, color: any) => {
    const firstLetter = color.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(color);
    return acc;
  }, {} as Record<string, any[]>);

  const letters = Object.keys(groupedColors).sort();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Color Dictionary</h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Browse our exhaustive database of {colorNames.length} named colors.
            Click on any color to see detailed technical information, conversions, and harmonious pairings.
          </p>
        </div>

        {/* Alphabet Navigation */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-border">
            {letters.map((letter) => (
                <Link
                    key={letter}
                    href={`#letter-${letter}`}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-border font-bold hover:bg-text-primary hover:text-background transition-colors"
                >
                    {letter}
                </Link>
            ))}
        </div>

        {/* Color Listings */}
        <div className="space-y-16">
            {letters.map((letter) => (
                <section key={letter} id={`letter-${letter}`} className="space-y-6 scroll-mt-24">
                    <h2 className="text-3xl font-display font-bold border-b border-border/50 pb-2">{letter}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {groupedColors[letter].map((color: any) => {
                            const slug = color.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                            return (
                                <Link
                                    key={color.name}
                                    href={`/colors/${slug}`}
                                    prefetch={false}
                                    className="group flex flex-col gap-2 p-2 rounded-xl border border-transparent hover:border-border hover:bg-surface transition-all"
                                >
                                    <div
                                        className="h-16 w-full rounded-lg border border-border/50"
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    <div>
                                        <h3 className="font-bold text-xs text-text-primary group-hover:text-primary transition-colors truncate">
                                            {color.name}
                                        </h3>
                                        <p className="text-[10px] font-mono text-text-secondary uppercase">{color.hex}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            ))}
        </div>

        {/* AEO / FAQ Section */}
        <section className="mt-24 pt-16 border-t border-border space-y-8">
          <h2 className="text-3xl font-display font-bold text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-surface rounded-2xl border border-border">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
