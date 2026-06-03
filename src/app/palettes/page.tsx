"use client";

import { useState, useMemo, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PaletteGrid } from "@/components/library/PaletteGrid";
import palettesData from "@/data/palettes.json";
import { Search, Filter, Heart, Trash2, ArrowRight, TrendingUp, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LibraryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"trending" | "newest">("trending");
  const { favorites, removeFavorite, mounted } = useLocalStorage();
  const [recentPalettes, setRecentPalettes] = useState<any[]>([]);

  useEffect(() => {
    if (mounted) {
        const stored = localStorage.getItem("recent-palettes");
        if (stored) setRecentPalettes(JSON.parse(stored).slice(0, 4));
    }
  }, [mounted]);

  const categories = useMemo(() => {
    const cats = new Set(palettesData.map(p => p.category.charAt(0).toUpperCase() + p.category.slice(1)));
    return ["All", ...Array.from(cats).sort()];
  }, []);

  const filteredPalettes = useMemo(() => {
    const filtered = palettesData.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                           p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = activeCategory === "All" || p.category.toLowerCase() === activeCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });

    if (sortBy === "newest") {
        return [...filtered].reverse();
    }

    return filtered; // Default trending (order in JSON)
  }, [search, activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 space-y-24">
        {/* Recent & Favorites Section */}
        {mounted && (favorites.length > 0 || recentPalettes.length > 0) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {favorites.length > 0 && (
                    <section className="space-y-8">
                        <div className="flex items-center space-x-3 border-b border-border pb-4">
                            <Heart size={20} className="text-red-500 fill-current" />
                            <h2 className="text-2xl font-display font-bold">Favorites</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <AnimatePresence mode="popLayout">
                                {favorites.slice(0, 4).map((fav, idx) => (
                                    <motion.div
                                        layout
                                        key={fav.map(s => s.hex).join('-')}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="group bg-surface rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                                    >
                                        <div className="flex h-16">
                                            {fav.map((s, i) => (
                                                <div key={i} className="flex-1" style={{ backgroundColor: s.hex }} />
                                            ))}
                                        </div>
                                        <div className="p-3 flex items-center justify-between">
                                            <Link
                                                href={`/generator?p=${fav.map(s => s.hex.replace('#', '')).join('-')}`}
                                                className="flex items-center space-x-2 text-xs font-bold hover:text-primary transition-colors"
                                            >
                                                <span>Open</span>
                                                <ArrowRight size={12} />
                                            </Link>
                                            <button
                                                onClick={() => removeFavorite(idx)}
                                                className="p-1.5 rounded-lg hover:bg-red-500/10 text-text-secondary hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </section>
                )}

                {recentPalettes.length > 0 && (
                    <section className="space-y-8">
                        <div className="flex items-center space-x-3 border-b border-border pb-4">
                            <Clock size={20} className="text-text-secondary" />
                            <h2 className="text-2xl font-display font-bold">Recently Viewed</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {recentPalettes.map((p, idx) => (
                                <Link
                                    key={`${p.id}-${idx}`}
                                    href={`/palettes/${p.id}`}
                                    className="group bg-surface rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <div className="flex h-16">
                                        {p.colors.map((c: string, i: number) => (
                                            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                                        ))}
                                    </div>
                                    <div className="p-3 flex items-center justify-between">
                                        <span className="text-xs font-bold truncate pr-2">{p.name}</span>
                                        <ArrowRight size={12} className="text-text-secondary group-hover:text-text-primary transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
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

          {/* Filters & Sorting */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-6">
              <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
                <div className="flex items-center space-x-2 mr-4 text-text-secondary">
                   <Filter size={18} />
                   <span className="text-sm font-bold uppercase tracking-wider">Categories</span>
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

              <div className="flex bg-surface p-1 rounded-xl border border-border self-start md:self-auto">
                    <button
                        onClick={() => setSortBy("trending")}
                        className={cn(
                            "flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all",
                            sortBy === "trending" ? "bg-background shadow-md text-text-primary" : "text-text-secondary"
                        )}
                    >
                        <TrendingUp size={14} />
                        <span>Trending</span>
                    </button>
                    <button
                        onClick={() => setSortBy("newest")}
                        className={cn(
                            "flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all",
                            sortBy === "newest" ? "bg-background shadow-md text-text-primary" : "text-text-secondary"
                        )}
                    >
                        <Clock size={14} />
                        <span>Newest</span>
                    </button>
              </div>
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
