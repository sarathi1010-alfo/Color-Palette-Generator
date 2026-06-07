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

import { Footer } from "@/components/layout/Footer";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "AI Design Utilities Hub | Free Tools | ALFO",
  description: "A complete suite of professional design utilities. Contrast checkers, gradient generators, color scales, and image extractors.",
  url: "https://alfo-palette-generator.vercel.app/tools",
  keywords: ["design tools", "color utilities", "contrast checker", "gradient generator"],
});

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        <PageWrapper className="py-20">
          <div className="max-w-3xl mb-16">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              Utilities Hub
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Design <span className="text-text-secondary">Tools</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              A compounding ecosystem of professional utilities for designers and developers to build accessible, beautiful, and consistent digital experiences.
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
      </main>
      <Footer />
    </div>
  );
}
