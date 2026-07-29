import re

with open("src/app/blog/choose-ui-color-palette/page.tsx", "r") as f:
    content = f.read()

# Replace H1
content = re.sub(
    r'<h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-text-primary">.*?</h1>',
    '<h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-text-primary">\n              How to Choose a Color Palette for UI Design in 2026\n            </h1>',
    content,
    flags=re.DOTALL
)

# Replace H2s
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">How does color psychology impact digital spaces?</h2>',
    '<h2 className="text-3xl font-display font-bold text-text-primary">The Psychological Impact of Color in Design</h2>'
)
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">How do you build a functional color hierarchy?</h2>',
    '<h2 className="text-3xl font-display font-bold text-text-primary">Understanding Color Theory Fundamentals</h2>'
)
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">What is the 60-30-10 rule in UI/UX design?</h2>',
    '<h3 className="text-3xl font-display font-bold text-text-primary">What is the 60-30-10 rule in UI/UX design?</h3>'
)
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">Which color harmonies are essential for digital interfaces?</h2>',
    '<h3 className="text-3xl font-display font-bold text-text-primary">Which color harmonies are essential for digital interfaces?</h3>'
)
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">Why is accessibility a non-negotiable standard?</h2>',
    '<h3 className="text-3xl font-display font-bold text-text-primary">Why is accessibility a non-negotiable standard?</h3>'
)
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">What are the practical steps to build your palette?</h2>',
    '<h2 className="text-3xl font-display font-bold text-text-primary">Step-by-Step Guide to Building a UI Color Palette</h2>'
)
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">How do you test palettes across devices and lighting?</h2>',
    '<h3 className="text-3xl font-display font-bold text-text-primary">How do you test palettes across devices and lighting?</h3>'
)
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">How does advanced color scaling work for modern design systems?</h2>',
    '<h3 className="text-3xl font-display font-bold text-text-primary">How does advanced color scaling work for modern design systems?</h3>'
)
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">What common pitfalls should you avoid in UI color selection?</h2>',
    '<h2 className="text-3xl font-display font-bold text-text-primary">Common UI Palette Mistakes to Avoid</h2>'
)
content = content.replace(
    '<h2 className="text-4xl font-display font-bold">Ready to choose your perfect UI colors?</h2>',
    '<h2 className="text-4xl font-display font-bold">How PaletteFlow Simplifies the Process</h2>'
)
content = content.replace(
    '<h2 className="text-3xl font-display font-bold text-text-primary">What is the final verdict on UI color selection?</h2>',
    '<h3 className="text-3xl font-display font-bold text-text-primary">What is the final verdict on UI color selection?</h3>'
)

with open("src/app/blog/choose-ui-color-palette/page.tsx", "w") as f:
    f.write(content)
