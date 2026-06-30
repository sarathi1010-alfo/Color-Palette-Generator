import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import GradientGeneratorClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildToolMeta({
  title: "CSS Gradient Generator",
  description: "Create beautiful linear and radial CSS gradients. Export ready-to-use CSS code for your next web project.",
  slug: "/tools/gradient-generator",
}));

const faqData = [
  {
    question: "What is a CSS gradient?",
    answer: "A CSS gradient allows you to display smooth transitions between two or more specified colors, which can be linear or radial."
  },
  {
    question: "How do I use the gradient generator?",
    answer: "Add, remove, or drag colors to create your gradient, then copy the generated CSS code to use in your project."
  }
];

export default function GradientGeneratorPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema(faqData)} />
      <GradientGeneratorClientPage faqData={faqData} />
    </>
  );
}
