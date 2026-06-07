"use client";

import Link from "next/link";
import { ArrowRight, Palette, Layers, Contrast, Image as ImageIcon } from "lucide-react";
import { useMemo } from "react";

const allTools = [
  {
    title: "Generator",
    description: "Generate color palettes instantly.",
    icon: <Palette className="w-5 h-5 text-blue-500" />,
    href: "/generator",
    tags: ["color", "design", "palette"],
  },
  {
    title: "Contrast Checker",
    description: "WCAG accessibility contrast checker.",
    icon: <Contrast className="w-5 h-5 text-green-500" />,
    href: "/tools/contrast-checker",
    tags: ["accessibility", "color", "design"],
  },
  {
    title: "Gradient Generator",
    description: "Create and export CSS gradients.",
    icon: <Layers className="w-5 h-5 text-purple-500" />,
    href: "/tools/gradient-generator",
    tags: ["css", "gradient", "design"],
  },
  {
    title: "Tints & Shades",
    description: "Generate color scales from base hex.",
    icon: <Palette className="w-5 h-5 text-pink-500" />,
    href: "/tools/tints-shades",
    tags: ["color", "scale", "design"],
  },
  {
    title: "Image Extractor",
    description: "Extract colors directly from an image.",
    icon: <ImageIcon className="w-5 h-5 text-orange-500" />,
    href: "/tools/image-extractor",
    tags: ["image", "color", "design"],
  },
];

export function RelatedTools({ currentToolHref, tags }: { currentToolHref: string; tags: string[] }) {
  const related = useMemo(() => {
    // Score tools based on tag matches
    const scoredTools = allTools
      .filter((t) => t.href !== currentToolHref)
      .map((tool) => {
        const matches = tool.tags.filter((tag) => tags.includes(tag)).length;
        return { ...tool, matches };
      });

    // Sort by matches and take top 4 (or less)
    return scoredTools
      .sort((a, b) => b.matches - a.matches)
      .slice(0, 4);
  }, [currentToolHref, tags]);

  if (related.length === 0) return null;

  return (
    <section className="py-12 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8">You might also need:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-text-primary/50 transition-colors flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <h4 className="font-bold text-lg mb-2 flex items-center justify-between">
                {tool.title}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-text-secondary" />
              </h4>
              <p className="text-sm text-text-secondary flex-grow">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
