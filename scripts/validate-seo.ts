import fs from 'fs';
import path from 'path';

import palettesData from '../src/data/palettes.json';
import colorsData from '../src/data/color-names.json';
import seoPagesData from '../src/data/seo-pages.json';

function validateUrls() {
  console.log('--- Starting SEO Validation ---');
  let errors = 0;

  // 1. Validate Palettes JSON
  console.log(`Validating ${palettesData.length} palettes...`);
  palettesData.forEach((p: any) => {
    if (!p.category) {
       console.error(`ERROR: Palette ${p.id} is missing a category.`);
       errors++;
    }
    const slug = p.slug || p.id;
    if (!slug || slug !== slug.toLowerCase().replace(/[^a-z0-9-]/g, '')) {
       console.error(`ERROR: Palette ${p.id} has an invalid slug format: ${slug}`);
       errors++;
    }
  });

  // 2. Validate Colors JSON
  console.log(`Validating ${colorsData.length} colors...`);
  colorsData.forEach((c: any) => {
    if (!c.name || !c.hex) {
       console.error(`ERROR: Color is missing name or hex: ${JSON.stringify(c)}`);
       errors++;
    }
  });

  // 3. Validate SEO Pages JSON
  console.log(`Validating ${seoPagesData.length} SEO cluster pages...`);
  seoPagesData.forEach((page: any) => {
    if (!page.title || !page.slug || !page.id) {
       console.error(`ERROR: SEO page is missing title, slug, or id: ${JSON.stringify(page)}`);
       errors++;
    }
    if (page.slug !== page.slug.toLowerCase().replace(/[^a-z0-9-]/g, '')) {
       console.error(`ERROR: SEO page has an invalid slug format: ${page.slug}`);
       errors++;
    }
  });

  if (errors > 0) {
    console.error(`\nSEO Validation Failed with ${errors} errors.`);
    process.exit(1);
  } else {
    console.log('\n✅ SEO Validation Passed! All routes and schemas are clean.');
  }
}

validateUrls();
