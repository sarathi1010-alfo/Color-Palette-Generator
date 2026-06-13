import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";
import ImageExtractorClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildToolMeta({
  title: "Image Color Palette Extractor",
  description: "Upload an image and instantly extract a balanced color palette. All processing happens client-side for maximum privacy and speed.",
  slug: "/tools/image-extractor",
}));

export default function ImageExtractorPage() {
  return <ImageExtractorClientPage />;
}
