export interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

export interface ColorHSL {
  h: number;
  s: number;
  l: number;
}

export interface Swatch {
  id: string;
  hex: string;
  locked: boolean;
  name?: string;
}

export type GeneratorMode =
  | "random"
  | "monochromatic"
  | "analogous"
  | "complementary"
  | "split-complementary"
  | "triadic"
  | "tetradic"
  | "shades";

export interface Palette {
  id: string;
  name: string;
  slug?: string;
  colors: string[] | { name: string; hex: string }[];
  tags?: string[];
  mood?: string;
  category?: string;
}
