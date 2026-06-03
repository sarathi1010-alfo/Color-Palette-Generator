"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-display font-bold tracking-tight">
                ALFO
              </span>
            </Link>
            <p className="text-text-secondary max-w-sm">
              The fastest, most visual color palette tool on the web.
              Build beautiful colors instantly.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase text-xs tracking-widest text-text-secondary">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/generator" className="text-sm hover:text-primary transition-colors">Generator</Link></li>
              <li><Link href="/palettes" className="text-sm hover:text-primary transition-colors">Library</Link></li>
              <li><Link href="/tools" className="text-sm hover:text-primary transition-colors">Tools</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase text-xs tracking-widest text-text-secondary">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            © {currentYear} Alfo Tech Industries. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-text-secondary">
             <span>No copyrighted content</span>
             <span>Original useful content</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
