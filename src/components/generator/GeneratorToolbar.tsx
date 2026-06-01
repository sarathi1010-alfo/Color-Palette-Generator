"use client";

import { GeneratorMode, Swatch } from "@/types/color";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw, Share2 } from "lucide-react";
import { ExportPanel } from "./ExportPanel";

interface GeneratorToolbarProps {
  swatches: Swatch[];
  mode: GeneratorMode;
  onGenerate: () => void;
  onModeChange: (mode: GeneratorMode) => void;
}

export function GeneratorToolbar({
  swatches,
  mode,
  onGenerate,
  onModeChange,
}: GeneratorToolbarProps) {
  return (
    <div className="h-20 border-t border-border bg-background flex items-center justify-between px-8 z-20">
      <div className="flex items-center space-x-4">
        <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
          Method
        </span>
        <Select
          value={mode}
          onValueChange={(value) => onModeChange(value as GeneratorMode)}
        >
          <SelectTrigger className="w-[180px] bg-surface border-border">
            <SelectValue placeholder="Mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="random">Random</SelectItem>
            <SelectItem value="monochromatic">Monochromatic</SelectItem>
            <SelectItem value="analogous">Analogous</SelectItem>
            <SelectItem value="complementary">Complementary</SelectItem>
            <SelectItem value="split-complementary">Split Comp.</SelectItem>
            <SelectItem value="triadic">Triadic</SelectItem>
            <SelectItem value="tetradic">Tetradic</SelectItem>
            <SelectItem value="shades">Shades</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-4">
        <p className="text-xs font-medium text-text-secondary hidden lg:block">
          Press <span className="px-1.5 py-0.5 rounded border border-border bg-surface font-mono">Space</span> to generate!
        </p>
        <button
          onClick={onGenerate}
          className="flex items-center space-x-2 bg-text-primary text-background px-6 py-2.5 rounded-full font-bold transition-transform active:scale-95"
        >
          <RefreshCw size={18} />
          <span>Generate</span>
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <ExportPanel swatches={swatches} />
        <button className="p-3 rounded-full hover:bg-surface transition-colors" title="Share">
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
}
