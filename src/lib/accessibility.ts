export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function getLuminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function calculateContrastRatio(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  if (!rgb1 || !rgb2) return 1;

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

export function evaluateScore(ratio: number): string {
  if (ratio >= 7) return "Excellent";
  if (ratio >= 4.5) return "Pass";
  return "Fail";
}

export interface AccessibilityResult {
  ratio: string;
  AA_Normal: boolean;
  AA_Large: boolean;
  AAA_Normal: boolean;
  AAA_Large: boolean;
  score: string;
}

export function checkAccessibility(backgroundColor: string, textColor: string): AccessibilityResult {
  const ratio = calculateContrastRatio(backgroundColor, textColor);
  return {
    ratio: ratio.toFixed(2),
    AA_Normal: ratio >= 4.5,
    AA_Large: ratio >= 3.0,
    AAA_Normal: ratio >= 7.0,
    AAA_Large: ratio >= 4.5,
    score: evaluateScore(ratio),
  };
}
