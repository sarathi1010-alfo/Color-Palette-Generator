import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import {
  Contrast,
  Layers,
  Palette,
  Image as ImageIcon,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildLandingMeta } from "@/lib/seo/metaFactories";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";

export const metadata = resolveMetadata(buildLandingMeta({
  title: "Design Tools",
  description: "A suite of professional color utilities including contrast checkers, gradient generators, tints and shades builders, and image extractors.",
  slug: "/tools",
}));

const tools = [
  {
    title: "Contrast Checker",
    description: "Ensure your color combinations meet WCAG AA and AAA accessibility standards.",
    icon: <Contrast className="w-8 h-8" />,
    href: "/tools/contrast-checker",
    color: "bg-blue-500",
  },
  {
    title: "Gradient Generator",
    description: "Create beautiful CSS gradients and copy the code directly to your project.",
    icon: <Layers className="w-8 h-8" />,
    href: "/tools/gradient-generator",
    color: "bg-purple-500",
  },
  {
    title: "Tints & Shades",
    description: "Generate 10-step scales of tints and shades from any base color.",
    icon: <Palette className="w-8 h-8" />,
    href: "/tools/tints-shades",
    color: "bg-pink-500",
  },
  {
    title: "Image Extractor",
    description: "Extract a beautiful color palette directly from any image using your browser.",
    icon: <ImageIcon className="w-8 h-8" />,
    href: "/tools/image-extractor",
    color: "bg-orange-500",
  },
];

const faqs = [
  {
    question: "Why should I use a contrast checker?",
    answer: "Using a contrast checker ensures that text and interactive elements on your website are readable by everyone, including people with visual impairments, meeting WCAG AA and AAA accessibility standards."
  },
  {
    question: "How do I create beautiful CSS gradients?",
    answer: "Our Gradient Generator lets you blend multiple colors seamlessly. You can adjust the angle, add stops, and directly copy the optimized CSS code for your project."
  },
  {
    question: "Can I extract colors from an image?",
    answer: "Yes, our Image Extractor allows you to upload any image and instantly pulls out a matching color palette, saving you time from manually picking colors."
  },
  {
    question: "What are tints and shades in design?",
    answer: "Tints are created by adding white to a base color, making it lighter, while shades are created by adding black, making it darker. Our Tints & Shades tool automatically generates a 10-step scale for any given color to build out your UI palette."
  }
];

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd schema={buildFaqSchema(faqs)} />
      <Navbar />
      <main className="flex-1">
        <PageWrapper className="py-20">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Design <span className="text-text-secondary">Tools</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              A suite of professional utilities for designers and developers to build accessible, beautiful, and consistent color systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative p-8 rounded-[32px] bg-surface border border-border hover:border-text-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${tool.color} opacity-5 blur-[80px] group-hover:opacity-20 transition-opacity`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {tool.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    {tool.title}
                    <ArrowRight className="ml-2 w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </PageWrapper>

        {/* AEO / FAQ Section */}
        <section className="py-24 bg-surface/30 border-t border-border">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-display font-bold">Frequently Asked Questions</h2>
              <p className="text-text-secondary text-lg">Everything you need to know about our design utilities.</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
