import chroma from "chroma-js";
import * as fs from "fs";
import * as path from "path";

interface Palette {
  id: string;
  name: string;
  colors: string[];
  tags: string[];
  mood: string;
  category: string;
}

const MOODS = ["calm", "vibrant", "energetic", "professional", "nostalgic", "minimal", "earthy", "warm", "soft", "dark", "pastel"];
const CATEGORIES = ["nature", "tech", "brand", "fashion", "retro", "modern", "minimal", "interior", "corporate"];

function generateRandomPalette(id: number): Palette {
  const base = chroma.random();
  const modes: ("monochromatic" | "analogous" | "complementary" | "triadic" | "tetradic")[] =
    ["monochromatic", "analogous", "complementary", "triadic", "tetradic"];
  const mode = modes[Math.floor(Math.random() * modes.length)];

  let colors: string[] = [];

  if (mode === "monochromatic") {
    colors = chroma.scale([base.brighten(2), base, base.darken(2)]).colors(5);
  } else if (mode === "analogous") {
    colors = Array.from({ length: 5 }).map((_, i) => base.set("hsl.h", (base.get("hsl.h") + (i - 2) * 20 + 360) % 360).hex());
  } else if (mode === "complementary") {
    colors = chroma.scale([base, base.set("hsl.h", (base.get("hsl.h") + 180) % 360)]).mode("lch").colors(5);
  } else if (mode === "triadic") {
    const h = base.get("hsl.h");
    colors = [base.hex(), base.set("hsl.h", (h + 120) % 360).hex(), base.set("hsl.h", (h + 240) % 360).hex(), base.brighten(1).hex(), base.darken(1).hex()];
  } else {
    const h = base.get("hsl.h");
    colors = [base.hex(), base.set("hsl.h", (h + 90) % 360).hex(), base.set("hsl.h", (h + 180) % 360).hex(), base.set("hsl.h", (h + 270) % 360).hex(), base.brighten(1).hex()];
  }

  const mood = MOODS[Math.floor(Math.random() * MOODS.length)];
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

  return {
    id: `palette-${id}`,
    name: `${mood.charAt(0).toUpperCase() + mood.slice(1)} ${category.charAt(0).toUpperCase() + category.slice(1)} ${id}`,
    colors,
    tags: [mood, category, mode],
    mood,
    category
  };
}

const palettes: Palette[] = [];
for (let i = 1; i <= 500; i++) {
  palettes.push(generateRandomPalette(i));
}

const dataDir = path.join(process.cwd(), "src/data");
fs.writeFileSync(path.join(dataDir, "palettes.json"), JSON.stringify(palettes, null, 2));

console.log(`Generated ${palettes.length} palettes.`);
