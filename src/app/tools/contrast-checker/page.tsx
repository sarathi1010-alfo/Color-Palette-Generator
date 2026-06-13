import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";
import ContrastCheckerClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildToolMeta({
  title: "Color Contrast Checker (WCAG)",
  description: "Check the contrast ratio of different color combinations to ensure your UI is accessible and meets WCAG AA and AAA requirements.",
  slug: "/tools/contrast-checker",
}));

export default function ContrastCheckerPage() {
  return <ContrastCheckerClientPage />;
}
