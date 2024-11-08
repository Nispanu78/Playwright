//Here we write a parametrized test where valid and invalid values are used

import {test} from '@playwright/test'

const credentials = [
    {
        "username": "Admin",
        "password": "admin123"
    },
    {
        "username": "Admin123",
        "password": "admin"
    }
]

credentials.forEach(data=>{
    test(`Login test with credentials ${data.username} + ${data.password}`, async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('input[placeholder="Username"]').fill(data.username);
        await page.locator('input[placeholder="Password"]').fill(data.password);
        await page.locator('(//button[normalize-space()="Login"])[1]').click();
        await page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
        await page.locator('text=Logout').click();
        await page.close();
    })
})