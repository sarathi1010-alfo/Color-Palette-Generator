"use client";

import { useState, useRef, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Upload, ImageIcon, RefreshCw, Palette, ExternalLink } from "lucide-react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { encodePalette } from "@/lib/url/paletteEncoder";
import { getContrastColor } from "@/lib/color/conversions";
import { copyToClipboard } from "@/lib/utils";

export default function ImageExtractorPage() {
  const [image, setImage] = useState<string | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const extractColors = useCallback((imgElement: HTMLImageElement) => {
    setIsExtracting(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;
    ctx.drawImage(imgElement, 0, 0);

    try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const colorCounts: Record<string, number> = {};

        for (let i = 0; i < imageData.length; i += 4 * 100) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
        colorCounts[hex] = (colorCounts[hex] || 0) + 1;
        }

        const sortedColors = Object.entries(colorCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map((entry) => entry[0]);

        setColors(sortedColors);
        toast.success("Colors extracted!");
    } catch (e) {
        toast.error("Failed to extract colors. Try another image.");
    } finally {
        setIsExtracting(false);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const url = event.target?.result as string;
      setImage(url);
      const img = new Image();
      img.onload = () => extractColors(img);
      img.src = url;
    };
    reader.readAsDataURL(file);
  };

  const encodedPalette = colors.length === 5 ? encodePalette(colors) : "";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Image Extractor</h1>
          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
            Upload an image and instantly extract a balanced color palette.
            All processing happens client-side for maximum privacy and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
                <div
                    className="relative aspect-video rounded-3xl border-2 border-dashed border-border bg-surface flex flex-col items-center justify-center p-8 overflow-hidden group hover:border-primary transition-colors cursor-pointer"
                    onClick={() => document.getElementById('image-upload')?.click()}
                >
                    {image ? (
                        <img src={image} alt="Uploaded" className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                        <div className="flex flex-col items-center space-y-4 text-text-secondary group-hover:text-primary transition-colors">
                            <Upload size={48} />
                            <p className="font-bold">Click or drag image to upload</p>
                            <p className="text-xs">Supports JPG, PNG, WEBP</p>
                        </div>
                    )}
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </div>

                {image && (
                     <button
                        onClick={() => document.getElementById('image-upload')?.click()}
                        className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-surface border border-border font-bold hover:bg-border transition-colors"
                    >
                        <RefreshCw size={18} />
                        <span>Upload Different Image</span>
                    </button>
                )}
            </div>

            <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-surface border border-border min-h-[300px] flex flex-col justify-between">
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary">Extracted Palette</h3>

                        <div className="flex h-32 w-full rounded-2xl overflow-hidden shadow-xl border border-border">
                            {isExtracting ? (
                                <div className="flex-1 flex items-center justify-center animate-pulse bg-border">
                                    <ImageIcon size={32} className="text-text-secondary" />
                                </div>
                            ) : colors.length > 0 ? (
                                colors.map((color, i) => (
                                    <div key={i} className="flex-1" style={{ backgroundColor: color }} />
                                ))
                            ) : (
                                <div className="flex-1 flex items-center justify-center text-text-secondary bg-background/50 italic text-sm">
                                    Upload an image to see results
                                </div>
                            )}
                        </div>

                        {colors.length > 0 && (
                            <div className="grid grid-cols-1 gap-2">
                                {colors.map((color, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-lg border border-border" style={{ backgroundColor: color }} />
                                            <span className="font-mono font-bold text-sm">{color.toUpperCase()}</span>
                                        </div>
                                        <button
                                            onClick={() => { copyToClipboard(color); toast.success("HEX copied!"); }}
                                            className="p-2 hover:bg-surface rounded-lg transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {colors.length === 5 && (
                        <Link
                            href={`/generator?p=${encodedPalette}`}
                            className="w-full flex items-center justify-center space-x-2 py-4 mt-8 rounded-2xl bg-text-primary text-background font-bold hover:scale-[0.98] transition-transform shadow-2xl"
                        >
                            <Palette size={18} />
                            <span>Use as Palette</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
      </main>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
