import { PaletteCard } from "./PaletteCard";
import { Palette } from "@/types/color";

interface PaletteGridProps {
  palettes: Palette[];
}

export function PaletteGrid({ palettes }: PaletteGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {palettes.map((palette) => (
        <PaletteCard key={palette.id} palette={palette} />
      ))}
    </div>
  );
}
