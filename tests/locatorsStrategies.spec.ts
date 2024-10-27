import {test} from '@playwright/test'

test('Different locator strategies', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.pause()
    // // Here we use the id/value key/value pair between commas
    // await page.locator('id="user-name"').fill('standard_user');
    // //Here we use the CSS to identify the same element inserting it between commas
    // await page.locator('[name="user-name"]').fill('standard_user');
    // // Here we use the XPATH between commas
    // await page.locator('//*[@id="user-name"]').fill('standard_user');
    // // To identify an HTML element with text use:
    // await page.locator('text=Login').click();
    // //Or you can use
    // await page.locator('input:has-text("Login")').click();
    // In addition you can easily identify HTML elements and their attributes with Playwright inspector
    //To do that place "await page.pause()" after " await page.goto('https://www.saucedemo.com/');" then
    //On the inspector click on "Record" and simply over the mouse on the elements of the web page under test. The locator will be shown and
    // can simply be copied and pastes after "await.page" function.
})