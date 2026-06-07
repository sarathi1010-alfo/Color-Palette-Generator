"use client";

import Link from "next/link";
import { Globe, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="space-y-4 text-center md:text-left flex-1">
          <Link href="/">
            <span className="text-2xl font-display font-bold">ALFO</span>
          </Link>
          <p className="text-xs text-text-secondary uppercase tracking-widest">
            A product of Alfo Tech Industries
          </p>
          <p className="text-xs text-text-secondary mt-4">
            © {new Date().getFullYear()} alfo.online — All rights reserved
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-start gap-12">
            <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-text-primary">Tools Hub</h4>
                <div className="flex flex-col space-y-2 text-sm text-text-secondary">
                    <Link href="/generator" className="hover:text-primary transition-colors">Generator</Link>
                    <Link href="/tools/gradient-generator" className="hover:text-primary transition-colors">Gradients</Link>
                    <Link href="/tools/contrast-checker" className="hover:text-primary transition-colors">Contrast Checker</Link>
                    <Link href="/tools/tints-shades" className="hover:text-primary transition-colors">Tints & Shades</Link>
                    <Link href="/tools/image-extractor" className="hover:text-primary transition-colors">Image Extractor</Link>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-text-primary">Legal</h4>
                <div className="flex flex-col space-y-2 text-sm text-text-secondary">
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-text-primary">Social</h4>
                <div className="flex flex-col space-y-2 text-sm text-text-secondary">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}
