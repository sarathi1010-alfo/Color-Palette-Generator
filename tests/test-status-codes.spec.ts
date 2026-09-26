import { test, expect } from '@playwright/test';

const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/blog/choose-ui-color-palette',
  'http://localhost:3000/palettes/theory/analogous-blue',
  'http://localhost:3000/palettes/theory/triadic-red',
  'http://localhost:3000/palettes/theory/complementary-green',
  'http://localhost:3000/palettes/theory/monochromatic-purple',
  'http://localhost:3000/palettes/theory/neutral-warm',
  'http://localhost:3000/blog',
  'http://localhost:3000/guides/ultimate-guide-color-theory-2026',
  'http://localhost:3000/learn/what-is-color-theory',
  'http://localhost:3000/learn/what-is-a-monochromatic-palette',
  'http://localhost:3000/learn/what-is-a-complementary-palette',
  'http://localhost:3000/learn/what-is-a-triadic-palette',
  'http://localhost:3000/learn/what-is-an-analogous-palette'
];

test.describe('Status Code & Console Error Checks', () => {
  for (const url of urls) {
    test(`Check ${url} returns 200 OK and has zero console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', error => {
        errors.push(error.message);
      });
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      const response = await page.goto(url);
      expect(response?.status()).toBe(200);
      expect(errors).toHaveLength(0);
    });
  }
});
