# Technical SEO Audit & Google Search Console (GSC) Fix Plan

## 1. Audit Findings

### Sitemap Status
- **Current Sitemap:** `src/app/sitemap.ts` is the primary source.
- **Observation:** Static routes are well-defined. Dynamic article routes are handled via `src/app/sitemap-articles.xml/route.ts`.
- **Action Taken:** Manually added the new Tier 1 and Tier 2 URLs to `src/app/sitemap.ts` to ensure immediate visibility.

### Robots.txt & Indexing
- **Robots.txt:** Managed dynamically at `src/app/robots.txt/route.ts`.
- **Duplicate Content:** Middleware (`src/middleware.ts`) correctly adds `noindex` to `.vercel.app` domains.
- **Canonical URLs:** Properly handled via `generateCanonicalUrl` and `NEXT_PUBLIC_SITE_URL`.

### Schema Validation
- **Tier 1:** Article schema injected.
- **Tier 2:** FAQ schema injected.
- **Global:** Organization and Website schemas are present on the homepage.

## 2. GSC Coverage Fix Plan

| Issue Type | Potential Cause | Fix Action | Priority |
|------------|-----------------|------------|----------|
| **Discovered - currently not indexed** | Rapid publishing of programmatic pages. | Trigger IndexNow API for the new batch of 5 Tier 2 pages. | High |
| **Excluded by 'noindex' tag** | Vercel preview deployments. | Expected behavior. Ensure `X-Robots-Tag: noindex` is NOT present on the production domain. | Medium |
| **404 Not Found** | Legacy palette URLs if slugs were changed. | Ensure 301 redirects are in place for any modified slugs in `palettes.json`. | Medium |
| **Missing Field in Schema** | `author` or `dateModified` in Article schema. | Verified: `author` and `updatedAt` are present in `choose-ui-color-palette`. | Low |

## 3. Maintenance Tasks
1. **IndexNow:** Submit the following URLs to IndexNow:
   - `https://paletteflow.alfo.online/blog/choose-ui-color-palette`
   - `https://paletteflow.alfo.online/palettes/theory/analogous-blue`
   - `https://paletteflow.alfo.online/palettes/theory/triadic-red`
   - `https://paletteflow.alfo.online/palettes/theory/complementary-green`
   - `https://paletteflow.alfo.online/palettes/theory/monochromatic-purple`
   - `https://paletteflow.alfo.online/palettes/theory/neutral-warm`
2. **Internal Linking:** Ensure 2+ internal links exist for all new pages. (Completed: Links added to/from Tier 1).
