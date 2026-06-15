import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <span className="text-2xl font-display font-bold">Palette</span>
          <p className="text-xs text-text-secondary uppercase tracking-widest">
            A product of Alfo Tech Industries
          </p>
        </div>
        <div className="flex space-x-8 text-sm font-bold text-text-secondary">
          <Link href="/palettes" className="hover:text-primary transition-colors">Library</Link>
          <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/alfo.global/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/alfo-tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/orgs/Alfo-Tech-Lab/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-text-secondary">
        &copy; 2026 Alfo Tech Industries. All rights reserved.
      </div>
    </footer>
  );
}
