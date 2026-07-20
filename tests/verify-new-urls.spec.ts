import { test, expect } from '@playwright/test';

const urls = [
  '/blog/choose-ui-color-palette',
  '/palettes/theory/analogous-blue',
  '/palettes/theory/triadic-red',
  '/palettes/theory/complementary-green',
  '/palettes/theory/monochromatic-purple',
  '/palettes/theory/neutral-warm'
];

test.describe('Verify new URLs', () => {
  for (const url of urls) {
    test(`Verify ${url} returns 200 OK and has zero console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (err) => {
        errors.push(err.message);
      });
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      const response = await page.goto(url);
      expect(response?.status()).toBe(200);
      expect(errors.length).toBe(0);
    });
  }
});
