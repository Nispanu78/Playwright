import {test, expect} from '@playwright/test'

test('Inserting the date in the calendar manually', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let date = '2024-11-04';
    await page.locator('#birthday').fill(date);
    //If you get Error: locator.fill: Error: Malformed value, go to the dev tools and in the console tab run the following command: document.getElementById('birthday').value
    //Then replate the value of the date variable with the correct date format given by the broweser.
    await page.pause();
})