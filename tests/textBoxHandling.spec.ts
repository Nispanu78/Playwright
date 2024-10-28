import {test} from '@playwright/test'

test('textBoxHandling', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //The pressSequentially() method will enter each letter one by one inside the text area
    //To mock the actual pressing of keys use delay as shown below. Time is calculated in milliseconds
    await page.locator('input[placeholder="Username"]').pressSequentially('Admin', {delay: 200});
    await page.locator('input[placeholder="Password"]').pressSequentially('admin123', {delay: 200});
    //With the press() method we can browseautomate the pressing of the "Enter" key in the keyboard
    await page.locator('input[placeholder="Password"]').press('Enter');
    await page.locator('//p[@class="oxd-userdropdown-name"]').click();
    await page.locator('//a[normalize-space()="Logout"]').click();
    await page.close();
})