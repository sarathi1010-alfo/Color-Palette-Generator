"use client";
import { Footer } from "@/components/layout/Footer";


import Link from "next/link";
import { Palette, Wand2, Check, Zap, Share2, Globe, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import palettesData from "@/data/palettes.json";
import { PaletteCard } from "@/components/library/PaletteCard";
import { motion } from "framer-motion";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema } from "@/lib/seo/buildSchema";

const faqs = [
  {
    question: "How do I generate new color palettes in PaletteFlow?",
    answer: "Simply tap the Spacebar on your keyboard or click the 'Generate' button to produce a fresh, harmonious 5-color palette instantly."
  },
  {
    question: "How does PaletteFlow ensure color accessibility?",
    answer: "PaletteFlow integrates real-time WCAG 2.1 contrast ratio calculations, evaluating text-to-background contrast to ensure AA and AAA compliance for accessibility."
  },
  {
    question: "Can I generate palettes from an existing brand hex code?",
    answer: "Yes, paste your base brand hex code into any swatch, lock that color, and the engine calculates complementary, analogous, or triadic harmonies around it."
  },
  {
    question: "What export formats does PaletteFlow support?",
    answer: "You can export palettes as CSS Custom Properties (variables), Tailwind CSS configuration snippets, JSON, SVG swatches, and URL permalinks."
  },
  {
    question: "What color harmony algorithms are available?",
    answer: "PaletteFlow supports Monochromatic, Analogous, Complementary, Split-Complementary, Triadic, Tetradic, and Golden Ratio algorithms."
  }
];

export default function HomePage() {
  const featuredPalettes = palettesData.slice(0, 4);

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "PaletteFlow - Color Palette Generator",
    "url": "https://paletteflow.alfo.online/",
    "description": "Generate balanced, accessible color palettes in seconds. Spacebar generator, WCAG contrast checking, hex code export, and color theory modes.",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://paletteflow.alfo.online/"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Generate Harmonious and Accessible Color Palettes",
    "description": "Learn how to use PaletteFlow to create a cohesive and accessible color scheme for your design projects.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Press Spacebar",
        "text": "Instant algorithmic color palette generation based on harmonic color theory."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Lock Favorite Shades",
        "text": "Click the lock icon on individual hex colors to keep them while refreshing remaining slots."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Verify Contrast & Harmony",
        "text": "Toggle WCAG AA/AAA accessibility checks to guarantee readability for typography and buttons."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Copy Hex or Export",
        "text": "Copy individual hex codes with one click or export complete CSS, SCSS, or Tailwind configurations."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1" itemScope itemType="https://schema.org/WebPage">
        <JsonLd schema={webAppSchema} />
        <JsonLd schema={buildFaqSchema(faqs)} />
        <JsonLd schema={howToSchema} />
        <JsonLd schema={breadcrumbSchema} />
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                The Fastest Design Utility
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight max-w-5xl mx-auto" itemProp="name">
                Generate Harmonious and Accessible Color Palettes
              </h1>
              <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" itemProp="description">
                Create harmonious, production-ready color schemes instantly with PaletteFlow. Press the spacebar to generate balanced palettes based on proven color harmonies (analogous, complementary, triadic, tetradic). Lock favorite hues, inspect real-time WCAG 2.1 accessibility contrast scores, and export directly to CSS variables, Tailwind config, or SVG swatches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/generator"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-text-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform active:scale-95 shadow-2xl"
              >
                <Zap size={20} />
                <span>Generate My Palette →</span>
              </Link>
              <Link
                href="/palettes"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-surface border border-border px-10 py-5 rounded-2xl font-bold text-lg hover:bg-border transition-colors"
              >
                <span>Browse 500+ Palettes</span>
              </Link>
            </motion.div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none -z-10 overflow-hidden">
             <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] -translate-x-1/2" />
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] translate-x-1/2" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 border-b border-border bg-surface/30">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto md:mx-0">
                        <Palette className="text-blue-500" size={28} />
                    </div>
                    <h3 className="text-xl font-bold">Algorithmic Harmony</h3>
                    <p className="text-text-secondary leading-relaxed">
                        Built-in color theory algorithms generate perfect complementary, triadic, and analogous schemes instantly.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto md:mx-0">
                        <Check className="text-green-500" size={28} />
                    </div>
                    <h3 className="text-xl font-bold">Verified Accessibility</h3>
                    <p className="text-text-secondary leading-relaxed">
                        Real-time WCAG contrast checking ensures your designs are readable and inclusive for everyone.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto md:mx-0">
                        <Share2 className="text-purple-500" size={28} />
                    </div>
                    <h3 className="text-xl font-bold">Pro Export Formats</h3>
                    <p className="text-text-secondary leading-relaxed">
                        Copy-ready CSS variables, Tailwind config, SCSS, and JSON. Integrated directly into your workflow.
                    </p>
                </div>
            </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-4">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                Simple 4-Step Process
              </span>
              <h2 className="text-4xl font-display font-bold">How It Works</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Create harmonious, production-ready color palettes in seconds with our streamlined workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-6 bg-surface/50 border border-border rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 font-bold flex items-center justify-center text-lg">1</div>
                <h3 className="text-xl font-bold">Press Spacebar</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Instant algorithmic color palette generation based on harmonic color theory.
                </p>
              </div>
              <div className="p-6 bg-surface/50 border border-border rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 font-bold flex items-center justify-center text-lg">2</div>
                <h3 className="text-xl font-bold">Lock Favorite Shades</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Click the lock icon on individual hex colors to keep them while refreshing remaining slots.
                </p>
              </div>
              <div className="p-6 bg-surface/50 border border-border rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 font-bold flex items-center justify-center text-lg">3</div>
                <h3 className="text-xl font-bold">Verify Contrast & Harmony</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Toggle WCAG AA/AAA accessibility checks to guarantee readability for typography and buttons.
                </p>
              </div>
              <div className="p-6 bg-surface/50 border border-border rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center text-lg">4</div>
                <h3 className="text-xl font-bold">Copy Hex or Export</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Copy individual hex codes with one click or export complete CSS, SCSS, or Tailwind configurations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Palettes */}
        <section className="py-32 max-w-7xl mx-auto px-6 space-y-12">
            <div className="flex items-end justify-between border-b border-border pb-8">
                <div className="space-y-2">
                    <h2 className="text-4xl font-display font-bold">Trending Inspiration</h2>
                    <p className="text-text-secondary">Explore the most popular palettes this week, or <Link href="/blog/choose-ui-color-palette" className="text-primary hover:underline font-bold">read our 2026 UI guide</Link>.</p>
                </div>
                <Link href="/palettes" className="text-sm font-bold underline hover:text-primary transition-colors">
                    Explore Library
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredPalettes.map((p) => (
                    <PaletteCard key={p.id} palette={p} />
                ))}
            </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-text-primary text-background">
            <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
                 <h2 className="text-5xl font-display font-bold">Ready to craft your brand?</h2>
                 <p className="text-xl opacity-80 max-w-2xl mx-auto">
                    No sign-up. No credit card. Just pure creative freedom at the speed of thought.
                 </p>
                 <Link
                    href="/generator"
                    className="inline-block bg-background text-text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
                >
                    Start Creating Now
                </Link>
            </div>
        </section>

        {/* FAQ / Semantic Snippets Section */}
        <section className="py-24 bg-surface/30 border-t border-border">
            <div className="max-w-4xl mx-auto px-6 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-display font-bold">Frequently Asked Questions</h2>
                    <p className="text-text-secondary text-lg">Everything you need to know about generating the perfect color palette.</p>
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
