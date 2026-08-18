import { test, expect } from '@playwright/test';

test('EPAM services header navigation opens Client Work page', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('button', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work')).toBeVisible();
});
