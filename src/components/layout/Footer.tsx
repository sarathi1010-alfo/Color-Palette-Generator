"use client";

import Link from "next/link";
import { Globe, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <Link href="/" className="text-2xl font-display font-bold">ALFO</Link>
          <p className="text-xs text-text-secondary uppercase tracking-widest">
            A product of Alfo Tech Industries
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold text-text-secondary">
          <Link href="/palettes" className="hover:text-primary transition-colors">Library</Link>
          <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
        </div>

        <div className="flex space-x-4">
          <div className="p-2 rounded-full border border-border text-text-secondary">
            <Globe size={18} />
          </div>
          <div className="p-2 rounded-full border border-border text-text-secondary">
            <Heart size={18} />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border/50 text-center">
        <p className="text-xs text-text-secondary">
          © {new Date().getFullYear()} Alfo Tech Industries. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
