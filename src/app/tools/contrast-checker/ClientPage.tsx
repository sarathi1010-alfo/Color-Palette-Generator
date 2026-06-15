"use client";
import { Footer } from "@/components/layout/Footer";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { getContrast, getWcagGrade } from "@/lib/color/conversions";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContrastCheckerClientPage() {
  const [fg, setFg] = useState("#FFFFFF");
  const [bg, setBg] = useState("#000000");

  const ratio = getContrast(fg, bg);
  const grade = getWcagGrade(ratio);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Contrast Checker</h1>
          <p className="text-text-secondary max-w-2xl">
            Check the contrast ratio of different color combinations to ensure your UI is accessible
            and meets WCAG AA and AAA requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-surface border border-border space-y-8">
                    <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Background Color</label>
                        <div className="flex items-center space-x-4">
                            <input
                                type="color"
                                value={bg}
                                onChange={(e) => setBg(e.target.value)}
                                className="w-16 h-16 rounded-xl border border-border cursor-pointer bg-transparent"
                            />
                            <input
                                type="text"
                                value={bg.toUpperCase()}
                                onChange={(e) => setBg(e.target.value)}
                                className="flex-1 bg-background border border-border rounded-xl px-4 py-3 font-mono text-lg"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Text Color</label>
                        <div className="flex items-center space-x-4">
                            <input
                                type="color"
                                value={fg}
                                onChange={(e) => setFg(e.target.value)}
                                className="w-16 h-16 rounded-xl border border-border cursor-pointer bg-transparent"
                            />
                            <input
                                type="text"
                                value={fg.toUpperCase()}
                                onChange={(e) => setFg(e.target.value)}
                                className="flex-1 bg-background border border-border rounded-xl px-4 py-3 font-mono text-lg"
                            />
                        </div>
                    </div>

                    <button
                        onClick={() => { setFg(bg); setBg(fg); }}
                        className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-surface border border-border font-bold hover:bg-border transition-colors"
                    >
                        <RefreshCw size={18} />
                        <span>Swap Colors</span>
                    </button>
                </div>

                <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
                    <h3 className="text-xl font-bold">WCAG Requirements</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-text-secondary font-medium">Normal Text (AA)</span>
                            <span className={cn("px-3 py-1 rounded-full text-xs font-bold", ratio >= 4.5 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500")}>
                                {ratio >= 4.5 ? "PASS" : "FAIL"}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-text-secondary font-medium">Normal Text (AAA)</span>
                            <span className={cn("px-3 py-1 rounded-full text-xs font-bold", ratio >= 7 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500")}>
                                {ratio >= 7 ? "PASS" : "FAIL"}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-text-secondary font-medium">Large Text (AA)</span>
                            <span className={cn("px-3 py-1 rounded-full text-xs font-bold", ratio >= 3 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500")}>
                                {ratio >= 3 ? "PASS" : "FAIL"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div
                    className="flex-1 min-h-[400px] rounded-3xl border border-border p-12 flex flex-col justify-center space-y-6"
                    style={{ backgroundColor: bg, color: fg }}
                >
                    <h2 className="text-5xl font-display font-bold leading-tight">
                        The quick brown fox jumps over the lazy dog.
                    </h2>
                    <p className="text-lg opacity-80 leading-relaxed">
                        Design is not just what it looks like and feels like. Design is how it works.
                        Every great design begins with an even better story.
                    </p>
                    <div className="pt-8">
                         <div className="inline-block px-8 py-4 rounded-2xl font-bold border-2" style={{ borderColor: fg }}>
                            Interactive Element
                         </div>
                    </div>
                </div>

                <div className="p-8 rounded-3xl bg-surface border border-border flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">Contrast Ratio</p>
                        <p className="text-6xl font-display font-bold">{ratio.toFixed(2)}</p>
                    </div>
                    <div className={cn(
                        "text-4xl font-display font-black px-6 py-2 rounded-2xl",
                        grade === "AAA" ? "bg-green-500/10 text-green-500" :
                        grade === "AA" ? "bg-yellow-500/10 text-yellow-500" : "bg-red-500/10 text-red-500"
                    )}>
                        {grade}
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
