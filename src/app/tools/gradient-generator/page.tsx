"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Copy, RefreshCw } from "lucide-react";
import { toast } from "react-hot-toast";
import { copyToClipboard } from "@/lib/utils";

export default function GradientGeneratorPage() {
  const [color1, setColor1] = useState("#FF6B6B");
  const [color2, setColor2] = useState("#4ECDC4");
  const [angle, setAngle] = useState(135);

  const css = `linear-gradient(${angle}deg, ${color1.toUpperCase()}, ${color2.toUpperCase()})`;

  const handleCopy = () => {
    copyToClipboard(`background: ${css};`);
    toast.success("Gradient CSS copied!");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Gradient Generator</h1>
          <p className="text-text-secondary max-w-2xl text-lg">
            Create beautiful CSS gradients, customize the angle, and copy the code directly into your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-surface border border-border space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Start Color</label>
                            <input
                                type="color"
                                value={color1}
                                onChange={(e) => setColor1(e.target.value)}
                                className="w-full h-20 rounded-2xl border border-border cursor-pointer bg-transparent"
                            />
                            <input
                                type="text"
                                value={color1.toUpperCase()}
                                onChange={(e) => setColor1(e.target.value)}
                                className="w-full bg-background border border-border rounded-xl px-4 py-2 font-mono text-center"
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">End Color</label>
                            <input
                                type="color"
                                value={color2}
                                onChange={(e) => setColor2(e.target.value)}
                                className="w-full h-20 rounded-2xl border border-border cursor-pointer bg-transparent"
                            />
                            <input
                                type="text"
                                value={color2.toUpperCase()}
                                onChange={(e) => setColor2(e.target.value)}
                                className="w-full bg-background border border-border rounded-xl px-4 py-2 font-mono text-center"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-secondary">Angle ({angle}°)</label>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={angle}
                            onChange={(e) => setAngle(parseInt(e.target.value))}
                            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-text-primary"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={() => { setColor1(color2); setColor2(color1); }}
                            className="flex-1 flex items-center justify-center space-x-2 py-4 rounded-2xl bg-surface border border-border font-bold hover:bg-border transition-colors"
                        >
                            <RefreshCw size={18} />
                            <span>Flip Colors</span>
                        </button>
                    </div>
                </div>

                <div className="p-8 rounded-3xl bg-surface border border-border space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary">CSS Output</h3>
                    <div className="relative">
                        <pre className="p-6 rounded-2xl bg-background border border-border overflow-auto font-mono text-sm leading-relaxed">
                            <code>background: {css};</code>
                        </pre>
                        <button
                            onClick={handleCopy}
                            className="absolute top-4 right-4 p-2 rounded-xl bg-surface hover:bg-border transition-colors border border-border"
                        >
                            <Copy size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div
                    className="w-full h-96 rounded-[40px] shadow-2xl border border-border"
                    style={{ background: css }}
                />

                <div className="p-8 rounded-3xl bg-surface border border-border space-y-6">
                    <h3 className="text-xl font-bold">Try these combinations</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            ["#8EC5FC", "#E0C3FC"],
                            ["#FBAB7E", "#F7CE68"],
                            ["#85FFBD", "#FFFB7D"],
                            ["#21D4FD", "#B721FF"],
                            ["#FF9A9E", "#FAD0C4"],
                            ["#A18CD1", "#FBC2EB"]
                        ].map(([c1, c2], i) => (
                            <button
                                key={i}
                                onClick={() => { setColor1(c1); setColor2(c2); }}
                                className="h-16 rounded-2xl transition-all hover:scale-105 border border-white/10 shadow-lg"
                                style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
