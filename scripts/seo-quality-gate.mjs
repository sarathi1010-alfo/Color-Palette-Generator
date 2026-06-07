import fs from 'fs';
import path from 'path';

// This script simulates an SEO Quality Gate.
// In a full implementation, this would parse the built Next.js HTML files in .next/server/app
// or crawl the preview deployment to validate:
// - Metadata uniqueness
// - Canonical correctness
// - Schema completeness
// - Thin-content risk
// - Missing H1
// - Orphan pages

async function runQualityGate() {
  console.log("🚀 Starting SEO Quality Gate...");
  let errors = 0;
  let warnings = 0;

  const filesToCheck = [
    'src/app/page.tsx',
    'src/app/about/page.tsx',
    'src/app/generator/page.tsx'
  ];

  for (const file of filesToCheck) {
    const fullPath = path.resolve(process.cwd(), file);
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ WARNING: File not found for SEO check: ${file}`);
      warnings++;
      continue;
    }

    const content = fs.readFileSync(fullPath, 'utf-8');

    // Simple heuristic checks on source code
    if (!content.includes('generateMetadata') && !content.includes('<title>')) {
      console.warn(`⚠️ WARNING: Possible missing SEO metadata logic in ${file}`);
      warnings++;
    }

    if (!content.includes('<h1') && !content.includes('<H1') && !content.includes('className="text-3xl font-bold"') && !content.includes('className="text-4xl font-extrabold"')) {
      console.warn(`⚠️ WARNING: Possible missing H1 tag in ${file}`);
      warnings++;
    }
  }

  // Check that the sitemap API route exists
  if (!fs.existsSync(path.resolve(process.cwd(), 'src/app/sitemap.xml/route.ts'))) {
    console.error(`❌ ERROR: Sitemap API route missing at src/app/sitemap.xml/route.ts`);
    errors++;
  }

  console.log(`\nQuality Gate Results: ${errors} Errors, ${warnings} Warnings.`);

  // Allowing warnings to pass the build, but block on errors.
  if (errors > 0) {
    console.error("⛔ SEO Quality Gate FAILED. Deployment blocked.");
    process.exit(1);
  } else {
    console.log("✅ SEO Quality Gate PASSED.");
    process.exit(0);
  }
}

// Ensure the script runs
try {
  runQualityGate();
} catch (e) {
  console.error("❌ ERROR: Quality gate script failed to execute.");
  console.error(e);
  process.exit(1);
}