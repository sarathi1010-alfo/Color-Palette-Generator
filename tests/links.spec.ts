import { test, expect } from '@playwright/test';

test('Verify internal links on Tier 1 article', async ({ page }) => {
  await page.goto('/blog/choose-ui-color-palette');
  // From src/app/blog/choose-ui-color-palette/page.tsx:
  // "Use our <Link href="/explore" className="text-primary hover:underline font-bold">Explore Library</Link>"
  // and "<Link href="/" className="text-primary hover:underline font-bold">PaletteFlow</Link>"
  const generatorLink = page.locator('a:has-text("PaletteFlow")').filter({ hasText: /^PaletteFlow$/ });
  await expect(generatorLink).toBeVisible();
  await expect(generatorLink).toHaveClass(/font-bold/);

  const exploreLink = page.locator('a:has-text("Explore Library")');
  await expect(exploreLink).toBeVisible();
  await expect(exploreLink).toHaveClass(/font-bold/);
});

test('Verify inbound links on legacy content', async ({ page }) => {
  await page.goto('/about');
  const inboundLink1 = page.locator('a:has-text("how to choose a color palette for UI design")').first();
  await expect(inboundLink1).toBeVisible();
  await expect(inboundLink1).toHaveClass(/font-bold/);

  await page.goto('/guides/ultimate-guide-color-theory-2026');
  const inboundLink2 = page.locator('a:has-text("how to choose a color palette for UI design")').first();
  await expect(inboundLink2).toBeVisible();
  await expect(inboundLink2).toHaveClass(/font-bold/);
});

test('Verify programmatic palette pages exist and return 200', async ({ page }) => {
  const slugs = ['analogous-blue', 'triadic-red', 'complementary-green', 'monochromatic-purple', 'neutral-warm'];
  for (const slug of slugs) {
      const response = await page.goto(`/palettes/theory/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
  }
});
