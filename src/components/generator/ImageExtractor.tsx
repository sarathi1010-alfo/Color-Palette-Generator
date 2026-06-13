import React, { useRef, useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

export function ImageExtractor({ onExtract }: { onExtract: (colors: string[]) => void }) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const extractColors = (imgElement: HTMLImageElement) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = imgElement.width;
      canvas.height = imgElement.height;
      ctx.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);

      // Super simple extraction for now (pick 5 random pixels as a fallback logic if needed, but here we just sample across the image)
      const colors: string[] = [];
      const stepX = Math.max(1, Math.floor(imgElement.width / 5));
      const stepY = Math.max(1, Math.floor(imgElement.height / 2));

      for (let i = 0; i < 5; i++) {
        const x = Math.min(stepX * i + Math.floor(stepX/2), imgElement.width - 1);
        const y = stepY;
        const pixelData = ctx.getImageData(x, y, 1, 1).data;
        colors.push(`#${((1 << 24) + (pixelData[0] << 16) + (pixelData[1] << 8) + pixelData[2]).toString(16).slice(1)}`);
      }
      onExtract(colors);
    } catch (e) {
      console.error(e);
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    extractColors(e.currentTarget);
  };

  return (
    <div className="bg-surface border border-border p-6 rounded-2xl space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <ImageIcon className="text-primary" size={20} />
        <h3 className="text-lg font-bold">Extract from Image</h3>
      </div>

      <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:bg-border/30 transition-colors cursor-pointer relative">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center gap-2 text-text-secondary">
          <Upload size={24} />
          <span className="text-sm font-medium">Click or drag image to extract palette</span>
        </div>
      </div>

      {previewUrl && (
        <div className="mt-4 rounded-lg overflow-hidden border border-border max-h-48 flex items-center justify-center bg-background">
          <img
            src={previewUrl}
            alt="Preview"
            crossOrigin="anonymous"
            onLoad={handleImageLoad}
            className="max-h-48 object-contain"
          />
        </div>
      )}
    </div>
  );
}
