"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Copy, RefreshCw } from "lucide-react";
import { toast } from "react-hot-toast";
import { copyToClipboard } from "@/lib/utils";
import chroma from "chroma-js";
import { getContrastColor } from "@/lib/color/conversions";

export default function TintsShadesPage() {
  const [baseColor, setBaseColor] = useState("#3A86FF");

  const scale = useMemo(() => {
    if (!chroma.valid(baseColor)) return [];
    return chroma.scale(['#ffffff', baseColor, '#000000']).mode('lch').colors(11);
  }, [baseColor]);

  const handleCopy = (hex: string) => {
    copyToClipboard(hex.toUpperCase());
    toast.success(`Copied ${hex.toUpperCase()}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Tints & Shades</h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Generate perfectly weighted tints and shades for any base color.
            Perfect for building design systems and UI variants.
          </p>
        </div>

        <div className="space-y-12">
            <div className="p-8 rounded-3xl bg-surface border border-border max-w-xl space-y-6">
                <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Base Color</label>
                    <div className="flex items-center space-x-4">
                        <input
                            type="color"
                            value={baseColor}
                            onChange={(e) => setBaseColor(e.target.value)}
                            className="w-16 h-16 rounded-xl border border-border cursor-pointer bg-transparent"
                        />
                        <input
                            type="text"
                            value={baseColor.toUpperCase()}
                            onChange={(e) => setBaseColor(e.target.value)}
                            className="flex-1 bg-background border border-border rounded-xl px-4 py-3 font-mono text-lg"
                        />
                         <button
                            onClick={() => setBaseColor(chroma.random().hex())}
                            className="p-3 rounded-xl bg-surface border border-border hover:bg-border transition-colors"
                        >
                            <RefreshCw size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary">Generated Scale</h3>
                <div className="flex flex-col md:flex-row h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
                    {scale.map((color, i) => (
                        <div
                            key={i}
                            onClick={() => handleCopy(color)}
                            className="flex-1 group relative cursor-pointer hover:flex-[1.5] transition-all duration-500"
                            style={{ backgroundColor: color }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Copy size={24} style={{ color: getContrastColor(color) }} />
                            </div>
                            <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="font-mono font-bold text-[10px] uppercase" style={{ color: getContrastColor(color) }}>
                                    {color}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-8 rounded-3xl bg-surface border border-border space-y-4">
                    <h3 className="font-bold text-xl">What are Tints?</h3>
                    <p className="text-text-secondary leading-relaxed">
                        A tint is produced by mixing a color with white, which increases lightness.
                        In this tool, tints are generated on the left side of the base color.
                    </p>
                 </div>
                 <div className="p-8 rounded-3xl bg-surface border border-border space-y-4">
                    <h3 className="font-bold text-xl">What are Shades?</h3>
                    <p className="text-text-secondary leading-relaxed">
                        A shade is produced by mixing a color with black, which reduces lightness.
                        In this tool, shades are generated on the right side of the base color.
                    </p>
                 </div>
            </div>
        </div>
      </main>
    </div>
  );
}
