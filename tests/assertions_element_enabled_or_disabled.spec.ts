import {test, expect} from '@playwright/test'

test('Assert element is enabled or disabled', async({page})=>{
    await page.goto('https://letcode.in/buttons');
    //How to write an expect condition that check that an element is enabled
    await expect(page.locator('#home')).toBeEnabled
    //How to write an expect condition that check that an element is disabled
    await expect(page.locator('(//button[normalize-space()="Disabled"])[1]')).toBeDisabled
    await page.close();

})