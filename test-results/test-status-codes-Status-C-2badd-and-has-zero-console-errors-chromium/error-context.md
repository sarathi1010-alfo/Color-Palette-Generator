# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-status-codes.spec.ts >> Status Code & Console Error Checks >> Check http://localhost:3000/learn/what-is-an-analogous-palette returns 200 OK and has zero console errors
- Location: tests/test-status-codes.spec.ts:22:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/learn/what-is-an-analogous-palette
Call log:
  - navigating to "http://localhost:3000/learn/what-is-an-analogous-palette", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const urls = [
  4  |   'http://localhost:3000/',
  5  |   'http://localhost:3000/blog/choose-ui-color-palette',
  6  |   'http://localhost:3000/palettes/theory/analogous-blue',
  7  |   'http://localhost:3000/palettes/theory/triadic-red',
  8  |   'http://localhost:3000/palettes/theory/complementary-green',
  9  |   'http://localhost:3000/palettes/theory/monochromatic-purple',
  10 |   'http://localhost:3000/palettes/theory/neutral-warm',
  11 |   'http://localhost:3000/blog',
  12 |   'http://localhost:3000/guides/ultimate-guide-color-theory-2026',
  13 |   'http://localhost:3000/learn/what-is-color-theory',
  14 |   'http://localhost:3000/learn/what-is-a-monochromatic-palette',
  15 |   'http://localhost:3000/learn/what-is-a-complementary-palette',
  16 |   'http://localhost:3000/learn/what-is-a-triadic-palette',
  17 |   'http://localhost:3000/learn/what-is-an-analogous-palette'
  18 | ];
  19 | 
  20 | test.describe('Status Code & Console Error Checks', () => {
  21 |   for (const url of urls) {
  22 |     test(`Check ${url} returns 200 OK and has zero console errors`, async ({ page }) => {
  23 |       const errors: string[] = [];
  24 |       page.on('pageerror', error => {
  25 |         errors.push(error.message);
  26 |       });
  27 |       page.on('console', msg => {
  28 |         if (msg.type() === 'error') {
  29 |           errors.push(msg.text());
  30 |         }
  31 |       });
  32 | 
> 33 |       const response = await page.goto(url);
     |                                   ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/learn/what-is-an-analogous-palette
  34 |       expect(response?.status()).toBe(200);
  35 |       expect(errors).toHaveLength(0);
  36 |     });
  37 |   }
  38 | });
  39 | 
```