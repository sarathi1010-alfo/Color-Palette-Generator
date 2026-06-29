import chroma from "chroma-js";

/**
 * Returns a random HEX color.
 */
export function getRandomHex(): string {
  return chroma.random().hex();
}

/**
 * Validates if a string is a valid HEX color.
 */
export function isValidHex(hex: string): boolean {
  return chroma.valid(hex);
}

/**
 * Converts HEX to RGB object.
 */
export function hexToRgb(hex: string) {
  const [r, g, b] = chroma(hex).rgb();
  return { r, g, b };
}

/**
 * Converts HEX to HSL object.
 */
export function hexToHsl(hex: string) {
  const [h, s, l] = chroma(hex).hsl();
  return {
    h: isNaN(h) ? 0 : h,
    s: s,
    l: l,
  };
}

/**
 * Converts HSL to HEX.
 */
export function hslToHex(h: number, s: number, l: number): string {
  return chroma.hsl(h, s, l).hex();
}

/**
 * Gets relative luminance of a color.
 */
export function getLuminance(hex: string): number {
  return chroma(hex).luminance();
}

/**
 * Gets the contrast ratio between two colors.
 */
export function getContrast(color1: string, color2: string): number {
  return chroma.contrast(color1, color2);
}

/**
 * Checks if a color is "dark" or "light" based on luminance.
 */
export function isDark(hex: string): boolean {
  return chroma(hex).luminance() < 0.5;
}

/**
 * Returns a recommended foreground color (black or white) for a given background hex.
 */
export function getContrastColor(hex: string): string {
  return isDark(hex) ? "#ffffff" : "#000000";
}

/**
 * WCAG Grade calculator
 */
export function getWcagGrade(ratio: number): "AAA" | "AA" | "Fail" {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  return "Fail";
}

export function validateHex(hex: string): boolean {
  return /^#([0-9A-F]{3}){1,2}$/i.test(hex) || /^([0-9A-F]{3}){1,2}$/i.test(hex);
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

export function generateTints(hex: string, steps: number): string[] {
    const color = chroma(hex);
    const white = chroma('#ffffff');
    return chroma.scale([color, white]).colors(steps + 1).slice(1);
}

export function generateShades(hex: string, steps: number): string[] {
    const color = chroma(hex);
    const black = chroma('#000000');
    return chroma.scale([color, black]).colors(steps + 1).slice(1);
}
