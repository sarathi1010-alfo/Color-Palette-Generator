"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { generateTints, generateShades, validateHex } from "@/lib/color/conversions";
import { Copy } from "lucide-react";
import { RefreshCw } from "lucide-react";

export default function TintsShadesClientPage({ faqData }: { faqData?: any }) {
  const [baseColor, setBaseColor] = useState("#3B82F6");

  const validHex = validateHex(baseColor) ? (baseColor.startsWith("#") ? baseColor : `#${baseColor}`) : "#3B82F6";
  const tints = generateTints(validHex, 5).reverse();
  const shades = generateShades(validHex, 5);
  const scale = [...tints, validHex, ...shades];

  const scaleWeights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Tints & Shades</h1>
          <p className="text-text-secondary max-w-2xl">
            Generate perfectly stepped tints and shades for any color.
            Perfect for building Tailwind CSS palettes and design systems.
          </p>
        </div>

        <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-surface border border-border flex items-center gap-6">
                <div className="space-y-2 flex-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Base Color</label>
                    <div className="flex items-center space-x-4 max-w-xs">
                        <input
                            type="color"
                            value={validHex}
                            onChange={(e) => setBaseColor(e.target.value)}
                            className="w-16 h-16 rounded-xl border border-border cursor-pointer bg-transparent"
                        />
                        <input
                            type="text"
                            value={baseColor.toUpperCase()}
                            onChange={(e) => setBaseColor(e.target.value)}
                            className="flex-1 bg-background border border-border rounded-xl px-4 py-3 font-mono text-lg"
                        />
                    </div>
                </div>
                <button
                    onClick={() => {
                        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
                        setBaseColor(randomColor);
                    }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-border hover:bg-border transition-colors text-text-secondary hover:text-text-primary"
                >
                    <RefreshCw size={24} className="mb-2" />
                    <span className="text-xs font-bold">Randomize</span>
                </button>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-bold">Generated Scale (Tailwind)</h3>
                <div className="grid grid-cols-2 md:grid-cols-11 rounded-3xl overflow-hidden border border-border">
                    {scale.map((color, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="h-32 w-full group relative" style={{ backgroundColor: color }}>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 flex items-center justify-center backdrop-blur-sm">
                                     <button
                                         onClick={() => navigator.clipboard.writeText(color)}
                                         className="p-2 bg-surface border border-border rounded-full hover:bg-border transition-colors"
                                     >
                                         <Copy size={16} />
                                     </button>
                                </div>
                            </div>
                            <div className="p-4 bg-surface text-center space-y-1 border-t border-r border-border last:border-r-0">
                                <p className="text-xs font-bold text-text-secondary">{scaleWeights[index]}</p>
                                <p className="text-sm font-mono font-medium">{color}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {faqData && (
          <div className="mt-20 text-left w-full">
            <h2 className="text-3xl font-display font-bold text-text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqData.map((faq: any, index: number) => (
                <div key={index} className="bg-surface border border-border p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
