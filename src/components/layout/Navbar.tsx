"use client";

import Link from "next/link";
import { Palette, Library, Wrench, Info } from "lucide-react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="h-16 border-b border-border bg-background flex items-center justify-between px-6 z-20">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2 group">
          <Palette className="text-primary group-hover:scale-110 transition-transform" size={24} />
          <span className="text-2xl font-display font-bold tracking-tight">
            Palette
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/generator" className="flex items-center space-x-1 hover:text-primary transition-colors">
            <Palette size={16} />
            <span>Generator</span>
          </Link>
          <Link href="/palettes" className="flex items-center space-x-1 hover:text-primary transition-colors">
            <Library size={16} />
            <span>Palettes</span>
          </Link>
          <Link href="/colors" className="flex items-center space-x-1 hover:text-primary transition-colors">
            <Palette size={16} />
            <span>Colors</span>
          </Link>
          <Link href="/tools" className="flex items-center space-x-1 hover:text-primary transition-colors">
            <Wrench size={16} />
            <span>Tools</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-surface transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
        <Link href="/about" className="p-2 rounded-full hover:bg-surface transition-colors">
          <Info size={20} />
        </Link>
      </div>
    </nav>
  );
}
