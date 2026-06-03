import palettesData from "@/data/palettes.json";
import { Navbar } from "@/components/layout/Navbar";
import { PaletteGrid } from "@/components/library/PaletteGrid";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const tags = Array.from(new Set(palettesData.flatMap(p => p.tags || [])));
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const filteredPalettes = palettesData.filter(
    (p) => p.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );

  if (filteredPalettes.length === 0) {
    notFound();
  }

  const tagName = tag.charAt(0).toUpperCase() + tag.slice(1);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">#{tagName} Color Palettes</h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Curated collection of color palettes tagged with #{tag.toLowerCase()}.
            Explore harmonious color schemes for your next creative project.
          </p>
        </div>
        <PaletteGrid palettes={filteredPalettes} />
      </main>
    </div>
  );
}
