import { Suspense } from "react";
import { PaletteGenerator } from "@/components/generator/PaletteGenerator";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildToolMeta } from "@/lib/seo/metaFactories";

import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";
import { Footer } from "@/components/layout/Footer";

export const metadata = resolveMetadata(buildToolMeta({
  title: "Random Color Palette Generator",
  description: "Generate beautiful, cohesive color palettes instantly. Lock colors, fine-tune shades, and export directly to CSS, Tailwind, or Figma.",
  slug: "/generator",
}));

const faqs = [
  {
    question: "How do I generate a color palette?",
    answer: "Simply open the generator and press the spacebar to instantly create a new, harmonious color palette. You can lock specific colors you like by clicking the lock icon, and generate new colors around them."
  },
  {
    question: "Can I export the palettes for my project?",
    answer: "Yes, you can export any palette directly to CSS, Tailwind, or Figma. Click the export button in the toolbar to copy the formatted code."
  },
  {
    question: "How do I extract a color palette from an image?",
    answer: "Click on the 'Extract from Image' button in the toolbar. You can then upload any image, and our tool will automatically extract the dominant color palette from it."
  }
];

export default function GeneratorPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the PaletteFlow Color Generator",
    "description": "Follow these steps to generate, lock, and export your perfect color scheme.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Press Spacebar",
        "text": "Instantly generate a new, harmonious color palette with every tap of your spacebar."
      },
      {
        "@type": "HowToStep",
        "name": "Lock Colors",
        "text": "Click the lock icon on individual swatches to hold them while you regenerate the rest."
      },
      {
        "@type": "HowToStep",
        "name": "Extract from Image",
        "text": "Use the image upload tool to pull dominant colors directly from your favorite photos."
      }
    ]
  };

  return (
    <main className="min-h-screen flex flex-col">
      <JsonLd schema={buildFaqSchema(faqs)} />
      <JsonLd schema={howToSchema} />
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <PaletteGenerator />
      </Suspense>

      {/* AEO / FAQ Section */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-display font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
