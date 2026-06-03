import { Swatch } from "@/types/color";

export function toCssVariables(swatches: Swatch[]): string {
  return `:root {
${swatches
  .map((s, i) => `  --color-${i + 1}: ${s.hex.toUpperCase()}; /* ${s.name} */`)
  .join("\n")}
}`;
}

export function toTailwindConfig(swatches: Swatch[]): string {
  const colors = swatches.reduce((acc, s, i) => {
    const key = i === 0 ? "primary" : i === 1 ? "secondary" : i === 2 ? "accent" : `neutral-${i - 2}`;
    acc[key] = s.hex.toUpperCase();
    return acc;
  }, {} as Record<string, string>);

  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 2)}
    }
  }
}`;
}

export function toScssVariables(swatches: Swatch[]): string {
  return swatches
    .map((s, i) => `$color-${i + 1}: ${s.hex.toUpperCase()}; // ${s.name}`)
    .join("\n");
}

export function toJson(swatches: Swatch[]): string {
  return JSON.stringify(
    swatches.map((s) => ({
      name: s.name,
      hex: s.hex.toUpperCase(),
    })),
    null,
    2
  );
}

export function toFigmaList(swatches: Swatch[]): string {
  return swatches
    .map((s) => `${s.name}: ${s.hex.toUpperCase()}`)
    .join("\n");
}
