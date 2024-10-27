import {test, expect} from '@playwright/test'

test('Assert text match and mismatch', async({page})=>{
    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('#home')).toHaveText('Goto Home');
    await (expect(page.locator('#home'))).not.toHaveText('Goto Homeeeee');
    await page.close();
})