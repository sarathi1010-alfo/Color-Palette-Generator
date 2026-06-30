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

const VALID_FORMATS = ['css-variables', 'tailwind-config', 'scss', 'json', 'figma'];

export async function generateMetadata({ params }: { params: Promise<{ format: string }> }) {
  const { format } = await params;

  if (!VALID_FORMATS.includes(format)) {
    return resolveMetadata(buildCategoryMeta({
        name: "Export Color Palette",
        slug: `export/${format}`,
        description: 'Export color palettes directly to your required format.',
        type: 'generator'
    }));
  }

  const formattedName = format.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return resolveMetadata(buildCategoryMeta({
    name: `Export Color Palette to ${formattedName}`,
    slug: `export/${format}`,
    description: `Easily export your generated color palettes directly to ${formattedName} for seamless integration into your development workflow.`,
    type: 'generator'
  }));
}

export async function generateStaticParams() {
  return VALID_FORMATS.map((format) => ({
    format: sanitizeSlug(format),
  }));
}

export default async function ExportFormatPage({ params }: { params: Promise<{ format: string }> }) {
  const { format } = await params;

  if (!VALID_FORMATS.includes(format)) {
    notFound();
  }

  const formattedName = format.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const faqData = [
    {
      question: `How do I export my palette to ${formattedName}?`,
      answer: `Once you have generated or selected a palette, click the export button and choose the ${formattedName} option to copy the formatted code to your clipboard.`
    },
    {
      question: `Is exporting to ${formattedName} free?`,
      answer: `Yes, all export formats, including ${formattedName}, are completely free to use on PaletteFlow without any limitations.`
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
              Export Colors to {formattedName}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Streamline your developer handoff. Generate your palette and instantly copy the {formattedName} configuration.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-surface border border-border rounded-3xl space-y-8">
             <Link
                href="/generator"
                className="inline-flex items-center space-x-3 bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl"
             >
                <Layers size={20} />
                <span>Start Generating →</span>
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
