"use client";

import { Download } from "lucide-react";
import { toast } from "react-hot-toast";

interface DownloadButtonProps {
  colors: string[];
  name: string;
}

export function DownloadButton({ colors, name }: DownloadButtonProps) {
  const downloadPng = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 1200;
    const height = 630;
    canvas.width = width;
    canvas.height = height;

    // Draw colors
    const swatchWidth = width / colors.length;
    colors.forEach((color, i) => {
      ctx.fillStyle = color;
      ctx.fillRect(i * swatchWidth, 0, swatchWidth, height);

      // Draw hex code
      ctx.fillStyle = "white";
      ctx.font = "bold 32px monospace";
      ctx.textAlign = "center";
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowBlur = 10;
      ctx.fillText(color.toUpperCase(), i * swatchWidth + swatchWidth / 2, height - 60);
    });

    // Brand overlay
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    const badgeWidth = 250;
    const badgeHeight = 60;
    ctx.roundRect?.(40, 40, badgeWidth, badgeHeight, 30);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("ColorForge Palette", 60, 78);

    const link = document.createElement("a");
    link.download = `${name.toLowerCase().replace(/\s+/g, "-")}-palette.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast.success("Downloading PNG...");
  };

  return (
    <button
        onClick={downloadPng}
        className="w-full flex items-center justify-center space-x-2 bg-background border border-border rounded-2xl font-bold text-sm hover:bg-border transition-colors py-3"
    >
        <Download size={18} />
        <span>PNG</span>
    </button>
  );
}
