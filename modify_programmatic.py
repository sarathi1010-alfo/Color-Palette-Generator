import json

with open("src/data/programmatic-palettes.json", "r") as f:
    data = json.load(f)

h1_titles = {
    "analogous-blue": "Analogous Blue Color Palettes – Calm & Cohesive UI Designs",
    "triadic-red": "Triadic Red Color Palettes – Bold & Balanced for Modern UI",
    "complementary-green": "Complementary Green Color Palettes – High Contrast & Vibrant",
    "monochromatic-purple": "Monochromatic Purple Color Palettes – Elegant & Consistent",
    "neutral-warm": "Warm Neutral Color Palettes – Timeless & Accessible UI"
}

for palette in data:
    if palette["slug"] in h1_titles:
        palette["h1Title"] = h1_titles[palette["slug"]]

with open("src/data/programmatic-palettes.json", "w") as f:
    json.dump(data, f, indent=2)
