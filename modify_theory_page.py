import re

with open("src/app/palettes/theory/[slug]/page.tsx", "r") as f:
    content = f.read()

# Replace H1
content = re.sub(
    r'<h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary">\s*\{page\.name\} <span className="text-primary italic">Palette</span>\s*</h1>',
    '<h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary">\n                {page.h1Title || `${page.name} Palette`}\n             </h1>',
    content,
    flags=re.DOTALL
)

with open("src/app/palettes/theory/[slug]/page.tsx", "w") as f:
    f.write(content)
