import { Footer } from "@/components/layout/Footer";
import palettesData from "@/data/palettes.json";
import { Navbar } from "@/components/layout/Navbar";
import { PaletteGrid } from "@/components/library/PaletteGrid";
import { notFound } from "next/navigation";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildCategoryMeta } from "@/lib/seo/metaFactories";

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

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
      </main>
      <Footer />
    </div>
  );
}
