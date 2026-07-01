import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";
import seoPages from "@/data/seo-pages.json";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "Color Theory & Design Resources Hub",
  description: "Browse our comprehensive collection of color theory, palette generators, industry-specific color schemes, and design resources.",
  slug: "/seo",
}));

export default function SeoHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-7xl mx-auto px-6">
          <div className="space-y-6 mb-16 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Color Theory &amp; Design Resources
            </h1>
            <p className="text-xl text-text-secondary">
              Explore thousands of guides, palette generators, and deep-dives into color psychology across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoPages.map((page) => (
              <Link
                key={page.id}
                href={`/seo/${page.slug}`}
                prefetch={false}
                className="bg-surface border border-border rounded-xl p-6 hover:border-primary/50 hover:bg-surface-hover transition-colors flex flex-col"
              >
                <h2 className="text-lg font-bold text-text-primary leading-tight mb-2 group-hover:text-primary transition-colors">
                  {page.title}
                </h2>
                <span className="text-text-secondary text-sm mt-auto inline-flex items-center">
                  Read Guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </PageWrapper>
      </main>

      <Footer />
    </div>
  );
}
