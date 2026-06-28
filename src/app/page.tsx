"use client";
import { Footer } from "@/components/layout/Footer";


import Link from "next/link";
import { Palette, Wand2, Check, Zap, Share2, Globe, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import palettesData from "@/data/palettes.json";
import { PaletteCard } from "@/components/library/PaletteCard";
import { motion } from "framer-motion";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema, buildWebsiteSchema } from "@/lib/seo/buildSchema";

const faqs = [
  {
    question: "What is a color palette generator?",
    answer: "A color palette generator is a tool that helps designers and developers create harmonious, balanced, and accessible color schemes for their projects instantly using color theory algorithms."
  },
  {
    question: "How do I choose the best color palette for my website?",
    answer: "Start with your brand's core emotion or industry. Use our Personality Generator to find semantic associations, then ensure your primary and background colors pass WCAG accessibility contrast checks."
  },
  {
    question: "Is this color generator free to use?",
    answer: "Yes, PaletteFlow is completely free to use. You can generate unlimited palettes, extract colors from images, and export directly to CSS, Tailwind, or Figma without signing up."
  }
];

export default function HomePage() {
  const featuredPalettes = palettesData.slice(0, 4);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <JsonLd schema={buildFaqSchema(faqs)} />
      <JsonLd schema={buildWebsiteSchema()} />
      <Navbar />

      <main className="flex-1" itemScope itemType="https://schema.org/WebPage">
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
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight max-w-4xl mx-auto" itemProp="name">
                Build Beautiful Colors. <span className="text-primary italic">Instantly.</span>
              </h1>
              <p className="text-text-secondary text-xl max-w-2xl mx-auto leading-relaxed" itemProp="description">
                Generate, explore, and export stunning color palettes for your next UI,
                branding, or web project. Zero friction, zero login.
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

        {/* The Science of Color Theory Section */}
        <section className="py-24 bg-background border-b border-border">
            <div className="max-w-4xl mx-auto px-6 space-y-10">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-display font-bold">The Science Behind Perfect Color Palettes</h2>
                    <p className="text-text-secondary text-lg">Understanding color theory and how to choose the right colors for your brand.</p>
                </div>

                <div className="prose dark:prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
                    <p>
                        A great color palette is more than just a set of pretty colors; it is the visual foundation of your brand&apos;s identity and user experience. Whether you are designing a SaaS dashboard, an e-commerce website, or a mobile app, the colors you choose directly impact how users perceive and interact with your product. At PaletteFlow, we utilize advanced color theory algorithms to ensure every generated palette is mathematically harmonious.
                    </p>

                    <h3 className="text-2xl font-bold text-text-primary mt-8 mb-4">Understanding Color Harmony</h3>
                    <p>
                        Color harmony refers to the property that certain aesthetically pleasing color combinations have. These combinations create contrasts and affinities that are visually satisfying. The most common harmonic models include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Complementary Colors:</strong> Colors directly opposite each other on the color wheel (e.g., Blue and Orange). These create high-contrast, vibrant looks perfect for call-to-action buttons.</li>
                        <li><strong>Analogous Colors:</strong> Colors that are next to each other on the color wheel. They match well and create serene, comfortable designs. They are often found in nature.</li>
                        <li><strong>Triadic Colors:</strong> Three colors evenly spaced around the color wheel. Triadic color palettes are quite vibrant, even if you use pale or unsaturated versions of your hues.</li>
                        <li><strong>Monochromatic Colors:</strong> Different shades, tints, and tones of a single base hue. This creates a deeply cohesive and clean look, favored in modern minimalist design.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-text-primary mt-8 mb-4">The Importance of Accessibility</h3>
                    <p>
                        Beautiful colors mean nothing if your users can&apos;t read your content. The Web Content Accessibility Guidelines (WCAG) dictate that text and its background must have a contrast ratio of at least 4.5:1 for normal text, and 3:1 for large text. This ensures that users with visual impairments or color blindness can navigate your site easily. PaletteFlow integrates real-time WCAG contrast checking directly into our <Link href="/generator" className="text-primary hover:underline">Generator</Link>, so you never have to guess if your color choices are compliant.
                    </p>

                    <h3 className="text-2xl font-bold text-text-primary mt-8 mb-4">Applying Colors to UI Design</h3>
                    <p>
                        When applying a color palette to a user interface, it&apos;s best to follow the <strong>60-30-10 rule</strong>. 60% of the UI should be your primary/background color, 30% should be your secondary color (used for structural elements like cards or headers), and 10% should be your accent color, reserved exclusively for primary actions, buttons, and highlights. This ensures your design remains balanced, guiding the user&apos;s eye naturally to the most important elements on the screen. Looking for inspiration? Browse our <Link href="/palettes" className="text-primary hover:underline">Palettes Library</Link> for ready-to-use professional color combinations.
                    </p>
                </div>
            </div>
        </section>

        {/* Featured Palettes */}
        <section className="py-32 max-w-7xl mx-auto px-6 space-y-12">
            <div className="flex items-end justify-between border-b border-border pb-8">
                <div className="space-y-2">
                    <h2 className="text-4xl font-display font-bold">Trending Inspiration</h2>
                    <p className="text-text-secondary">Explore the most popular palettes this week.</p>
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
      </main>


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

      <Footer />
    </div>
  );
}
