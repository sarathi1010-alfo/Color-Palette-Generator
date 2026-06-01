import chroma from "chroma-js";
import { GeneratorMode } from "@/types/color";

/**
 * Generates a palette based on a mode and a base color.
 */
export function generatePalette(
  baseHex: string,
  mode: GeneratorMode,
  count: number = 5
): string[] {
  if (!chroma.valid(baseHex)) {
    baseHex = chroma.random().hex();
  }

  const base = chroma(baseHex);

  switch (mode) {
    case "monochromatic":
      return chroma
        .scale([base.brighten(2), base, base.darken(2)])
        .colors(count);

    case "analogous":
      return Array.from({ length: count }).map((_, i) => {
        return base.set("hsl.h", (base.get("hsl.h") + (i - Math.floor(count / 2)) * 20 + 360) % 360).hex();
      });

    case "complementary": {
      const comp = base.set("hsl.h", (base.get("hsl.h") + 180) % 360);
      return chroma.scale([base, comp]).mode("lch").colors(count);
    }

    case "split-complementary": {
      const h = base.get("hsl.h");
      const c1 = base.set("hsl.h", (h + 150) % 360);
      const c2 = base.set("hsl.h", (h + 210) % 360);
      return [
        base.brighten(1).hex(),
        base.hex(),
        c1.hex(),
        c2.hex(),
        c2.darken(1).hex(),
      ].slice(0, count);
    }

    case "triadic": {
      const h = base.get("hsl.h");
      const c1 = base.set("hsl.h", (h + 120) % 360);
      const c2 = base.set("hsl.h", (h + 240) % 360);
      // Fill the gaps
      return [
        base.hex(),
        base.mix(c1, 0.5).hex(),
        c1.hex(),
        c2.hex(),
        c2.mix(base, 0.5).hex(),
      ].slice(0, count);
    }

    case "tetradic": {
      const h = base.get("hsl.h");
      const c1 = base.set("hsl.h", (h + 90) % 360);
      const c2 = base.set("hsl.h", (h + 180) % 360);
      const c3 = base.set("hsl.h", (h + 270) % 360);
      return [base.hex(), c1.hex(), c2.hex(), c3.hex(), base.brighten(1).hex()].slice(0, count);
    }

    case "shades":
      return chroma.scale([base.brighten(2.5), base.darken(2.5)]).colors(count);

    case "random":
    default:
      return Array.from({ length: count }).map(() => chroma.random().hex());
  }
}
