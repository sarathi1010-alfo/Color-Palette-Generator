import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import LibraryClientPage from "./ClientPage";
import Link from "next/link";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "Color Palettes Library",
  description: "Browse thousands of curated, ready-to-use color palettes. Search by category, mood, or color to find the perfect scheme for your project.",
  slug: "/palettes",
}));

const faqs = [
  {
    question: "How do I find a specific color palette?",
    answer: "You can use the search bar to find palettes by name or color tag, or use the filter buttons to narrow down the selection by category, such as Minimalist, Neon, or Vintage."
  },
  {
    question: "How can I save my favorite palettes?",
    answer: "As you browse the library, click the heart icon on any palette card to save it to your local favorites. Your saved palettes will appear at the top of the library page."
  },
  {
    question: "Can I use these palettes in the generator?",
    answer: "Yes, every palette card has an 'Open' button that instantly loads the exact colors into our Generator, allowing you to fine-tune them or export the code directly."
  }
];

export default function LibraryPage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema(faqs)} />
      <div className="bg-primary text-background py-4 px-6 text-center font-bold">
        New: Learn <Link href="/blog/choose-ui-color-palette" className="underline hover:text-background/80 transition-colors font-bold">how to choose a color palette for UI design</Link> using our 2026 framework.
      </div>
      <LibraryClientPage faqs={faqs} />
    </>
  );
}
