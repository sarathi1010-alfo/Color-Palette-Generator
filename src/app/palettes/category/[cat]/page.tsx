import { Footer } from "@/components/layout/Footer";
import palettesData from "@/data/palettes.json";
import { Navbar } from "@/components/layout/Navbar";
import { PaletteGrid } from "@/components/library/PaletteGrid";
import { notFound } from "next/navigation";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildCategoryMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import { sanitizeSlug } from '@/lib/url/utils';

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const categoryName = cat.charAt(0).toUpperCase() + cat.slice(1);
  return resolveMetadata(buildCategoryMeta({
    name: categoryName,
    slug: cat,
    description: `Explore our curated collection of ${categoryName.toLowerCase()} inspired color palettes. Perfect for ${cat.toLowerCase()} projects, branding, and modern UI design.`,
    type: 'category'
  }));
}

export async function generateStaticParams() {
  const categories = Array.from(new Set(palettesData.map(p => p.category)));
  return categories.map((cat) => ({
    cat: sanitizeSlug(cat),
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const filteredPalettes = palettesData.filter(
    (p) => sanitizeSlug(p.category) === cat
  );

  if (filteredPalettes.length === 0) {
    notFound();
  }

  const categoryName = cat.charAt(0).toUpperCase() + cat.slice(1);

  const faqData = [
    {
      question: `Why choose a ${categoryName.toLowerCase()} specific color palette?`,
      answer: `Different industries and categories have established color norms based on consumer psychology. A ${categoryName.toLowerCase()} specific palette leverages these expectations to build immediate trust and recognition.`
    },
    {
      question: `Can I export these ${categoryName.toLowerCase()} palettes?`,
      answer: `Yes, every palette can be exported directly to CSS variables, Tailwind configurations, or SCSS formats for immediate use in your projects.`
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <JsonLd schema={buildFaqSchema(faqData)} />
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">{categoryName} Color Palettes</h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Explore our curated collection of {categoryName.toLowerCase()} inspired color palettes.
            Perfect for {cat.toLowerCase()} projects, branding, and modern UI design.
          </p>
        </div>
        <PaletteGrid palettes={filteredPalettes} />

        <div className="mt-20 text-left max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-text-primary mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-surface border border-border p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-text-primary mb-3">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
