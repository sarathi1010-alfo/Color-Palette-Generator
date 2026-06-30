import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import ContrastCheckerClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildToolMeta({
  title: "Color Contrast Checker (WCAG)",
  description: "Check the contrast ratio of different color combinations to ensure your UI is accessible and meets WCAG AA and AAA requirements.",
  slug: "/tools/contrast-checker",
}));

const faqData = [
  {
    question: "What is a good contrast ratio?",
    answer: "A good contrast ratio for standard text is at least 4.5:1 to meet WCAG AA requirements. For large text, a ratio of 3:1 is sufficient."
  },
  {
    question: "Why is color contrast important?",
    answer: "Color contrast is crucial for accessibility, ensuring that text is readable for users with visual impairments or color blindness."
  }
];

export default function ContrastCheckerPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema(faqData)} />
      <ContrastCheckerClientPage faqData={faqData} />
    </>
  );
}
