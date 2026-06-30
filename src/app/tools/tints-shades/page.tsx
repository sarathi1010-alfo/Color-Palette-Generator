import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import TintsShadesClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildToolMeta({
  title: "Tints & Shades Generator",
  description: "Generate perfectly stepped tints and shades for any color. Perfect for building Tailwind CSS palettes and design systems.",
  slug: "/tools/tints-shades",
}));

const faqData = [
  {
    question: "What is the difference between a tint and a shade?",
    answer: "A tint is created by adding white to a base color, making it lighter. A shade is created by adding black to a base color, making it darker."
  },
  {
    question: "Why do I need a tints and shades generator?",
    answer: "It helps you build a consistent and balanced scale of colors, which is essential for UI design, hover states, and frameworks like Tailwind CSS."
  }
];

export default function TintsShadesPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema(faqData)} />
      <TintsShadesClientPage faqData={faqData} />
    </>
  );
}
