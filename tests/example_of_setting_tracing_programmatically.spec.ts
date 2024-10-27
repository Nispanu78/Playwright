import { test, expect } from '@playwright/test';

// To pass the tracing system programmatically, we insert "content" within the async() function
test('test', async ({ page, context }) => {
  // To pass the tracing system programmatically, we insert the following line of code
  await context.tracing.start({
    snapshots:true,
    screenshots:true,
  })
  await page.goto('https://demo-m2.bird.eu/home');
  await page.getByRole('menuitem', { name: 'Womennnn' }).click();
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
  //Here we stop the trace that we have started at the beginning of the test
  await context.tracing.stop({path:'./traceTests.zip'})
  //Check in the documentation how to save the automatically generated trace.
});