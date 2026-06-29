"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, RefreshCw, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GradientGeneratorClientPage({ faqData }: { faqData?: any }) {
  const [color1, setColor1] = useState("#3B82F6");
  const [color2, setColor2] = useState("#8B5CF6");
  const [type, setType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState(90);

  const cssValue = type === "linear"
    ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
    : `radial-gradient(circle, ${color1}, ${color2})`;

  const tailwindValue = `bg-gradient-to-r from-[${color1}] to-[${color2}]`;

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Gradient Generator</h1>
          <p className="text-text-secondary max-w-2xl">
            Create beautiful linear and radial CSS gradients.
            Export ready-to-use CSS code for your next web project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-surface border border-border space-y-8">

                    <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Type</label>
                        <div className="flex bg-background border border-border rounded-xl p-1">
                            <button
                                onClick={() => setType("linear")}
                                className={cn("flex-1 py-2 rounded-lg font-bold text-sm", type === "linear" ? "bg-surface shadow-sm" : "text-text-secondary hover:text-text-primary")}
                            >
                                Linear
                            </button>
                            <button
                                onClick={() => setType("radial")}
                                className={cn("flex-1 py-2 rounded-lg font-bold text-sm", type === "radial" ? "bg-surface shadow-sm" : "text-text-secondary hover:text-text-primary")}
                            >
                                Radial
                            </button>
                        </div>
                    </div>

                    {type === "linear" && (
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Angle</label>
                                <span className="text-xs font-bold text-text-secondary">{angle}°</span>
                            </div>
                            <input
                                type="range"
                                min="0" max="360"
                                value={angle}
                                onChange={(e) => setAngle(Number(e.target.value))}
                                className="w-full accent-primary"
                            />
                        </div>
                    )}

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Color 1</label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="color"
                                    value={color1}
                                    onChange={(e) => setColor1(e.target.value)}
                                    className="w-12 h-12 rounded-xl border border-border cursor-pointer bg-transparent"
                                />
                                <input
                                    type="text"
                                    value={color1.toUpperCase()}
                                    onChange={(e) => setColor1(e.target.value)}
                                    className="flex-1 bg-background border border-border rounded-xl px-4 py-2 font-mono"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Color 2</label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="color"
                                    value={color2}
                                    onChange={(e) => setColor2(e.target.value)}
                                    className="w-12 h-12 rounded-xl border border-border cursor-pointer bg-transparent"
                                />
                                <input
                                    type="text"
                                    value={color2.toUpperCase()}
                                    onChange={(e) => setColor2(e.target.value)}
                                    className="flex-1 bg-background border border-border rounded-xl px-4 py-2 font-mono"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            setColor1("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'));
                            setColor2("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'));
                        }}
                        className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-background border border-border font-bold hover:bg-border transition-colors"
                    >
                        <RefreshCw size={18} />
                        <span>Randomize Colors</span>
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                <div
                    className="w-full min-h-[400px] rounded-3xl border border-border shadow-inner"
                    style={{ background: cssValue }}
                />

                <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-surface border border-border flex items-center justify-between group">
                        <div className="space-y-1 overflow-hidden">
                            <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">CSS</p>
                            <p className="font-mono text-sm truncate pr-4">{cssValue}</p>
                        </div>
                        <button
                            onClick={() => navigator.clipboard.writeText(cssValue)}
                            className="p-2 bg-surface border border-border rounded-full hover:bg-border transition-colors flex-shrink-0"
                        >
                            <Copy size={16} />
                        </button>
                    </div>

                    <div className="p-4 rounded-xl bg-surface border border-border flex items-center justify-between group">
                        <div className="space-y-1 overflow-hidden">
                            <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Tailwind (Arbitrary)</p>
                            <p className="font-mono text-sm truncate pr-4">{tailwindValue}</p>
                        </div>
                        <button
                            onClick={() => navigator.clipboard.writeText(tailwindValue)}
                            className="p-2 bg-surface border border-border rounded-full hover:bg-border transition-colors flex-shrink-0"
                        >
                            <Copy size={16} />
                        </button>
                    </div>
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
