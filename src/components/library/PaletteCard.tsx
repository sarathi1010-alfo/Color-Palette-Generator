"use client";

import Link from "next/link";
import { Palette } from "@/types/color";
import { sanitizeSlug } from "@/lib/url/utils";

interface PaletteCardProps {
  palette: Palette;
}

export function PaletteCard({ palette }: PaletteCardProps) {
  const categorySlug = sanitizeSlug(palette.category || 'all');
  const idSlug = sanitizeSlug(palette.slug || palette.id);

  return (
    <Link
      href={`/palettes/${categorySlug}/${idSlug}`}
      className="group bg-surface rounded-xl border border-border overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-sm hover:shadow-xl"
    >
      <div className="flex h-32 w-full" aria-label={`${palette.name} color swatches`}>
        {palette.colors.map((color, i) => {
          const hex = typeof color === 'string' ? color : color.hex;
          return (
            <div
              key={i}
              className="flex-1 h-full"
              style={{ backgroundColor: hex }}
              aria-label={`Color swatch ${hex}`}
              title={hex}
            />
          );
        })}
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
