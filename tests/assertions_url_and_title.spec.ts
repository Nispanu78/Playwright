import {test, expect} from '@playwright/test'

test('Assert URL and title', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //How to assert the full URL
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //How to assert the partial URL
    await expect(page).toHaveURL(/demo.orangehrmlive/);
    //How to assert the full title
    await expect(page).toHaveTitle('OrangeHRM');
    //How to assert partial title
    await expect(page).toHaveTitle(/.*HRM/);
    await page.close()
})