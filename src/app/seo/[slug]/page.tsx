import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildArticleSchema, buildFaqSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { BookOpen } from "lucide-react";
import { SeoMeta } from "@/types/seo";
import seoPages from "@/data/seo-pages.json";
import { notFound } from "next/navigation";
import { PaletteGrid } from "@/components/library/PaletteGrid";
import palettesData from "@/data/palettes.json";

export async function generateStaticParams() {
  return seoPages.map((page: any) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = seoPages.find((p: any) => p.slug === slug);

  if (!pageData) {
    return resolveMetadata(buildLandingMeta({
      title: 'Not Found',
      description: 'Page not found',
      slug: 'not-found',
    }));
  }

  return resolveMetadata(buildLandingMeta({
    title: pageData.title,
    description: `Explore our comprehensive guide and resources for ${pageData.title}. Discover the best color palettes, tools, and tips.`,
    slug: `/seo/${slug}`,
  }));
}

export default async function SeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = seoPages.find((p: any) => p.slug === slug);

  if (!pageData) {
    notFound();
  }

  const metaDataObj: SeoMeta = {
    title: pageData.title,
    description: `Explore our comprehensive guide and resources for ${pageData.title}. Discover the best color palettes, tools, and tips.`,
    slug: `/seo/${slug}`,
    pageType: "article",
    author: { name: "PaletteFlow Editorial" },
    publishedAt: new Date().toISOString()
  };

  const faqs = [
    { question: `What is ${pageData.title}?`, answer: `${pageData.title} is an essential concept and resource for designers looking to elevate their projects.` },
    { question: `How can I use the palettes for ${pageData.title}?`, answer: `You can explore the generated palettes below, export them to Tailwind, CSS, or use them directly in your design workflow.` }
  ];

  // Pick some semi-random palettes for display (using ID hash mod)
  const idHash = pageData.slug.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
  const displayPalettes = palettesData.slice((idHash % 10) * 4, (idHash % 10) * 4 + 8);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildArticleSchema(metaDataObj)} />
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-7xl mx-auto px-6">
          <div className="space-y-6 mb-16 border-b border-border pb-12 max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm tracking-widest uppercase">
              <BookOpen className="w-4 h-4" />
              <span>Resource Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              {pageData.title}
            </h1>
            <p className="text-xl text-text-secondary">
              Everything you need to know about {pageData.title.toLowerCase()}, from theoretical foundations to practical application.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-text-primary mb-8">Related Color Palettes</h2>
            <p className="text-text-secondary mb-8">
              Explore these hand-picked color palettes that align with {pageData.title.toLowerCase()}.
            </p>
            <PaletteGrid palettes={displayPalettes} />
          </div>

          <article className="prose prose-invert prose-lg max-w-4xl mx-auto space-y-12 text-text-secondary mb-16">
             <section className="space-y-6">
               <h2 className="text-3xl font-display font-bold text-text-primary">Understanding {pageData.title}</h2>
               <p>
                 Color plays a pivotal role in visual communication. Mastering {pageData.title.toLowerCase()} allows creators to evoke the right emotions, establish brand identity, and improve accessibility.
               </p>
             </section>

             <section className="space-y-8 pt-12 border-t border-border">
                <h2 className="text-3xl font-display font-bold text-text-primary">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-surface border border-border p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-text-primary mb-2">{faq.question}</h3>
                            <p>{faq.answer}</p>
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
