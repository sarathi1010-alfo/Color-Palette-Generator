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

const VALID_RATIOS = ['wcag-aa', 'wcag-aaa', '4-5-1-ratio', '7-1-ratio'];

export async function generateMetadata({ params }: { params: Promise<{ "contrast-ratio": string }> }) {
  const { "contrast-ratio": ratioSlug } = await params;

  if (!VALID_RATIOS.includes(ratioSlug)) {
    return resolveMetadata(buildCategoryMeta({
        name: "Accessibility Contrast Ratio",
        slug: `accessibility/${ratioSlug}`,
        description: 'Ensure color contrast meets accessibility standards.',
        type: 'generator'
    }));
  }

  const formattedName = ratioSlug.toUpperCase().replace(/-/g, ' ');

  return resolveMetadata(buildCategoryMeta({
    name: `Verify ${formattedName} Color Contrast`,
    slug: `accessibility/${ratioSlug}`,
    description: `Ensure your web design is accessible by verifying color palettes against the ${formattedName} standard using our free contrast checker.`,
    type: 'generator'
  }));
}

export async function generateStaticParams() {
  return VALID_RATIOS.map((ratio) => ({
    "contrast-ratio": sanitizeSlug(ratio),
  }));
}

export default async function AccessibilityRatioPage({ params }: { params: Promise<{ "contrast-ratio": string }> }) {
  const { "contrast-ratio": ratioSlug } = await params;

  if (!VALID_RATIOS.includes(ratioSlug)) {
    notFound();
  }

  const formattedName = ratioSlug.toUpperCase().replace(/-/g, ' ');

  const faqData = [
    {
      question: `What does the ${formattedName} standard mean?`,
      answer: `The ${formattedName} standard refers to the specific mathematical ratio between the foreground text color and the background color, ensuring sufficient contrast for users with visual impairments as defined by the Web Content Accessibility Guidelines (WCAG).`
    },
    {
      question: `How can I check if my colors meet the ${formattedName} requirement?`,
      answer: `You can use our free WCAG contrast checker tool to input your foreground and background hex codes. It will instantly calculate the ratio and tell you if it passes the ${formattedName} standard.`
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
              {formattedName} Color Contrast
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Design with confidence. Ensure your palettes meet strict accessibility guidelines with our real-time verification tools.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-surface border border-border rounded-3xl space-y-8">
             <Link
                href="/tools/contrast-checker"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Open Contrast Checker →</span>
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
