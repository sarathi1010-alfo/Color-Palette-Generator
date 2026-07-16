import { test, expect } from '@playwright/test';

test('Verify internal links on Tier 1 article', async ({ page }) => {
  await page.goto('/blog/choose-ui-color-palette');
  const generatorLink = page.locator('a:has-text("PaletteFlow generator")');
  await expect(generatorLink).toBeVisible();
  await expect(generatorLink).toHaveClass(/font-bold/);

  const exploreLink = page.locator('a:has-text("palette library")');
  await expect(exploreLink).toBeVisible();
  await expect(exploreLink).toHaveClass(/font-bold/);
});

test('Verify inbound links on legacy content', async ({ page }) => {
  await page.goto('/guides/choose-website-color-palette');
  const inboundLink1 = page.locator('a:has-text("how to choose a color palette for UI design")').first();
  await expect(inboundLink1).toBeVisible();
  await expect(inboundLink1).toHaveClass(/font-bold/);

  await page.goto('/guides/color-theory-pairings');
  const inboundLink2 = page.locator('a:has-text("UI color palette masterclass")');
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
