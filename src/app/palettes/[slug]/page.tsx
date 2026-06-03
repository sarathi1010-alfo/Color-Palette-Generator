import palettesData from "@/data/palettes.json";
import { Navbar } from "@/components/layout/Navbar";
import { getColorName } from "@/lib/color/nameResolver";
import { getContrastColor, hexToHsl, hexToRgb } from "@/lib/color/conversions";
import { ArrowRight, MousePointer2, Download } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PaletteGrid } from "@/components/library/PaletteGrid";
import { AccessibilityScore } from "@/components/library/AccessibilityScore";
import { LivePreview } from "@/components/library/LivePreview";
import { PaletteActions } from "@/components/library/PaletteActions";
import { ExportPanel } from "@/components/generator/ExportPanel";
import { DownloadButton } from "@/components/library/DownloadButton";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const palette = palettesData.find((p) => p.id === slug);
  if (!palette) return {};

  const colors = palette.colors.map(c => c.replace("#", "")).join(",");
  const ogUrl = `/api/og?colors=${colors}&name=${encodeURIComponent(palette.name)}`;

  return {
    title: `${palette.name} Color Palette`,
    description: `Explore the ${palette.name} palette with ${palette.colors.length} harmonious colors. Get HEX, RGB, HSL codes and more.`,
    openGraph: {
      images: [ogUrl],
    },
  };
}

export async function generateStaticParams() {
  return palettesData.map((palette) => ({
    slug: palette.id,
  }));
}

export default async function PaletteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const palette = palettesData.find((p) => p.id === slug);

  if (!palette) {
    notFound();
  }

  // Track recent palettes on client
  const trackRecent = `
    if (typeof window !== 'undefined') {
        const recent = JSON.parse(localStorage.getItem('recent-palettes') || '[]');
        const updated = [{ id: "${palette.id}", name: "${palette.name}", colors: ${JSON.stringify(palette.colors)} }, ...recent.filter(p => p.id !== "${palette.id}")].slice(0, 10);
        localStorage.setItem('recent-palettes', JSON.stringify(updated));
    }
  `;

  const relatedPalettes = palettesData
    .filter(p => p.id !== palette.id && (p.category === palette.category || p.mood === palette.mood))
    .slice(0, 4);

  const swatches = palette.colors.map((color, i) => ({
    hex: color,
    name: getColorName(color),
    locked: false,
    id: `color-${i}`
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${palette.name} Color Palette`,
    "description": `A curated color palette named ${palette.name} with ${palette.colors.length} colors.`,
    "genre": "Color Palette",
    "keywords": palette.tags?.join(", "),
    "creator": {
      "@type": "Organization",
      "name": "ColorForge"
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script dangerouslySetInnerHTML={{ __html: trackRecent }} />
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-24">
        {/* Hero Palette */}
        <section className="space-y-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <nav className="flex text-xs font-bold uppercase tracking-widest text-text-secondary space-x-2">
                    <Link href="/palettes" className="hover:text-primary transition-colors">Library</Link>
                    <span>/</span>
                    <Link href={`/palettes/category/${palette.category}`} className="hover:text-primary transition-colors">{palette.category}</Link>
                    <span>/</span>
                    <span className="text-text-primary">{palette.name}</span>
                </nav>
                <h1 className="text-6xl font-display font-bold">{palette.name}</h1>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href={`/palettes/mood/${palette.mood}`} className="px-4 py-2 bg-surface border border-border rounded-full text-xs font-bold text-text-secondary hover:border-text-primary transition-colors">
                    Mood: {palette.mood}
                </Link>
                {palette.tags?.map(tag => (
                    <Link key={tag} href={`/palettes/tag/${tag}`} className="px-4 py-2 bg-surface border border-border rounded-full text-xs font-bold text-text-secondary hover:border-text-primary transition-colors">
                        #{tag}
                    </Link>
                ))}
              </div>
           </div>

           <div className="h-96 sm:h-[500px] w-full rounded-3xl overflow-hidden flex shadow-2xl border border-border">
              {palette.colors.map((color, i) => (
                <div
                    key={i}
                    className="flex-1 h-full relative group"
                    style={{ backgroundColor: color }}
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                         <Link
                            href={`/colors/${getColorName(color).toLowerCase().replace(/\s+/g, '-')}`}
                            className="p-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:scale-110 transition-transform mb-4"
                         >
                            <MousePointer2 size={24} />
                         </Link>
                         <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">View Color</span>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 text-center">
                         <span className="font-mono font-bold text-lg" style={{ color: getContrastColor(color) }}>
                            {color.toUpperCase()}
                         </span>
                         <p className="text-[10px] font-bold uppercase tracking-tighter opacity-50" style={{ color: getContrastColor(color) }}>
                            {getColorName(color)}
                         </p>
                    </div>
                </div>
              ))}
           </div>
        </section>

        {/* Color Details Table */}
        <section className="space-y-8">
           <h2 className="text-3xl font-display font-bold">Color Breakdown</h2>
           <div className="overflow-hidden rounded-3xl border border-border bg-surface">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-background/50">
                            <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-secondary">Color</th>
                            <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-secondary">Name</th>
                            <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-secondary">HEX</th>
                            <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-secondary">RGB</th>
                            <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-secondary">HSL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {palette.colors.map((color, i) => {
                            const rgb = hexToRgb(color);
                            const hsl = hexToHsl(color);
                            const colorSlug = getColorName(color).toLowerCase().replace(/\s+/g, '-');
                            return (
                                <tr key={i} className="border-t border-border hover:bg-background/50 transition-colors group">
                                    <td className="py-6 px-8">
                                        <div className="w-16 h-16 rounded-2xl border border-border shadow-md" style={{ backgroundColor: color }} />
                                    </td>
                                    <td className="py-6 px-8">
                                        <Link href={`/colors/${colorSlug}`} className="font-bold text-lg hover:text-primary transition-colors underline decoration-border underline-offset-4">
                                            {getColorName(color)}
                                        </Link>
                                    </td>
                                    <td className="py-6 px-8 font-mono text-sm font-medium">{color.toUpperCase()}</td>
                                    <td className="py-6 px-8 font-mono text-sm opacity-60">{rgb.r}, {rgb.g}, {rgb.b}</td>
                                    <td className="py-6 px-8 font-mono text-sm opacity-60">{Math.round(hsl.h)}°, {Math.round(hsl.s * 100)}%, {Math.round(hsl.l * 100)}%</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
           </div>
        </section>

        {/* About & Actions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl font-display font-bold">About the {palette.name} Palette</h2>
                    <div className="prose dark:prose-invert max-w-none text-text-secondary text-lg leading-relaxed space-y-4">
                        <p>
                            The {palette.name} color palette is a professional-grade collection featuring {palette.colors.length} harmonious shades.
                            This scheme is categorized under <Link href={`/palettes/category/${palette.category}`} className="text-text-primary font-bold hover:underline">{palette.category}</Link> and is
                            specifically designed to create a <Link href={`/palettes/mood/${palette.mood}`} className="text-text-primary font-bold hover:underline">{palette.mood}</Link> atmosphere.
                        </p>
                        <p>
                            Each color in this palette, from {getColorName(palette.colors[0])} to {getColorName(palette.colors[palette.colors.length-1])},
                            has been algorithmically verified for visual balance. Whether you&apos;re building a modern SaaS dashboard,
                            a brand identity for a {palette.category} company, or just looking for UI inspiration,
                            this selection provides a solid foundation for high-quality design.
                        </p>
                    </div>
                </div>

                <AccessibilityScore colors={palette.colors} />
            </div>

            <div className="space-y-6">
                <div className="bg-surface rounded-3xl border border-border p-8 space-y-8 shadow-xl sticky top-24">
                    <h3 className="font-bold text-xl">Implement Palette</h3>
                    <div className="space-y-4">
                        <Link
                            href={`/generator?p=${palette.colors.map(c => c.replace('#', '')).join('-')}`}
                            className="w-full flex items-center justify-center space-x-2 bg-text-primary text-background py-4 rounded-2xl font-bold hover:scale-[0.98] transition-transform"
                        >
                            <span>Open in Generator</span>
                            <ArrowRight size={18} />
                        </Link>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-background border border-border rounded-2xl p-1 flex items-center justify-center">
                                <ExportPanel swatches={swatches} />
                                <span className="text-xs font-bold mr-2">Export</span>
                            </div>
                            <DownloadButton colors={palette.colors} name={palette.name} />
                        </div>
                    </div>

                    <div className="pt-8 border-t border-border space-y-6">
                        <div className="space-y-3">
                            <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Share Palette</span>
                            <PaletteActions colors={palette.colors} name={palette.name} />
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-text-secondary">
                            <span>License</span>
                            <span className="text-green-500 font-black">Free Use</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Live Preview Section */}
        <section>
            <LivePreview colors={palette.colors} />
        </section>

        {/* Related Palettes */}
        {relatedPalettes.length > 0 && (
            <section className="space-y-12">
                <div className="flex items-end justify-between border-b border-border pb-6">
                    <h2 className="text-3xl font-display font-bold">Related Inspiration</h2>
                    <Link href="/palettes" className="text-sm font-bold underline hover:text-primary transition-colors">Browse all</Link>
                </div>
                <PaletteGrid palettes={relatedPalettes} />
            </section>
        )}
      </main>
    </div>
  );
}
