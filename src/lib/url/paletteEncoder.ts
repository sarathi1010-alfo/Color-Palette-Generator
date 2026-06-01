/**
 * Encodes an array of HEX colors into a URL-friendly string.
 */
export function encodePalette(colors: string[]): string {
  return colors.map((c) => c.replace("#", "")).join("-");
}

/**
 * Decodes a palette string from the URL into an array of HEX colors.
 */
export function decodePalette(encoded: string): string[] | null {
  if (!encoded) return null;
  const colors = encoded.split("-").map((c) => `#${c}`);
  const allValid = colors.every((c) => /^#[0-9A-F]{6}$/i.test(c));
  return allValid ? colors : null;
}
