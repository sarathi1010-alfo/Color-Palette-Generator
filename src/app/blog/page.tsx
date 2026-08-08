import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "PaletteFlow Blog – Expert Color Guides, Palettes & Design Insights",
  description: "Master color theory, accessibility, and design workflows with our comprehensive guides and articles.",
  slug: "/blog",
}));

const categories = [
  {
    name: "Color Theory",
    description: "Deep dives into color harmonies, psychology, and theoretical foundations.",
    href: "/guides/ultimate-guide-color-theory-2026",
    count: 1
  },
  {
    name: "Industry Palettes",
    description: "Best practices and color schemes tailored for specific industries and audiences.",
    href: "/blog",
    count: 0
  },
  {
    name: "Mood Collections",
    description: "Browse mood-specific color collections, from vibrant and energetic to calm and nostalgic.",
    href: "/palettes",
    count: 1
  },
  {
    name: "Accessibility",
    description: "Ensure your designs meet WCAG standards with high-contrast color choices.",
    href: "/guides/wcag-contrast-checker-color-accessibility",
    count: 1
  },
  {
    name: "Export Guides",
    description: "Learn how to export and use color palettes in CSS, Tailwind, Figma, and more.",
    href: "/blog",
    count: 0
  },
  {
    name: "Data & Trends",
    description: "Stay ahead with the latest 2026 color design trends and statistical insights.",
    href: "/blog",
    count: 0
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
              PaletteFlow Blog – Expert Color Guides, Palettes & Design Insights
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              Welcome to the PaletteFlow Blog, your ultimate destination for mastering color in digital design. We believe that color is the foundation of exceptional user experiences. Our mission is to provide expert-level guides, data-driven insights, and practical resources to elevate your creative workflow. Whether you are a seasoned UI/UX designer building robust design systems, or a solo developer choosing the perfect primary hex code, this hub is tailored for you. Explore our comprehensive deep-dives into color theory, learn how to build accessible interfaces that meet strict WCAG standards, and discover industry-specific palettes that convert users. We also cover practical implementation with export guides for Tailwind CSS and Figma, and keep you ahead of the curve with the latest 2026 design trends. Check out our <Link href="/generator" className="text-primary hover:underline font-bold">Palette Generator</Link>, browse the <Link href="/palettes" className="text-primary hover:underline font-bold">Palettes Library</Link>, or return to the <Link href="/" className="text-primary hover:underline font-bold">Home Page</Link> to start creating immediately.
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
                  Explore {category.name}
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-32 space-y-12">
             <h2 className="text-4xl font-display font-bold">Featured Content: Week 1 Guides</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/guides/ultimate-guide-color-theory-2026" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">The Ultimate Guide to Color Theory in 2026</h3>
                </Link>
                <Link href="/learn/what-is-color-theory" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">What is Color Theory?</h3>
                </Link>
                <Link href="/learn/what-is-a-monochromatic-palette" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">What is a Monochromatic Palette?</h3>
                </Link>
                <Link href="/learn/what-is-a-complementary-palette" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">What is a Complementary Palette?</h3>
                </Link>
                <Link href="/learn/what-is-a-triadic-palette" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">What is a Triadic Palette?</h3>
                </Link>
                <Link href="/learn/what-is-an-analogous-palette" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">What is an Analogous Palette?</h3>
                </Link>
                <Link href="/guides/color-palette-generator-vs-coolors" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">PaletteFlow vs Coolors</h3>
                </Link>
                <Link href="/guides/paletteflow-vs-adobe-color" className="group space-y-4">
                    <div className="aspect-video bg-surface rounded-2xl border border-border group-hover:border-primary transition-colors" />
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">PaletteFlow vs Adobe Color</h3>
                </Link>
             </div>
          </section>
        </PageWrapper>
      </main>

      <Footer />
    </div>
  );
}
