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
    acc[`color-${i + 1}`] = s.hex.toUpperCase();
    return acc;
  }, {} as Record<string, string>);

  return `// tailwind.config.js
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

export function toFigmaTokens(swatches: Swatch[]): string {
  const tokens: Record<string, any> = {
    global: {
      color: {}
    }
  };

  swatches.forEach((s, i) => {
    tokens.global.color[`color-${i + 1}`] = {
      value: s.hex.toUpperCase(),
      type: "color",
      description: s.name
    };
  });

  return JSON.stringify(tokens, null, 2);
}
