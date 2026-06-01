"use client";

import { Swatch } from "@/types/color";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface UIPreviewPaneProps {
  swatches: Swatch[];
}

export function UIPreviewPane({ swatches }: UIPreviewPaneProps) {
  const [isDark, setIsDark] = useState(true);

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
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-lg bg-surface border border-border hover:bg-border transition-colors"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <motion.div
        layout
        className="p-6 space-y-8 rounded-3xl border shadow-inner transition-colors duration-500"
        style={{ backgroundColor: previewBg, borderColor: previewBorder, color: previewText }}
      >
        {/* Fake Nav */}
        <div
          className="h-10 rounded-lg flex items-center justify-between px-4"
          style={{ backgroundColor: c1 }}
        >
           <div className="w-8 h-2 rounded bg-white opacity-40" />
           <div className="flex space-x-2">
              <div className="w-4 h-2 rounded bg-white opacity-40" />
              <div className="w-4 h-2 rounded bg-white opacity-40" />
           </div>
        </div>

        {/* Fake Card */}
        <div
            className="rounded-xl p-4 space-y-4 border transition-colors duration-500"
            style={{ backgroundColor: previewSurface, borderColor: previewBorder }}
        >
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-full" style={{ backgroundColor: c2 }} />
             <div className="space-y-1 flex-1">
                <div className="h-2 w-24 rounded" style={{ backgroundColor: previewText }} />
                <div className="h-2 w-16 rounded opacity-40" style={{ backgroundColor: previewText }} />
             </div>
          </div>

          <div className="space-y-2">
             <div className="h-2 w-full rounded opacity-10" style={{ backgroundColor: previewText }} />
             <div className="h-2 w-full rounded opacity-10" style={{ backgroundColor: previewText }} />
             <div className="h-2 w-2/3 rounded opacity-10" style={{ backgroundColor: previewText }} />
          </div>

          <button
            className="w-full py-2.5 rounded-lg font-bold text-sm transition-transform active:scale-95 shadow-lg"
            style={{ backgroundColor: c3, color: "white" }}
          >
            Action Button
          </button>
        </div>

        {/* Gradients & Secondary UI */}
        <div className="grid grid-cols-2 gap-4">
           <div
             className="h-20 rounded-xl flex items-end p-3 shadow-lg"
             style={{ background: `linear-gradient(135deg, ${c4}, ${c5})` }}
           >
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Gradient</span>
           </div>
           <div
            className="rounded-xl p-3 flex flex-col justify-between border transition-colors duration-500"
            style={{ backgroundColor: previewSurface, borderColor: previewBorder }}
           >
              <div className="flex space-x-1">
                 {[c1, c2, c3, c4, c5].map((c, i) => (
                    <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                 ))}
              </div>
              <div className="h-2 w-12 rounded" style={{ backgroundColor: previewText }} />
           </div>
        </div>

        {/* Typography Preview */}
        <div className="space-y-2">
             <h3 className="font-display font-bold text-xl">The quick brown fox</h3>
             <p className="text-sm opacity-60">Design is not just what it looks like and feels like. Design is how it works.</p>
        </div>
      </motion.div>
    </div>
  );
}
