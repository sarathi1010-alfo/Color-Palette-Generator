import { Footer } from "@/components/layout/Footer";
import palettesData from "@/data/palettes.json";
import { Navbar } from "@/components/layout/Navbar";
import { PaletteGrid } from "@/components/library/PaletteGrid";
import { notFound } from "next/navigation";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildCategoryMeta } from "@/lib/seo/metaFactories";

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
    cat: cat,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const filteredPalettes = palettesData.filter(
    (p) => p.category.toLowerCase() === cat.toLowerCase()
  );

  if (filteredPalettes.length === 0) {
    notFound();
  }

  const categoryName = cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
      </main>
      <Footer />
    </div>
  );
}
