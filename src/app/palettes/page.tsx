import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import LibraryClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "Color Palettes Library",
  description: "Browse thousands of curated, ready-to-use color palettes. Search by category, mood, or color to find the perfect scheme for your project.",
  slug: "/palettes",
}));

export default function LibraryPage() {
  return <LibraryClientPage />;
}
