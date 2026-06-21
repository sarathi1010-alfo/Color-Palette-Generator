import { Footer } from "@/components/layout/Footer";
import colorNames from "@/data/color-names.json";
import { Navbar } from "@/components/layout/Navbar";
import { getContrastColor, hexToHsl, hexToRgb, getLuminance } from "@/lib/color/conversions";
import { notFound } from "next/navigation";
import chroma from "chroma-js";
import Link from "next/link";
import { Metadata } from "next";
import { resolveMetadata } from "@/lib/seo/resolveMetadata";
import { buildColorMeta } from "@/lib/seo/metaFactories";
import { buildProductSchema, buildBreadcrumbSchema } from "@/lib/seo/buildSchema";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ colorname: string }> }): Promise<Metadata> {
  const { colorname } = await params;
  const colorData: any = colorNames.find(
    (c: any) => c.name.toLowerCase().replace(/\s+/g, "-") === colorname
  );
  if (!colorData) return {};

  return resolveMetadata(buildColorMeta({
    name: colorData.name,
    hex: colorData.hex.toUpperCase()
  }));
}

export async function generateStaticParams() {
  // Now generating for the full set (approx 3000 colors in bestof.json)
  return colorNames.map((color: any) => ({
    colorname: color.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function ColorNamePage({ params }: { params: Promise<{ colorname: string }> }) {
  const { colorname } = await params;
  const colorData: any = colorNames.find(
    (c: any) => c.name.toLowerCase().replace(/\s+/g, "-") === colorname
  );

  if (!colorData) {
    notFound();
  }

  const hex = colorData.hex;
  const rgb = hexToRgb(hex);
  const hsl = hexToHsl(hex);
  const contrastColor = getContrastColor(hex);
  const luminance = getLuminance(hex);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-16" itemScope itemType="https://schema.org/Product">
        <JsonLd schema={buildProductSchema(buildColorMeta({ name: colorData.name, hex: colorData.hex }))} />
        <JsonLd schema={buildBreadcrumbSchema(buildColorMeta({ name: colorData.name, hex: colorData.hex }).breadcrumbs)} />

        <article className="space-y-8">
            <div className="h-64 sm:h-80 w-full rounded-3xl shadow-2xl flex flex-col items-center justify-center space-y-4" style={{ backgroundColor: hex }}>
                <h1 className="text-5xl md:text-7xl font-display font-bold" style={{ color: contrastColor }} itemProp="name">{colorData.name}</h1>
                <p className="text-2xl font-mono font-medium opacity-80" style={{ color: contrastColor }}>{hex.toUpperCase()}</p>
            </div>
        </article>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold">Color Information</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-surface border border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">RGB</p>
                        <p className="text-lg font-mono">{rgb.r}, {rgb.g}, {rgb.b}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface border border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">HSL</p>
                        <p className="text-lg font-mono">{Math.round(hsl.h)}°, {Math.round(hsl.s * 100)}%, {Math.round(hsl.l * 100)}%</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface border border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">Luminance</p>
                        <p className="text-lg font-mono">{luminance.toFixed(4)}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface border border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">Brightness</p>
                        <p className="text-lg font-mono">{Math.round(luminance * 100)}%</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold">Harmony</h2>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-xl border border-border" style={{ backgroundColor: hex }} />
                        <div className="w-16 h-16 rounded-xl border border-border" style={{ backgroundColor: chroma(hex).set("hsl.h", (hsl.h + 180) % 360).hex() }} />
                        <span className="text-sm font-bold text-text-secondary">Complementary</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-xl border border-border" style={{ backgroundColor: chroma(hex).set("hsl.h", (hsl.h - 30 + 360) % 360).hex() }} />
                        <div className="w-16 h-16 rounded-xl border border-border" style={{ backgroundColor: hex }} />
                        <div className="w-16 h-16 rounded-xl border border-border" style={{ backgroundColor: chroma(hex).set("hsl.h", (hsl.h + 30) % 360).hex() }} />
                        <span className="text-sm font-bold text-text-secondary">Analogous</span>
                    </div>
                </div>
            </div>
        </section>

        <section className="p-8 rounded-3xl bg-surface border border-border space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-display font-bold">About {colorData.name}</h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
                {colorData.name} is a distinctive color identified by the hex code {hex.toUpperCase()}.
                Professionals across design disciplines use this shade for its unique visual properties.
                It has a luminance of {luminance.toFixed(4)}, making it a {isDark(hex) ? 'dark' : 'light'} tone.
            </p>
            <Link
                href={`/generator?p=${hex.replace('#', '')}`}
                className="inline-block bg-text-primary text-background px-8 py-4 rounded-2xl font-bold hover:scale-[0.98] transition-transform shadow-xl"
            >
                Use {colorData.name} in Generator
            </Link>
        </section>

        {/* SEO Internal Linking - Explore Colors */}
        <section className="border-t border-border pt-16 mt-16">
           <div className="flex items-center justify-between mb-8">
             <h2 className="text-3xl font-display font-bold">Explore Similar Colors</h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {colorNames
                .filter((c: any) => {
                  if (c.name === colorData.name) return false;
                  const c_hsl = hexToHsl(c.hex);
                  const hueDiff = Math.abs(c_hsl.h - hsl.h);
                  return hueDiff < 15 || hueDiff > 345;
                })
                .slice(0, 5)
                .map((related: any) => {
                  const relatedSlug = related.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  return (
                    <Link
                      key={related.name}
                      href={`/colors/${relatedSlug}`}
                      className="group flex flex-col gap-2 p-3 rounded-2xl bg-surface border border-border hover:scale-[1.02] transition-transform shadow-sm"
                    >
                       <div
                         className="h-24 w-full rounded-xl border border-border/50"
                         style={{ backgroundColor: related.hex }}
                       />
                       <div>
                         <h3 className="font-bold text-sm text-text-primary group-hover:text-primary transition-colors truncate">
                           {related.name}
                         </h3>
                         <p className="text-xs font-mono text-text-secondary uppercase">{related.hex}</p>
                       </div>
                    </Link>
                  )
                })}
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function isDark(hex: string): boolean {
  return chroma(hex).luminance() < 0.5;
}
