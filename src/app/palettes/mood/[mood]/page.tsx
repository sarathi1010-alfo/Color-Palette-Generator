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

export async function generateMetadata({ params }: { params: Promise<{ mood: string }> }) {
  const { mood } = await params;
  const moodName = mood.charAt(0).toUpperCase() + mood.slice(1);
  return resolveMetadata(buildCategoryMeta({
    name: moodName,
    slug: mood,
    description: `Find the perfect ${moodName.toLowerCase()} color scheme for your next project. These palettes are specifically curated to evoke a ${moodName.toLowerCase()} emotion and feel.`,
    type: 'mood'
  }));
}

export async function generateStaticParams() {
  const moods = Array.from(new Set(palettesData.map(p => p.mood)));
  return moods.map((mood) => ({
    mood: sanitizeSlug(mood),
  }));
}

export default async function MoodPage({ params }: { params: Promise<{ mood: string }> }) {
  const { mood } = await params;
  const filteredPalettes = palettesData.filter(
    (p) => sanitizeSlug(p.mood) === mood
  );

  if (filteredPalettes.length === 0) {
    notFound();
  }

  const moodName = mood.charAt(0).toUpperCase() + mood.slice(1);

  const faqData = [
    {
      question: `What makes a ${moodName.toLowerCase()} color palette?`,
      answer: `A ${moodName.toLowerCase()} color palette consists of specific color combinations designed to evoke the emotion and psychological response associated with ${moodName.toLowerCase()}.`
    },
    {
      question: `How can I use these ${moodName.toLowerCase()} colors?`,
      answer: `You can click any palette to export it directly to CSS, Tailwind, or SCSS, and immediately use these ${moodName.toLowerCase()} colors in your website or application.`
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <JsonLd schema={buildFaqSchema(faqData)} />
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">{moodName} Color Palettes</h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Find the perfect {moodName.toLowerCase()} color scheme for your next project.
            These palettes are specifically curated to evoke a {moodName.toLowerCase()} emotion and feel.
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
