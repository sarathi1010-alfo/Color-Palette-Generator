"use client";

import chroma from "chroma-js";
import { Check, X, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccessibilityScoreProps {
  colors: string[];
}

export function AccessibilityScore({ colors }: AccessibilityScoreProps) {
  const getScore = (c1: string, c2: string) => {
    const contrast = chroma.contrast(c1, c2);
    if (contrast >= 7) return { label: "AAA", score: 3, contrast };
    if (contrast >= 4.5) return { label: "AA", score: 2, contrast };
    if (contrast >= 3) return { label: "Large Text", score: 1, contrast };
    return { label: "Fail", score: 0, contrast };
  };

  // We'll check the first color (often primary) against the others,
  // or just show a grid of pairs. For a palette overview,
  // let's show the best combinations for text.

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">Contrast Guide</h3>
        <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">WCAG 2.1 Standards</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {colors.slice(0, 3).map((bg, i) => (
          <div key={i} className="p-6 rounded-3xl border border-border bg-surface space-y-4">
             <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-border" style={{ backgroundColor: bg }} />
                <span className="text-sm font-bold opacity-60">Background</span>
             </div>

             <div className="space-y-3">
                {["#ffffff", "#000000"].map((text) => {
                    const { label, score, contrast } = getScore(bg, text);
                    return (
                        <div key={text} className="flex items-center justify-between p-3 rounded-2xl bg-background/50 border border-border">
                            <div className="flex items-center space-x-3">
                                <div className="px-2 py-1 rounded text-[10px] font-black" style={{ backgroundColor: bg, color: text }}>
                                    Abc
                                </div>
                                <span className="text-xs font-medium">{text === "#ffffff" ? "White Text" : "Black Text"}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-[10px] font-bold opacity-50">{contrast.toFixed(2)}:1</span>
                                {score >= 2 ? (
                                    <span className="flex items-center text-green-500 text-[10px] font-bold">
                                        <Check size={12} className="mr-1" /> {label}
                                    </span>
                                ) : score === 1 ? (
                                    <span className="flex items-center text-yellow-500 text-[10px] font-bold">
                                        <AlertCircle size={12} className="mr-1" /> {label}
                                    </span>
                                ) : (
                                    <span className="flex items-center text-red-500 text-[10px] font-bold">
                                        <X size={12} className="mr-1" /> Fail
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
