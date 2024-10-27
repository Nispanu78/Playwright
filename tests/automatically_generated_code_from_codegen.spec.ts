import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo-m2.bird.eu/home');
  await page.getByRole('menuitem', { name: 'Women' }).click();
  await page.getByRole('menuitem', { name: 'Tops' }).click();
  await page.locator('div').filter({ hasText: 'Skip to Content Language' }).first().click();
  await page.getByRole('menuitem', { name: 'Bottoms' }).click();
  await page.getByRole('menuitem', { name: 'Shorts' }).click();
  await page.getByRole('menuitem', { name: 'Tops' }).click();
  await page.getByRole('menuitem', { name: 'Jackets' }).click();
  await page.getByRole('menuitem', { name: 'Hoodies & Sweatshirts' }).click();
  await page.getByRole('menuitem', { name: 'Tees' }).click();
  await page.getByRole('menuitem', { name: 'Tanks' }).click();
  await page.getByRole('menuitem', { name: 'Pants' }).click();
  await page.getByRole('menuitem', { name: 'Shorts' }).click();
});