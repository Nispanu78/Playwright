import {test, expect} from '@playwright/test'

test('Assert whether element is present or not', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    //How to write an expect condition that check that an element is not present
    await expect(page.locator('.added-manually')).not.toHaveCount(1)
    await page.locator('button[onclick="addElement()"]').click();
    //How to write an expect condition that check that an element is present
    await expect(page.locator('.added-manually')).toHaveCount(1)
    await page.close();
})