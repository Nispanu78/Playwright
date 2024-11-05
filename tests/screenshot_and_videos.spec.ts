import {test} from '@playwright/test'

//Here we are testing the take a screen-shot and video on failure configuration
test('Testing a login form', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123sasa');
    //To make a screen-shot at this point
    // await page.screenshot({path:'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/screenshots'+'login screenshot.png'})
    await page.locator('(//button[normalize-space()="Login"])[1]').click();
    await page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
    //Take a screen-shot after submitting
    // await page.screenshot({path:'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/screenshots'+'Homepage.png'})
    await page.locator('text=Logout').click();
    await page.close();
})