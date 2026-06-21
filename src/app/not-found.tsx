import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";

export const metadata = resolveMetadata(buildLandingMeta({
    title: "Page Not Found",
    description: "The page you are looking for does not exist. Explore our color palettes or use the generator.",
    slug: "/404"
}));

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
        <h1 className="text-8xl font-display font-bold text-primary">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-text-secondary max-w-md">
          We could not find the page you were looking for. It might have been removed, renamed, or did not exist in the first place.
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-text-primary text-background font-bold hover:scale-105 transition-transform"
          >
            Go Home
          </Link>
          <Link
            href="/palettes"
            className="px-6 py-3 rounded-full border border-border text-text-primary font-bold hover:bg-surface transition-colors"
          >
            Explore Palettes
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
