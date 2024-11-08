//Here we build a test that is capable of reading a JSON file containing valid and invalid credentials parameters
import {test} from '@playwright/test'
import * as orangeHrmData from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/testData/OrangeHRMCredentials.json'



test('Testing a login form with valid credentials and expecting it to pass', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[placeholder="Username"]').fill(orangeHrmData.validUsername);
    await page.locator('input[placeholder="Password"]').fill(orangeHrmData.validPassword);
    await page.locator('(//button[normalize-space()="Login"])[1]').click();
    await page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
    await page.locator('text=Logout').click();
    await page.close();
})


test('Testing a login form with invalid credentials and expecting it to fail', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[placeholder="Username"]').fill(orangeHrmData.invalidUsername);
    await page.locator('input[placeholder="Password"]').fill(orangeHrmData.invalidPassword);
    await page.locator('(//button[normalize-space()="Login"])[1]').click();
    await page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
    await page.locator('text=Logout').click();
    await page.close();
})