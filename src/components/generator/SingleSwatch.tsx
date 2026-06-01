"use client";

import { Swatch } from "@/types/color";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Lock, Unlock, Copy, GripVertical } from "lucide-react";
import { getContrastColor } from "@/lib/color/conversions";
import { cn, copyToClipboard } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { useRef } from "react";
import { motion } from "framer-motion";

interface SingleSwatchProps {
  swatch: Swatch;
  onToggleLock: (id: string) => void;
  onUpdateColor: (id: string, hex: string) => void;
}

export function SingleSwatch({ swatch, onToggleLock, onUpdateColor }: SingleSwatchProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: swatch.id });

  const colorInputRef = useRef<HTMLInputElement>(null);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: swatch.hex,
    zIndex: isDragging ? 10 : 1,
  };

  const contrastColor = getContrastColor(swatch.hex);

  const handleCopy = () => {
    copyToClipboard(swatch.hex.toUpperCase());
    toast.success(`Copied ${swatch.hex.toUpperCase()}`, {
      style: {
        background: swatch.hex,
        color: contrastColor,
        fontWeight: "bold",
      },
    });
  };

  return (
    <motion.div
      ref={setNodeRef}
      layout
      initial={{ scaleY: 0.8, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      style={style}
      className={cn(
        "relative flex flex-1 flex-row md:flex-col items-center justify-between md:justify-end p-6 md:pb-12 transition-colors duration-500 group min-w-[120px]",
        isDragging && "opacity-50 shadow-2xl scale-105 z-50"
      )}
    >
      {/* Top Overlay for Dragging */}
      <div
        {...attributes}
        {...listeners}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        onDoubleClick={() => colorInputRef.current?.click()}
      />

      <div className="z-10 flex flex-row md:flex-col items-center justify-between w-full md:w-auto md:space-y-6">
        <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-4 md:opacity-0 group-hover:opacity-100 transition-opacity">
           <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onToggleLock(swatch.id)}
            className="p-3 rounded-full hover:bg-white/10 transition-colors"
            style={{ color: contrastColor }}
            aria-label={swatch.locked ? "Unlock" : "Lock"}
          >
            {swatch.locked ? (
              <Lock size={24} className="lucide-lock" />
            ) : (
              <Unlock size={24} className="lucide-unlock" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCopy}
            className="p-3 rounded-full hover:bg-white/10 transition-colors"
            style={{ color: contrastColor }}
            aria-label="Copy HEX"
          >
            <Copy size={24} />
          </motion.button>

          <div
             className="p-3 cursor-grab"
             style={{ color: contrastColor }}
             aria-label="Drag to reorder"
          >
            <GripVertical size={24} />
          </div>
        </div>

        <div className="text-right md:text-center">
          <input
            ref={colorInputRef}
            type="color"
            value={swatch.hex}
            onChange={(e) => onUpdateColor(swatch.id, e.target.value)}
            className="sr-only"
          />
          <motion.h3
            layout
            className="text-2xl font-mono font-bold uppercase cursor-pointer"
            style={{ color: contrastColor }}
            onClick={handleCopy}
            onDoubleClick={() => colorInputRef.current?.click()}
          >
            {swatch.hex.replace("#", "")}
          </motion.h3>
          <p
            className="text-sm font-medium opacity-60 mt-1"
            style={{ color: contrastColor }}
          >
            {swatch.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
