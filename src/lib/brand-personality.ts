import chroma from "chroma-js";

const EMOTION_MAP: Record<string, { primaryHueRange: [number, number]; saturation: [number, number]; lightness: [number, number] }> = {
  trust: { primaryHueRange: [200, 240], saturation: [0.4, 0.7], lightness: [0.4, 0.6] }, // Blues
  energy: { primaryHueRange: [0, 40], saturation: [0.7, 1.0], lightness: [0.45, 0.6] }, // Reds/Oranges
  calm: { primaryHueRange: [140, 180], saturation: [0.3, 0.5], lightness: [0.6, 0.8] }, // Soft greens/teals
  luxury: { primaryHueRange: [0, 360], saturation: [0, 0.2], lightness: [0.1, 0.2] }, // Dark/Monochrome
  creative: { primaryHueRange: [270, 320], saturation: [0.6, 0.9], lightness: [0.5, 0.7] }, // Purples/Pinks
};

const INDUSTRY_TYPOGRAPHY_MAP: Record<string, { headings: string; body: string; style: string }> = {
  healthcare: { headings: "Inter, sans-serif", body: "Roboto, sans-serif", style: "clean" },
  startup: { headings: "Plus Jakarta Sans, sans-serif", body: "Inter, sans-serif", style: "modern" },
  fashion: { headings: "Playfair Display, serif", body: "Lato, sans-serif", style: "elegant" },
  gaming: { headings: "Orbitron, sans-serif", body: "Inter, sans-serif", style: "cyberpunk" },
  finance: { headings: "Merriweather, serif", body: "Open Sans, sans-serif", style: "professional" },
};

function getRandomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function generateColorWithinBounds(rules: { primaryHueRange: [number, number]; saturation: [number, number]; lightness: [number, number] }): string {
  const h = getRandomInRange(rules.primaryHueRange[0], rules.primaryHueRange[1]);
  const s = getRandomInRange(rules.saturation[0], rules.saturation[1]);
  const l = getRandomInRange(rules.lightness[0], rules.lightness[1]);
  return chroma.hsl(h, s, l).hex();
}

export function generateTintsAndShades(baseHex: string): string[] {
  // Generate a scale from 50 to 950 (approx 10 colors)
  // Very light, to very dark
  return chroma.scale(['white', baseHex, 'black'])
    .domain([0, 0.5, 1])
    .classes(11) // 0-10, so we can pick 1-9 for 50-900 or similar
    .colors(11)
    .slice(1, 10); // Return 9 colors
}

export function generateNeutrals(baseHex: string): string[] {
  // Create slightly tinted neutrals based on the primary color
  const baseHsl = chroma(baseHex).hsl();
  const hue = baseHsl[0] || 0;
  // Very low saturation
  const neutralBase = chroma.hsl(hue, 0.05, 0.5).hex();
  return generateTintsAndShades(neutralBase);
}

export function generateAnalogousOrComplementary(baseHex: string, audienceVibe: string): string {
  // Simple mapping: if modern/fun use complementary, if professional use analogous
  if (audienceVibe === 'fun' || audienceVibe === 'modern') {
    // Complementary
    const baseHsl = chroma(baseHex).hsl();
    const h = (baseHsl[0] + 180) % 360;
    return chroma.hsl(h, baseHsl[1], baseHsl[2]).hex();
  } else {
    // Analogous
    const baseHsl = chroma(baseHex).hsl();
    const h = (baseHsl[0] + 30) % 360;
    return chroma.hsl(h, baseHsl[1], baseHsl[2]).hex();
  }
}

export interface BrandSystem {
  palette: {
    primary: string;
    secondary: string;
    primaryScale: string[];
    neutralScale: string[];
  };
  typography: { headings: string; body: string; style: string };
  uiVibe: string;
}

export function generateBrandSystem(industry: string, emotion: string, audienceVibe: string): BrandSystem {
  const emotionRules = EMOTION_MAP[emotion] || EMOTION_MAP['trust'];
  const typoRules = INDUSTRY_TYPOGRAPHY_MAP[industry] || INDUSTRY_TYPOGRAPHY_MAP['startup'];

  const primaryHex = generateColorWithinBounds(emotionRules);
  const secondaryHex = generateAnalogousOrComplementary(primaryHex, audienceVibe);

  const primaryScale = generateTintsAndShades(primaryHex);
  const neutralScale = generateNeutrals(primaryHex);

  return {
    palette: {
      primary: primaryHex,
      secondary: secondaryHex,
      primaryScale,
      neutralScale,
    },
    typography: typoRules,
    uiVibe: typoRules.style,
  };
}
