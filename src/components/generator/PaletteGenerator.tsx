"use client";

import { usePalette } from "@/hooks/usePalette";
import { SwatchStrip } from "./SwatchStrip";
import { Navbar } from "../layout/Navbar";
import { GeneratorToolbar } from "./GeneratorToolbar";
import { UIPreviewPane } from "./UIPreviewPane";
import { useState, useEffect, useCallback } from "react";
import { Eye, EyeOff, Keyboard, Heart, X, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { decodePalette } from "@/lib/url/paletteEncoder";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function PaletteGenerator() {
  const searchParams = useSearchParams();
  const initialColors = decodePalette(searchParams.get("p") || "");

  const { swatches, mode, mounted, generate, toggleLock, reorder, updateColor, setPalette } = usePalette(initialColors || undefined);
  const { saveFavorite } = useLocalStorage();
  const [showPreview, setShowPreview] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "?" || (e.key === "/" && e.shiftKey)) {
        setShowShortcuts(prev => !prev);
    }
    if (e.key.toLowerCase() === "p") {
        setShowPreview(prev => !prev);
        setShowHint(false);
    }
    if (e.key === "Escape") {
        setShowShortcuts(false);
        setShowPreview(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!mounted) {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-background">
            <Navbar />
            <div className="flex-1 flex">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex-1 bg-surface border-r border-border animate-pulse" />
                ))}
            </div>
        </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 relative flex overflow-hidden">
        <div className="flex-1 relative">
            <SwatchStrip
            swatches={swatches}
            onReorder={reorder}
            onToggleLock={toggleLock}
            onUpdateColor={updateColor}
            />

            <AnimatePresence>
                {showHint && !showShortcuts && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 bg-surface/80 backdrop-blur-md border border-border px-6 py-3 rounded-full flex items-center space-x-3 shadow-2xl pointer-events-none"
                    >
                        <Keyboard size={20} className="text-text-secondary" />
                        <span className="text-sm font-bold">Press <span className="bg-text-primary text-background px-1.5 py-0.5 rounded font-mono">Space</span> to generate!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute top-6 left-6 z-30 flex items-center space-x-2">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => saveFavorite(swatches)}
                    className="p-4 rounded-full bg-surface border border-border shadow-2xl transition-transform flex items-center justify-center"
                    title="Save to Favorites"
                >
                    <Heart size={20} className="text-red-500 fill-current" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowShortcuts(true)}
                    className="p-4 rounded-full bg-surface border border-border shadow-2xl transition-transform flex items-center justify-center"
                    title="Keyboard Shortcuts"
                >
                    <HelpCircle size={20} className="text-text-secondary" />
                </motion.button>
            </div>
        </div>

        <AnimatePresence>
            {showPreview && (
                <motion.div
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    exit={{ x: 400 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="w-96 border-l border-border bg-background p-6 overflow-y-auto hidden lg:block z-20"
                >
                    <UIPreviewPane swatches={swatches} />
                </motion.div>
            )}
        </AnimatePresence>

        <button
            onClick={() => { setShowPreview(!showPreview); setShowHint(false); }}
            className="absolute bottom-6 right-6 z-30 p-4 rounded-full bg-surface border border-border shadow-2xl hover:scale-110 transition-transform hidden lg:flex items-center space-x-2"
        >
            {showPreview ? <EyeOff size={20} /> : <Eye size={20} />}
            <span className="text-sm font-bold">{showPreview ? "Hide Preview" : "Show Preview"}</span>
        </button>

        {/* Shortcuts Modal Overlay */}
        <AnimatePresence>
            {showShortcuts && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6"
                    onClick={() => setShowShortcuts(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="bg-surface border border-border rounded-[32px] p-10 max-w-md w-full shadow-2xl space-y-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-display font-bold">Shortcuts</h2>
                            <button onClick={() => setShowShortcuts(false)} className="p-2 rounded-full hover:bg-border transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-background border border-border rounded-2xl">
                                <span className="font-bold">Generate New Palette</span>
                                <span className="px-3 py-1 bg-surface border border-border rounded font-mono text-sm">Space</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-background border border-border rounded-2xl">
                                <span className="font-bold">Toggle Preview</span>
                                <span className="px-3 py-1 bg-surface border border-border rounded font-mono text-sm">P</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-background border border-border rounded-2xl">
                                <span className="font-bold">Show Shortcuts</span>
                                <span className="px-3 py-1 bg-surface border border-border rounded font-mono text-sm">?</span>
                            </div>
                        </div>

                        <p className="text-center text-text-secondary text-sm">
                            More shortcuts coming soon.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
      <GeneratorToolbar
        swatches={swatches}
        mode={mode}
        onGenerate={() => { generate(); setShowHint(false); }}
        onModeChange={(newMode) => { generate(newMode); setShowHint(false); }}
      />
    </div>
  );
}
