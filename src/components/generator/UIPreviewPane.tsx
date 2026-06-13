"use client";

import { Swatch } from "@/types/color";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sun, Moon, LayoutDashboard, LayoutTemplate } from "lucide-react";
import { motion } from "framer-motion";
import { checkAccessibility } from "@/lib/accessibility";

interface UIPreviewPaneProps {
  swatches: Swatch[];
}

export function UIPreviewPane({ swatches }: UIPreviewPaneProps) {
  const [isDark, setIsDark] = useState(true);
  const [viewMode, setViewMode] = useState<'dashboard' | 'landing'>('dashboard');

  if (swatches.length < 5) return null;

  const c1 = swatches[0].hex;
  const c2 = swatches[1].hex;
  const c3 = swatches[2].hex;
  const c4 = swatches[3].hex;
  const c5 = swatches[4].hex;

  const previewBg = isDark ? "#0d0d0f" : "#ffffff";
  const previewText = isDark ? "#f0f0f5" : "#111827";
  const previewSurface = isDark ? "#1a1a1f" : "#f3f4f6";
  const previewBorder = isDark ? "#2a2a32" : "#e5e7eb";

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary">
          UI Preview
        </h4>
        <div className="flex gap-2">
            <button
                onClick={() => setViewMode('dashboard')}
                className={`p-2 rounded-lg border transition-colors ${viewMode === 'dashboard' ? 'bg-text-primary text-background' : 'bg-surface border-border hover:bg-border'}`}
                title="Dashboard View"
            >
                <LayoutDashboard size={16} />
            </button>
            <button
                onClick={() => setViewMode('landing')}
                className={`p-2 rounded-lg border transition-colors ${viewMode === 'landing' ? 'bg-text-primary text-background' : 'bg-surface border-border hover:bg-border'}`}
                title="Landing Page View"
            >
                <LayoutTemplate size={16} />
            </button>
            <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-surface border border-border hover:bg-border transition-colors"
            title="Toggle Dark Mode"
            >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
        </div>
      </div>

      <motion.div
        layout
        className="relative overflow-hidden rounded-3xl border shadow-inner transition-colors duration-500"
        style={{ backgroundColor: previewBg, borderColor: previewBorder, color: previewText }}
      >
        {viewMode === 'dashboard' ? (
            <div className="p-4 space-y-4">
                {/* Dashboard Nav */}
                <div
                    className="h-10 rounded-lg flex items-center justify-between px-4"
                    style={{ backgroundColor: previewSurface, borderColor: previewBorder, borderWidth: 1 }}
                >
                    <div className="w-8 h-2 rounded" style={{ backgroundColor: c1 }} />
                    <div className="flex space-x-2">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: c2 }} />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-1 space-y-2">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-6 rounded bg-opacity-10" style={{ backgroundColor: i === 1 ? c1 : previewText, opacity: i === 1 ? 0.2 : 0.05 }} />
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="col-span-2 space-y-4">
                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="p-3 rounded-xl border" style={{ backgroundColor: previewSurface, borderColor: previewBorder }}>
                                <div className="h-2 w-10 mb-2 opacity-50" style={{ backgroundColor: previewText }} />
                                <div className="text-lg font-bold" style={{ color: c1 }}>$12,400</div>
                            </div>
                            <div className="p-3 rounded-xl border" style={{ backgroundColor: previewSurface, borderColor: previewBorder }}>
                                <div className="h-2 w-10 mb-2 opacity-50" style={{ backgroundColor: previewText }} />
                                <div className="text-lg font-bold" style={{ color: c2 }}>+14.5%</div>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="h-24 rounded-xl border p-3 flex items-end gap-1" style={{ backgroundColor: previewSurface, borderColor: previewBorder }}>
                            {[40, 70, 45, 90, 60, 80].map((h, i) => (
                                <div key={i} className="w-full rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i === 3 ? c1 : c3, opacity: i === 3 ? 1 : 0.5 }} />
                            ))}
                        </div>

                        <button
                            className="w-full py-2 rounded-lg font-bold text-xs transition-transform active:scale-95 shadow-md"
                            style={{ backgroundColor: c1, color: checkAccessibility(c1, "#ffffff").AA_Normal ? "#ffffff" : "#000000" }}
                        >
                            Primary Action
                        </button>
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex flex-col h-full">
                {/* Landing Page Hero */}
                <div className="p-6 text-center space-y-4 pt-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ background: `linear-gradient(135deg, ${c4}, transparent)` }} />
                    <h2 className="text-2xl font-display font-bold relative z-10">Build Something Amazing</h2>
                    <p className="text-xs opacity-70 relative z-10 max-w-[200px] mx-auto">Create beautiful digital experiences with perfect color harmony.</p>

                    <div className="flex justify-center gap-2 pt-2 relative z-10">
                        <button
                            className="px-4 py-2 rounded-full font-bold text-xs shadow-lg"
                            style={{ backgroundColor: c1, color: checkAccessibility(c1, "#ffffff").AA_Normal ? "#ffffff" : "#000000" }}
                        >
                            Get Started
                        </button>
                        <button
                            className="px-4 py-2 rounded-full font-bold text-xs border"
                            style={{ borderColor: c2, color: c2 }}
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="p-4 grid grid-cols-2 gap-3 bg-opacity-50" style={{ backgroundColor: previewSurface }}>
                    <div className="p-3 rounded-xl border bg-background" style={{ borderColor: previewBorder }}>
                        <div className="w-8 h-8 rounded-full mb-2 flex items-center justify-center" style={{ backgroundColor: `${c2}33` }}>
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: c2 }} />
                        </div>
                        <div className="h-2 w-16 mb-1 rounded" style={{ backgroundColor: previewText, opacity: 0.8 }} />
                        <div className="h-1.5 w-full rounded" style={{ backgroundColor: previewText, opacity: 0.3 }} />
                    </div>
                    <div className="p-3 rounded-xl border bg-background" style={{ borderColor: previewBorder }}>
                        <div className="w-8 h-8 rounded-full mb-2 flex items-center justify-center" style={{ backgroundColor: `${c3}33` }}>
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: c3 }} />
                        </div>
                        <div className="h-2 w-16 mb-1 rounded" style={{ backgroundColor: previewText, opacity: 0.8 }} />
                        <div className="h-1.5 w-full rounded" style={{ backgroundColor: previewText, opacity: 0.3 }} />
                    </div>
                </div>
            </div>
        )}
      </motion.div>

      {/* Accessibility Snippet */}
      <div className="p-4 rounded-2xl border border-border bg-surface text-sm flex items-center justify-between">
         <span className="text-text-secondary">Text Contrast (C1 vs White):</span>
         <div className="flex items-center gap-2">
            <span className="font-mono text-xs">{checkAccessibility(c1, "#ffffff").ratio}</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${checkAccessibility(c1, "#ffffff").AA_Normal ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                {checkAccessibility(c1, "#ffffff").AA_Normal ? 'PASS' : 'FAIL'}
            </span>
         </div>
      </div>
    </div>
  );
}
