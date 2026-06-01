import chroma from "chroma-js";
import colorNames from "@/data/color-names.json";

interface ColorName {
  name: string;
  hex: string;
}

/**
 * Finds the nearest named color for a given hex code.
 */
export function getColorName(hex: string): string {
  if (!chroma.valid(hex)) return "Unknown";

  const target = chroma(hex);
  let minDistance = Infinity;
  let closestName = "Unknown";

  for (const entry of colorNames as ColorName[]) {
    const distance = chroma.distance(target, entry.hex, "rgb");
    if (distance < minDistance) {
      minDistance = distance;
      closestName = entry.name;
    }
    if (distance === 0) break;
  }

  return closestName;
}
