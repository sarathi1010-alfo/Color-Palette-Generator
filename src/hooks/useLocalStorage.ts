"use client";

import { useEffect, useState, useCallback } from "react";
import { Swatch } from "@/types/color";
import { toast } from "react-hot-toast";

const FAVORITES_KEY = "alfo-favorites-palettes";

export function useLocalStorage() {
  const [favorites, setFavorites] = useState<Swatch[][]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(FAVORITES_KEY);
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse favorites", e);
      }
    }
  }, []);

  const saveFavorite = useCallback((palette: Swatch[]) => {
    setFavorites(prev => {
        // Avoid duplicates
        const alreadyExists = prev.some(p => p.map(s => s.hex).join(',') === palette.map(s => s.hex).join(','));
        if (alreadyExists) {
            toast.error("Already in favorites!");
            return prev;
        }

        const newFavorites = [palette, ...prev];
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        toast.success("Saved to favorites!");
        return newFavorites;
    });
  }, []);

  const removeFavorite = useCallback((index: number) => {
    setFavorites(prev => {
        const newFavorites = prev.filter((_, i) => i !== index);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        toast.success("Removed from favorites");
        return newFavorites;
    });
  }, []);

  return { favorites, saveFavorite, removeFavorite, mounted };
}
