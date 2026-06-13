import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";
import GradientGeneratorClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildToolMeta({
  title: "CSS Gradient Generator",
  description: "Create beautiful CSS gradients, customize the angle, and copy the code directly into your project.",
  slug: "/tools/gradient-generator",
}));

export default function GradientGeneratorPage() {
  return <GradientGeneratorClientPage />;
}
