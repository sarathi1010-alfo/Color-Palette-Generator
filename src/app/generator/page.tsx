import { Suspense } from "react";
import { PaletteGenerator } from "@/components/generator/PaletteGenerator";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";

export const metadata = resolveMetadata(buildToolMeta({
  title: "Random Color Palette Generator",
  description: "Generate beautiful, cohesive color palettes instantly. Lock colors, fine-tune shades, and export directly to CSS, Tailwind, or Figma.",
  slug: "/generator",
}));

export default function GeneratorPage() {
  return (
    <main className="h-screen">
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <PaletteGenerator />
      </Suspense>
    </main>
  );
}
