"use client";

import { useState } from "react";
import { Check, Copy, Share2, Twitter, Layout, Globe, Smartphone, Download } from "lucide-react";
import { cn, copyToClipboard } from "@/lib/utils";
import { toast } from "react-hot-toast";

interface PaletteActionsProps {
  colors: string[];
  name: string;
}

export function PaletteActions({ colors, name }: PaletteActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    copyToClipboard(window.location.href);
    setCopied(true);
    toast.success("Link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    const text = `Check out this beautiful ${name} color palette! 🎨`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleCopyUrl}
          className="flex items-center justify-center space-x-2 py-3 px-4 bg-surface border border-border rounded-2xl font-bold text-sm hover:bg-border transition-colors"
        >
          {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
          <span>Copy URL</span>
        </button>
        <button
          onClick={shareTwitter}
          className="flex items-center justify-center space-x-2 py-3 px-4 bg-surface border border-border rounded-2xl font-bold text-sm hover:bg-border transition-colors"
        >
          <Twitter size={18} className="text-[#1DA1F2]" />
          <span>Twitter</span>
        </button>
      </div>
    </div>
  );
}
