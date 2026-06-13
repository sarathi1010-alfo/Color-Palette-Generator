"use client";

import Link from "next/link";
import { Palette } from "@/types/color";

interface PaletteCardProps {
  palette: Palette;
}

export function PaletteCard({ palette }: PaletteCardProps) {
  return (
    <Link
      href={`/palettes/${palette.category || 'all'}/${palette.slug || palette.id}`}
      className="group bg-surface rounded-xl border border-border overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-sm hover:shadow-xl"
    >
      <div className="flex h-32 w-full">
        {palette.colors.map((color, i) => (
          <div
            key={i}
            className="flex-1 h-full"
            style={{ backgroundColor: typeof color === 'string' ? color : color.hex }}
          />
        ))}
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">
            {palette.name}
          </h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {palette.tags?.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-wider text-text-secondary">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
