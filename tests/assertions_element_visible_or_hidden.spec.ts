//Since we need to do assertions, it is needed to import the "expect" library

import {test, expect} from '@playwright/test'

test('Assertions', async({page})=> {
    await page.goto('https://www.letskodeit.com/practice');
    //How to write an expect condition that check that an HTML element is visible
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    //How to write an expect condition that check that an HTML element is not visible
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close();
})















//https://www.letskodeit.com/practice