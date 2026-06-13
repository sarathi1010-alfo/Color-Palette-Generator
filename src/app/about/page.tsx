import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import AboutClientPage from "./ClientPage";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "About | Color Palette Generator",
  description: "Learn about ALFO, the design tool for the modern web built for speed and algorithmic color harmony.",
  slug: "/about",
}));

export default function AboutPage() {
  return <AboutClientPage />;
}
