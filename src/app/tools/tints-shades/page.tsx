import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";
import TintsShadesClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildToolMeta({
  title: "Tints and Shades Generator",
  description: "Generate perfectly weighted tints and shades for any base color. Perfect for building design systems and UI variants.",
  slug: "/tools/tints-shades",
}));

export default function TintsShadesPage() {
  return <TintsShadesClientPage />;
}
