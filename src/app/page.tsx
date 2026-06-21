"use client";
import { Footer } from "@/components/layout/Footer";


import Link from "next/link";
import { Palette, Wand2, Check, Zap, Share2, Globe, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import palettesData from "@/data/palettes.json";
import { PaletteCard } from "@/components/library/PaletteCard";
import { motion } from "framer-motion";

export default function HomePage() {
  const featuredPalettes = palettesData.slice(0, 4);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* ADSTERRA 728x90 & 320x50 START */}
      <div className="w-full flex justify-center py-4 bg-surface border-b border-border">
        {/* Desktop 728x90 */}
        <div className="hidden md:block">
          <iframe
            srcDoc="<script>atOptions = {'key' : 'e3013fc0470a2b05c6116970dcdcb6','format' : 'iframe','height' : 90,'width' : 728,'params' : {}};</script><script src='https://www.highperformanceformat.com/e3013fc0470a2b05c6116970dcdcb6/invoke.js'></script>"
            width="728"
            height="90"
            frameBorder="0"
            scrolling="no"
            style={{ border: 'none', overflow: 'hidden' }}
          ></iframe>
        </div>
        {/* Mobile 320x50 */}
        <div className="block md:hidden">
          <iframe
            srcDoc="<script>atOptions = {'key' : '5c06324017b2926ad4a234e4d9d33345','format' : 'iframe','height' : 50,'width' : 320,'params' : {}};</script><script src='https://www.highperformanceformat.com/5c06324017b2926ad4a234e4d9d33345/invoke.js'></script>"
            width="320"
            height="50"
            frameBorder="0"
            scrolling="no"
            style={{ border: 'none', overflow: 'hidden' }}
          ></iframe>
        </div>
      </div>
      {/* ADSTERRA 728x90 & 320x50 END */}

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
                onClick={(e) => {
                  if (typeof window !== "undefined") {
                    const hasFired = sessionStorage.getItem("adsterra_popunder_fired");
                    if (!hasFired) {
                      window.open("https://www.effectivecpmnetwork.com/bbjq1qzwr5?key=cbfa1fbdb589d39614540a2d6302a4e1", "_blank");
                      sessionStorage.setItem("adsterra_popunder_fired", "true");
                    }
                  }
                }}
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

        {/* ADSTERRA 300x250 START */}
        <div className="w-full flex justify-center py-8">
          <iframe
            srcDoc="<script>atOptions = {'key' : '0bb49b653de0fa69023c1380b845c079','format' : 'iframe','height' : 250,'width' : 300,'params' : {}};</script><script src='https://www.highperformanceformat.com/0bb49b653de0fa69023c1380b845c079/invoke.js'></script>"
            width="300"
            height="250"
            frameBorder="0"
            scrolling="no"
            style={{ border: 'none', overflow: 'hidden' }}
          ></iframe>
        </div>
        {/* ADSTERRA 300x250 END */}

        {/* GOOGLE ADSENSE PLACEHOLDER START */}
        {/* Placeholder for unverified Google AdSense code. Safe container that collapses when empty. */}
        <div className="w-full flex justify-center empty:hidden"></div>
        {/* GOOGLE ADSENSE PLACEHOLDER END */}

        {/* ADSTERRA NATIVE BANNER START */}
        <div className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-center overflow-hidden">
          <script async data-cfasync="false" src="https://pl29826862.effectivecpmnetwork.com/122b76e86675974fc4dc1c858d6c5fb3/invoke.js"></script>
          <div id="container-122b76e86675974fc4dc1c858d6c5fb3"></div>
        </div>
        {/* ADSTERRA NATIVE BANNER END */}
      </main>


      <Footer />
    </div>
  );
}
