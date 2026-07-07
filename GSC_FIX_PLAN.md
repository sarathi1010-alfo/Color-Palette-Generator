# Technical SEO Audit & Google Search Console (GSC) Fix Plan

## 1. Audit Findings

### Sitemap Status
- **Current Sitemap:** `src/app/sitemap.ts` is the primary source.
- **Action Taken:** Manually added 6 new URLs to `src/app/sitemap.ts`.

### Robots.txt & Indexing
- **Robots.txt:** Managed dynamically at `src/app/robots.txt/route.ts`.
- **Duplicate Content:** Middleware (`src/middleware.ts`) correctly adds `noindex` to `.vercel.app` domains.

### Schema Validation
- **Tier 1:** Article schema injected and verified.
- **Tier 2:** FAQ schema injected and verified.

## 2. GSC Coverage Fix Plan

| Issue Type | Potential Cause | Fix Action | Priority |
|------------|-----------------|------------|----------|
| **Discovered - currently not indexed** | Rapid publishing of programmatic pages. | Trigger IndexNow API for the new batch. | High |
| **Excluded by 'noindex' tag** | Vercel preview deployments. | Expected behavior. Ensure production domain is unaffected. | Medium |
| **Missing Field in Schema** | `author` or `updatedAt` in Article schema. | Verified: both are present in the new Tier 1 article. | Low |

## 3. Maintenance Tasks
1. **IndexNow Submission:** Submit all 6 new URLs to the IndexNow API.
2. **Internal Linking Audit:** Ensure all new pages are reachable within 2 clicks from the homepage. (Completed for Tier 1).
3. **CI/CD Integration:** Authenticated sitemap ping and automated link checking in CI using `secrets.GITHUB_TOKEN`.
