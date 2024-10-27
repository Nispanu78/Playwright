import {test} from '@playwright/test'

test('Testing a login form', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.locator('(//button[normalize-space()="Login"])[1]').click();
    await page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
    await page.locator('text=Logout').click();
    await page.close();
})