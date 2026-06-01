"use client";

import { useEffect, useReducer, useCallback, useState } from "react";
import { Swatch, GeneratorMode } from "@/types/color";
import { generatePalette } from "@/lib/color/generators";
import { getColorName } from "@/lib/color/nameResolver";
import { getRandomHex } from "@/lib/color/conversions";

type Action =
  | { type: "GENERATE_PALETTE"; mode?: GeneratorMode }
  | { type: "TOGGLE_LOCK"; id: string }
  | { type: "UPDATE_COLOR"; id: string; hex: string }
  | { type: "REORDER"; swatches: Swatch[] }
  | { type: "SET_PALETTE"; colors: string[] };

interface State {
  swatches: Swatch[];
  mode: GeneratorMode;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "GENERATE_PALETTE": {
      const mode = action.mode || state.mode;
      const baseSwatch = state.swatches.find((s) => s.locked) || { hex: getRandomHex() };
      const newColors = generatePalette(baseSwatch.hex, mode, state.swatches.length);

      const newSwatches = state.swatches.map((swatch, index) => {
        if (swatch.locked) return swatch;
        const newHex = newColors[index];
        return {
          ...swatch,
          hex: newHex,
          name: getColorName(newHex),
        };
      });

      return { ...state, swatches: newSwatches, mode };
    }
    case "TOGGLE_LOCK":
      return {
        ...state,
        swatches: state.swatches.map((s) =>
          s.id === action.id ? { ...s, locked: !s.locked } : s
        ),
      };
    case "UPDATE_COLOR":
      return {
        ...state,
        swatches: state.swatches.map((s) =>
          s.id === action.id ? { ...s, hex: action.hex, name: getColorName(action.hex) } : s
        ),
      };
    case "REORDER":
      return { ...state, swatches: action.swatches };
    case "SET_PALETTE":
      return {
        ...state,
        swatches: action.colors.map((hex, i) => ({
          id: `swatch-${i}-${Date.now()}`,
          hex,
          locked: false,
          name: getColorName(hex),
        })),
      };
    default:
      return state;
  }
}

export function usePalette(initialColors?: string[]) {
  const [mounted, setMounted] = useState(false);

  const initialState: State = {
    swatches: initialColors
      ? initialColors.map((hex, i) => ({
          id: `swatch-${i}`,
          hex,
          locked: false,
          name: getColorName(hex),
        }))
      : Array.from({ length: 5 }).map((_, i) => {
          const hex = "#FFFFFF";
          return {
            id: `swatch-${i}`,
            hex,
            locked: false,
            name: "White",
          };
        }),
    mode: "random",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setMounted(true);
    if (!initialColors) {
      dispatch({ type: "GENERATE_PALETTE" });
    }
  }, [initialColors]);

  const generate = useCallback((mode?: GeneratorMode) => {
    dispatch({ type: "GENERATE_PALETTE", mode });
  }, []);

  const toggleLock = (id: string) => dispatch({ type: "TOGGLE_LOCK", id });
  const updateColor = (id: string, hex: string) => dispatch({ type: "UPDATE_COLOR", id, hex });
  const reorder = (swatches: Swatch[]) => dispatch({ type: "REORDER", swatches });
  const setPalette = (colors: string[]) => dispatch({ type: "SET_PALETTE", colors });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        generate();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [generate]);

  return {
    swatches: state.swatches,
    mode: state.mode,
    mounted,
    generate,
    toggleLock,
    updateColor,
    reorder,
    setPalette,
  };
}
