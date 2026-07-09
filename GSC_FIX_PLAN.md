# Google Search Console (GSC) Fix Plan - PaletteFlow

## Identified Issues (Simulated & Code Scan)

1. **Inconsistent Internal Link Styling**:
   - *Observation*: Several internal links to the homepage (/) and palettes (/palettes) are missing the `font-bold` class required by our SEO standards (as found in memory).
   - *Impact*: Reduced semantic weight for primary pillar pages.
   - *Fix*: Global search and replace to ensure consistency across all guide and blog pages.

2. **Dated Content in Sitemaps**:
   - *Observation*: Some legacy guides haven't been updated in several months.
   - *Impact*: Search engines may prioritize fresher content from competitors.
   - *Fix*: Implemented a "Refresh" cycle starting with `choose-website-color-palette` and `color-theory-complementary-triadic-analogous`.

3. **Potential Mobile Usability (Click Targets)**:
   - *Observation*: Footer links are currently tight.
   - *Impact*: Possible "Clickable elements too close together" errors in GSC.
   - *Fix*: Audit `src/components/layout/Footer.tsx` and increase padding/gap between links.

4. **Missing Alt Tags (Proactive)**:
   - *Observation*: Scan showed no current `alt=""` issues, but we should enforce a `lint` rule for this.
   - *Fix*: Add `jsx-a11y/alt-text` to ESLint config if not already present.

## Fix Implementation Schedule

- **Task 1 (Immediate)**: Standardize `font-bold` for internal links in all `/guides` pages.
- **Task 2 (Immediate)**: Update `updatedAt` for 2 pillar guides (Done).
- **Task 3 (Next Sprint)**: Refactor Footer component for better touch targets.
- **Task 4 (Ongoing)**: Monthly content refresh for all pages with >90 days since last `updatedAt`.

## Validation

- Rerun `npm run lint` and `tsx scripts/validate-seo.ts` after fixes.
- Use Playwright to check for visual regressions on mobile viewports.
