"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Upload, ImageIcon } from "lucide-react";
import { PaletteGrid } from "@/components/library/PaletteGrid";
import { rgbToHex } from "@/lib/color/conversions";

export default function ImageExtractorClientPage({ faqData }: { faqData?: any }) {
  const [image, setImage] = useState<string | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        setImage(event.target?.result as string);
        extractColors(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const extractColors = (imgSrc: string) => {
      setIsProcessing(true);
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) return;

          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

          const colorMap = new Map<string, number>();
          const step = Math.ceil(imageData.length / (4 * 1000));

          for (let i = 0; i < imageData.length; i += 4 * step) {
              const r = imageData[i];
              const g = imageData[i + 1];
              const b = imageData[i + 2];

              const hex = rgbToHex(r, g, b);
              colorMap.set(hex, (colorMap.get(hex) || 0) + 1);
          }

          const sortedColors = Array.from(colorMap.entries())
              .sort((a, b) => b[1] - a[1])
              .map(entry => entry[0])
              .slice(0, 5);

          setColors(sortedColors);
          setIsProcessing(false);
      };
      img.src = imgSrc;
  };

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">Image Color Extractor</h1>
          <p className="text-text-secondary max-w-2xl">
            Upload any image to instantly extract its dominant colors and create a cohesive palette.
          </p>
        </div>

        <div className="space-y-12">
            <div
                className="border-2 border-dashed border-border rounded-3xl p-12 flex flex-col items-center justify-center space-y-6 text-center hover:bg-surface/50 transition-colors cursor-pointer min-h-[400px] relative overflow-hidden"
                onClick={() => fileInputRef.current?.click()}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                />

                {image ? (
                    <img src={image} alt="Uploaded preview" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                ) : null}

                <div className="relative z-10 flex flex-col items-center space-y-4 bg-background/80 p-8 rounded-2xl backdrop-blur-sm border border-border">
                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Upload size={32} />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold">Upload an Image</h3>
                        <p className="text-sm text-text-secondary">PNG, JPG, WebP up to 10MB</p>
                    </div>
                    <button className="px-6 py-3 bg-surface border border-border rounded-xl font-bold hover:bg-border transition-colors">
                        Browse Files
                    </button>
                </div>
            </div>

            {isProcessing && (
                <div className="text-center text-text-secondary animate-pulse">
                    Analyzing pixels...
                </div>
            )}

            {colors.length > 0 && !isProcessing && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-display font-bold flex items-center space-x-2">
                        <ImageIcon className="text-primary" />
                        <span>Extracted Palette</span>
                    </h3>
                    <PaletteGrid
                        palettes={[{
                            id: "extracted",
                            name: "Extracted from Image",
                            colors: colors,
                            category: "custom",
                            mood: "custom",
                            tags: ["extracted"]
                        }]}
                    />
                </div>
            )}
        </div>

        {faqData && (
          <div className="mt-20 text-left w-full">
            <h2 className="text-3xl font-display font-bold text-text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqData.map((faq: any, index: number) => (
                <div key={index} className="bg-surface border border-border p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-text-primary mb-3">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
