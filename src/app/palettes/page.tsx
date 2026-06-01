"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PaletteGrid } from "@/components/library/PaletteGrid";
import palettesData from "@/data/palettes.json";
import { Search, Filter, Heart, Trash2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LibraryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { favorites, removeFavorite, mounted } = useLocalStorage();

  const categories = useMemo(() => {
    const cats = new Set(palettesData.map(p => p.category.charAt(0).toUpperCase() + p.category.slice(1)));
    return ["All", ...Array.from(cats).sort()];
  }, []);

  const filteredPalettes = useMemo(() => {
    return palettesData.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                           p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = activeCategory === "All" || p.category.toLowerCase() === activeCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-20">
        {/* Favorites Section */}
        {mounted && favorites.length > 0 && (
            <section className="space-y-8">
                <div className="flex items-center space-x-3 border-b border-border pb-4">
                    <Heart size={24} className="text-red-500 fill-current" />
                    <h2 className="text-3xl font-display font-bold">Your Saved Collection</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {favorites.map((fav, idx) => (
                            <motion.div
                                layout
                                key={fav.map(s => s.hex).join('-')}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group bg-surface rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="flex h-24">
                                    {fav.map((s, i) => (
                                        <div key={i} className="flex-1" style={{ backgroundColor: s.hex }} />
                                    ))}
                                </div>
                                <div className="p-4 flex items-center justify-between">
                                    <Link
                                        href={`/generator?p=${fav.map(s => s.hex.replace('#', '')).join('-')}`}
                                        className="flex items-center space-x-2 text-sm font-bold hover:text-primary transition-colors"
                                    >
                                        <span>Open</span>
                                        <ArrowRight size={14} />
                                    </Link>
                                    <button
                                        onClick={() => removeFavorite(idx)}
                                        className="p-2 rounded-lg hover:bg-red-500/10 text-text-secondary hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>
        )}

        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-display font-bold">Public Library</h1>
              <p className="text-text-secondary max-w-md">
                Browse through over {palettesData.length} curated color palettes for your next project.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input
                type="text"
                placeholder="Search palettes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-hide border-b border-border">
            <div className="flex items-center space-x-2 mr-4 text-text-secondary">
               <Filter size={18} />
               <span className="text-sm font-bold uppercase tracking-wider">Filters</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                  activeCategory === cat
                    ? "bg-text-primary text-background"
                    : "bg-surface border border-border text-text-secondary hover:border-text-secondary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredPalettes.length > 0 ? (
            <PaletteGrid palettes={filteredPalettes} />
          ) : (
            <div className="py-20 text-center space-y-4">
               <div className="text-4xl">🏜️</div>
               <h3 className="text-xl font-bold">No palettes found</h3>
               <p className="text-text-secondary">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
