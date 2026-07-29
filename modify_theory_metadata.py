import re

with open("src/app/palettes/theory/[slug]/page.tsx", "r") as f:
    content = f.read()

content = content.replace(
    '  return resolveMetadata(buildLandingMeta({\n    title: `${page.name} Color Palette - Hex Codes & UI Previews`,\n    description: page.description,\n    slug: `/palettes/theory/${page.slug}`,\n  }));',
    '  const meta = buildLandingMeta({\n    title: `${page.name} Color Palette - Hex Codes & UI Previews`,\n    description: page.description,\n    slug: `/palettes/theory/${page.slug}`,\n  });\n  meta.pageType = "faq";\n  return resolveMetadata(meta);'
)

with open("src/app/palettes/theory/[slug]/page.tsx", "w") as f:
    f.write(content)
