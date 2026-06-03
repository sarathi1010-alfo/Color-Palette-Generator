"use client";

import { useState } from "react";
import { Swatch } from "@/types/color";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, Copy, Check } from "lucide-react";
import { toCssVariables, toTailwindConfig, toScssVariables, toJson, toFigmaList } from "@/lib/export/formats";
import { cn, copyToClipboard } from "@/lib/utils";
import { toast } from "react-hot-toast";

interface ExportPanelProps {
  swatches: Swatch[];
}

type ExportFormat = "css" | "tailwind" | "scss" | "json" | "figma";

export function ExportPanel({ swatches }: ExportPanelProps) {
  const [format, setFormat] = useState<ExportFormat>("css");
  const [copied, setCopied] = useState(false);

  const getExportContent = () => {
    switch (format) {
      case "css":
        return toCssVariables(swatches);
      case "tailwind":
        return toTailwindConfig(swatches);
      case "scss":
        return toScssVariables(swatches);
      case "json":
        return toJson(swatches);
      case "figma":
        return toFigmaList(swatches);
    }
  };

  const handleCopy = () => {
    copyToClipboard(getExportContent());
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 rounded-full hover:bg-surface transition-colors" title="Export">
          <Download size={20} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Export Palette</DialogTitle>
        </DialogHeader>

        <div className="flex space-x-2 border-b border-border pb-4 overflow-x-auto scrollbar-hide">
          {(["css", "tailwind", "figma", "scss", "json"] as ExportFormat[]).map((f) => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              className={cn(
                "px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-md transition-colors",
                format === f ? "bg-text-primary text-background" : "hover:bg-surface text-text-secondary"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative mt-4">
          <pre className="p-4 rounded-lg bg-surface border border-border overflow-auto max-h-[400px] font-mono text-sm leading-relaxed">
            <code>{getExportContent()}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 p-2 rounded-md bg-background border border-border hover:bg-surface transition-colors"
          >
            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
