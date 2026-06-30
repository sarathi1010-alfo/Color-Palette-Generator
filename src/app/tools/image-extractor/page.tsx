import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import ImageExtractorClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildToolMeta({
  title: "Image Color Extractor",
  description: "Extract beautiful color palettes directly from any image. Upload a photo and instantly generate a harmonious color scheme.",
  slug: "/tools/image-extractor",
}));

const faqData = [
  {
    question: "How does the image color extractor work?",
    answer: "It analyzes the pixels of your uploaded image and groups them into dominant colors to form a cohesive palette."
  },
  {
    question: "What types of images work best?",
    answer: "Images with clear, distinct colors usually produce the best palettes, but you can use any photo to pull its core color themes."
  }
];

export default function ImageExtractorPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema(faqData)} />
      <ImageExtractorClientPage faqData={faqData} />
    </>
  );
}
