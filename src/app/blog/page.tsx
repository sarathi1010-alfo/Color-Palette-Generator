import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "Design Blog & Color Guides",
  description: "Master color theory, accessibility, and design workflows with our comprehensive guides and articles.",
  slug: "/blog",
}));

const categories = [
  {
    name: "Guides",
    description: "Deep dives into color theory and design principles.",
    href: "/guides",
    count: 8
  },
  {
    name: "Learn",
    description: "Quick answers to fundamental design terminology.",
    href: "/learn",
    count: 6
  }
];

export default function BlogLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-5xl">
          <div className="space-y-6 mb-16 border-b border-border pb-12">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Design <span className="text-primary italic">Blog</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              Everything you need to master colors, from basic theory to advanced developer workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group p-8 bg-surface border border-border rounded-3xl hover:border-primary/50 transition-colors space-y-4"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>
                  <ArrowRight className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {category.description}
                </p>
                <div className="pt-4 text-sm font-bold text-primary tracking-widest uppercase">
                  Explore {category.count} Articles
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-32 space-y-12">
             <h2 className="text-4xl font-display font-bold">Featured Content</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/guides/ultimate-guide-color-palettes-2026" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">The Ultimate Guide to Color Palettes in 2026</h3>
                </Link>
                <Link href="/guides/wcag-contrast-checker-color-accessibility" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Complete Guide to WCAG Color Accessibility</h3>
                </Link>
                <Link href="/guides/color-psychology-branding" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Color Psychology in Brand Design</h3>
                </Link>
             </div>
          </section>
        </PageWrapper>
      </main>

      <Footer />
    </div>
  );
}
