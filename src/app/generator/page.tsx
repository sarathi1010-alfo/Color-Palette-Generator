import { Suspense } from "react";
import { PaletteGenerator } from "@/components/generator/PaletteGenerator";
import { constructMetadata, generateSchema } from "@/lib/seo";
import { RelatedTools } from "@/components/widgets/RelatedTools";

export const metadata = constructMetadata({
  title: "AI Color Palette Generator | Free Design Tool | ALFO",
  description: "Instantly generate perfect color palettes with our intelligent algorithmic design tool. Copy hex codes, CSS, and Tailwind config.",
  url: "https://alfo-palette-generator.vercel.app/generator",
  keywords: ["color palette generator", "random color palette", "color scheme", "accessible colors"],
});

export default function GeneratorPage() {
  const schema = generateSchema("ALFO Palette Generator", metadata.description as string, "https://alfo-palette-generator.vercel.app/generator");

  return (
    <main className="h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="flex-1 relative">
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <PaletteGenerator />
        </Suspense>
      </div>
      <div className="hidden lg:block bg-background">
         <RelatedTools currentToolHref="/generator" tags={["color", "palette", "design"]} />
      </div>
    </main>
  );
}
