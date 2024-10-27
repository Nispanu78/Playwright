import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo-m2.bird.eu/home');
  await page.getByRole('menuitem', { name: 'Interceptor' }).click();
  await page.getByRole('menuitem', { name: 'Home' }).click({
    button: 'right'
  });
  await page.getByRole('menuitem', { name: 'Women' }).click();
  await page.getByRole('menuitem', { name: 'Bags' }).click();
  await page.getByRole('menuitem', { name: 'Blog' }).click();
  await page.getByRole('menuitem', { name: 'Lookbook' }).click();
  await page.getByRole('menuitem', { name: 'Contact' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('test');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('test@mail.com');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('123456');
  await page.getByLabel('What’s on your mind?').click();
  await page.getByLabel('What’s on your mind?').fill('test');
  await page.getByRole('button', { name: 'Submit' }).click();
});