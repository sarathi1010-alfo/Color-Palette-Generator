import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildCategoryMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";
import { Layers } from "lucide-react";
import { sanitizeSlug } from '@/lib/url/utils';
import { notFound } from "next/navigation";

const VALID_TERMS = ['hex-code', 'hsl', 'rgb', 'okhsl', 'color-wheel', 'hue-saturation-lightness'];

export async function generateMetadata({ params }: { params: Promise<{ "color-term": string }> }) {
  const { "color-term": termSlug } = await params;

  if (!VALID_TERMS.includes(termSlug)) {
    return resolveMetadata(buildCategoryMeta({
        name: "Learn Design Terminology",
        slug: `learn/${termSlug}`,
        description: 'Understand color theory terminology.',
        type: 'generator'
    }));
  }

  const formattedName = termSlug.toUpperCase().replace(/-/g, ' ');

  return resolveMetadata(buildCategoryMeta({
    name: `What is ${formattedName}? Design Term Explained`,
    slug: `learn/${termSlug}`,
    description: `Understand what ${formattedName} means in UI/UX design, how it is calculated, and why it matters for generating perfect color palettes.`,
    type: 'generator'
  }));
}

export async function generateStaticParams() {
  return VALID_TERMS.map((term) => ({
    "color-term": sanitizeSlug(term),
  }));
}

export default async function LearnTermPage({ params }: { params: Promise<{ "color-term": string }> }) {
  const { "color-term": termSlug } = await params;

  if (!VALID_TERMS.includes(termSlug)) {
    notFound();
  }

  const formattedName = termSlug.toUpperCase().replace(/-/g, ' ');

  const faqData = [
    {
      question: `What does ${formattedName} stand for in design?`,
      answer: `${formattedName} is a fundamental concept in color theory and digital design used to define, manipulate, and render colors accurately on screens.`
    },
    {
      question: `Why is understanding ${formattedName} important for developers?`,
      answer: `Understanding ${formattedName} allows developers and designers to communicate effectively, ensuring that the colors chosen during the design phase are accurately implemented in CSS and UI frameworks.`
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildFaqSchema(faqData)} />
      <Navbar />

      <main className="flex-1">
        <PageWrapper className="py-20 max-w-4xl text-center">
          <div className="space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              Understanding {formattedName}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Master the terminology behind digital color creation.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-surface border border-border rounded-3xl space-y-8">
             <Link
                href="/guides/color-theory-pairings"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Read Full Color Guide →</span>
             </Link>
          </div>

          <div className="mt-20 text-left">
            <h2 className="text-3xl font-display font-bold text-text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-surface border border-border p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}
