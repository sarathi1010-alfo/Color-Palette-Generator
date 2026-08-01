import { test, expect } from '@playwright/test';

const targetUrls = [
  '/',
  '/blog/choose-ui-color-palette',
  '/palettes/theory/analogous-blue',
  '/palettes/theory/triadic-red',
  '/palettes/theory/complementary-green',
  '/palettes/theory/monochromatic-purple',
  '/palettes/theory/neutral-warm'
];

for (const url of targetUrls) {
  test(`Verify ${url} returns 200 OK`, async ({ page }) => {
    const response = await page.goto(`http://127.0.0.1:3000${url}`);
    expect(response?.status()).toBe(200);

    // Check for no console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.waitForLoadState('networkidle');
    expect(consoleErrors).toHaveLength(0);
  });
}
