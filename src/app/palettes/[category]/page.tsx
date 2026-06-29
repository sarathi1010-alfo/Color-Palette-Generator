import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import { Metadata } from 'next';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildCategoryMeta } from '@/lib/seo/metaFactories';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { category: 'analogous-blue' },
    { category: 'triadic-red' },
    { category: 'complementary-green' },
    { category: 'monochromatic-purple' },
    { category: 'neutral-warm' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;

  const validCategories = ['analogous-blue', 'triadic-red', 'complementary-green', 'monochromatic-purple', 'neutral-warm'];
  if (!validCategories.includes(category)) return {};

  const title = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return resolveMetadata(buildCategoryMeta({
    name: `${title} Color Palettes`,
    slug: category,
    description: `Explore our collection of ${title.toLowerCase()} color palettes for your next UI design project.`,
    type: 'category'
  }));
}

const faqs = [
  {
    question: "What is a color palette generator?",
    answer: "A color palette generator is a tool that helps designers and developers create harmonious, balanced, and accessible color schemes for their projects instantly using color theory algorithms."
  },
  {
    question: "How do I choose the best color palette for my website?",
    answer: "Start with your brand's core emotion or industry. Use our Personality Generator to find semantic associations, then ensure your primary and background colors pass WCAG accessibility contrast checks."
  },
  {
    question: "Is this color generator free to use?",
    answer: "Yes, PaletteFlow is completely free to use. You can generate unlimited palettes, extract colors from images, and export directly to CSS, Tailwind, or Figma without signing up."
  }
];

export default async function VariationPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const validCategories = ['analogous-blue', 'triadic-red', 'complementary-green', 'monochromatic-purple', 'neutral-warm'];

  if (!validCategories.includes(category)) {
    notFound();
  }

  const title = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-12">
        <JsonLd schema={buildFaqSchema(faqs)} />

        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">{title} Palettes</h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Discover beautiful {title.toLowerCase()} color combinations based on color theory principles.
            Perfect for maintaining harmony and balance in your UI designs.
          </p>
        </div>

        {/* AEO / FAQ Section */}
        <section className="border-t border-border pt-16">
          <div className="mb-10 text-center space-y-4">
            <h2 className="text-4xl font-display font-bold text-text-primary">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary">Learn more about color theory and palette generation.</p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-text-primary mb-3">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
