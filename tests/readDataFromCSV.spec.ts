//Here we build a test that is capable of reading a JSON file containing valid and invalid credentials parameters
import {test} from '@playwright/test'
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';
const orangeHrmData = parse(fs.readFileSync(path.join(__dirname,'testData','OrangeHRMCreds.csv')), {
    columns:true,
    skip_empty_lines:true
})




test('Testing a login form with valid credentials and expecting it to pass', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //We pass "[0]" to orangeHRMData in order to take the username and password which find themselves at position "0"
    await page.locator('input[placeholder="Username"]').fill(orangeHrmData[0].username);
    await page.locator('input[placeholder="Password"]').fill(orangeHrmData[0].password);
    await page.locator('(//button[normalize-space()="Login"])[1]').click();
    await page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
    await page.locator('text=Logout').click();
    await page.close();
})


test('Testing a login form with invalid credentials and expecting it to fail', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[placeholder="Username"]').fill(orangeHrmData[1].username);
    await page.locator('input[placeholder="Password"]').fill(orangeHrmData[1].password);
    await page.locator('(//button[normalize-space()="Login"])[1]').click();
    await page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
    await page.locator('text=Logout').click();
    await page.close();
})