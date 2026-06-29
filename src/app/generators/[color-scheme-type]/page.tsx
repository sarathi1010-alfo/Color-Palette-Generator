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

const VALID_SCHEMES = ['complementary', 'triadic', 'analogous', 'monochromatic', 'split-complementary', 'tetradic'];

export async function generateMetadata({ params }: { params: Promise<{ "color-scheme-type": string }> }) {
  const { "color-scheme-type": schemeType } = await params;

  if (!VALID_SCHEMES.includes(schemeType)) {
    return resolveMetadata(buildCategoryMeta({
        name: "Color Scheme Generator",
        slug: `generators/${schemeType}`,
        description: 'Generate beautiful and harmonious color palettes instantly.',
        type: 'generator'
    }));
  }

  const formattedName = schemeType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return resolveMetadata(buildCategoryMeta({
    name: `${formattedName} Color Scheme Generator`,
    slug: `generators/${schemeType}`,
    description: `Generate beautiful and harmonious ${formattedName.toLowerCase()} color palettes instantly. Export to CSS, Tailwind, and SCSS.`,
    type: 'generator'
  }));
}

export async function generateStaticParams() {
  return VALID_SCHEMES.map((scheme) => ({
    "color-scheme-type": sanitizeSlug(scheme),
  }));
}

export default async function SchemeGeneratorPage({ params }: { params: Promise<{ "color-scheme-type": string }> }) {
  const { "color-scheme-type": schemeType } = await params;

  if (!VALID_SCHEMES.includes(schemeType)) {
    notFound();
  }

  const formattedName = schemeType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const faqData = [
    {
      question: `What is a ${formattedName.toLowerCase()} color scheme?`,
      answer: `A ${formattedName.toLowerCase()} color scheme is a specific arrangement of colors on the color wheel designed to create visual harmony and balance in design.`
    },
    {
      question: `How do I use this ${formattedName.toLowerCase()} generator?`,
      answer: `Simply click the generator button to launch our main tool, where you can select the ${formattedName.toLowerCase()} harmony rule and instantly generate matching palettes.`
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
              {formattedName} Color Palette Generator
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Instantly create perfect {formattedName.toLowerCase()} color harmonies for your next UI, branding, or illustration project.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-surface border border-border rounded-3xl space-y-8">
             <Link
                href="/generator"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Launch Generator →</span>
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
