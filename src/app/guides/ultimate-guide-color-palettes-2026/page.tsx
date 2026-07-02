import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema, buildFaqSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Layout } from "lucide-react";
import { SeoMeta } from "@/types/seo";
import Link from "next/link";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "The Ultimate 2026 Guide to Color Palettes",
  description: "Everything you need to know about color palettes in 2026. Master the foundations, strategies, and future trends with our comprehensive deep dive.",
  slug: "/guides/ultimate-guide-color-palettes-2026",
}));

const metaDataObj: SeoMeta = {
  title: "The Ultimate 2026 Guide to Color Palettes",
  description: "Everything you need to know about color palettes in 2026. Master the foundations, strategies, and future trends with our comprehensive deep dive.",
  slug: "/guides/ultimate-guide-color-palettes-2026",
  pageType: "article",
  author: { name: "PaletteFlow Editorial" },
  publishedAt: "2025-01-01T09:00:00Z",
  updatedAt: "2026-06-15T10:00:00Z"
};

const faqs = [
    { question: "What is the best color palette for a website?", answer: "The best palette depends on your brand identity and industry. Generally, a balanced scheme with one primary color, two neutrals, and one accent color works best for UI design." },
    { question: "How many colors should be in a palette?", answer: "Most professional designers recommend 3 to 5 colors for a cohesive brand identity, ensuring enough variety for background, text, and interactive elements." }
];

export default function UltimateGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-5xl">
          <header className="space-y-12 mb-20">
            <div className="space-y-6">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
                <Layout className="w-4 h-4" />
                <span>Pillar Content</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight">
                The Ultimate Guide to <span className="text-primary italic">Color Palettes</span>
                </h1>
            </div>

            <div className="p-10 bg-surface border border-primary/20 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <h2 className="text-sm font-bold uppercase tracking-tighter text-primary mb-4">Executive Summary</h2>
               <p className="text-2xl text-text-primary leading-relaxed m-0 relative z-10">
                 In 2026, color palettes have evolved beyond simple aesthetics. They are now dynamic systems optimized for accessibility, dark mode, and multi-platform consistency. This guide explores the intersection of traditional color theory and modern digital implementation.
               </p>
            </div>
          </header>

          <article className="prose prose-invert prose-2xl max-w-none space-y-24 text-text-secondary">
            <section className="scroll-mt-24 space-y-8">
                <h2 className="text-5xl font-display font-bold text-text-primary">Introduction to Modern Palettes</h2>
                <p>
                    A color palette is more than a collection of swatches; it is the visual language of your brand. In the digital age, your palette must perform across high-refresh-rate OLED screens and legacy monitors alike.
                </p>
                <p>
                    Selecting the right tones is a systematic process. For a detailed breakdown on implementation, see our masterclass on <Link href="/blog/choose-ui-color-palette" className="text-primary hover:underline">how to choose a color palette for UI design</Link>, which covers the latest 2026 standards.
                </p>
            </section>

            <section className="scroll-mt-24 space-y-12">
                <h2 className="text-5xl font-display font-bold text-text-primary">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 gap-8">
                    {faqs.map((faq, i) => (
                        <div key={i} className="p-8 bg-surface border border-border rounded-3xl">
                            <h3 className="text-2xl font-bold text-text-primary mb-4 m-0">{faq.question}</h3>
                            <p className="text-lg leading-relaxed m-0">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
          </article>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
