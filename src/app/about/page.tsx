import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import AboutClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "About | Color Palette Generator",
  description: "Learn about ALFO, the design tool for the modern web built for speed and algorithmic color harmony.",
  slug: "/about",
  updatedAt: "2026-08-17T00:00:00Z",
}));

const faqs = [
  {
    question: "What is PaletteFlow?",
    answer: "PaletteFlow is a professional-grade color palette generator designed for speed and developer efficiency, part of the ALFO design tool ecosystem."
  },
  {
    question: "Is PaletteFlow part of a larger ecosystem?",
    answer: "Yes, PaletteFlow integrates with other ALFO tools like BrandForge and FontFusion to provide a complete design-to-code workflow."
  }
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema(faqs)} />
      <AboutClientPage />
    </>
  );
}
