//How to insert the date when it is not possible to insert it manually

import {test, expect} from '@playwright/test'
import {DateTime} from 'luxon';

test('Choose a date in the calendar using date picker and Luxon', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    //Click on pop-up to allow all cookies
    await page.locator('//*[@id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"]').click();
    //Click on the date picker to open the it and select the date from which you want to search 
    await page.locator('input[placeholder="Start date"]').click();
    //Select a day in the past from which to search
    selectDate(1, "June 2023", page);
    await page.waitForTimeout(5000);
    await page.reload();

     //Click on the date picker to open the it and select the date to which you want to search 
     await page.locator('input[placeholder="End date"]').click();
     //Select a day in the past from which to search
     selectDate(1, "June 2024", page);
     await page.waitForTimeout(5000);
     await page.reload();

    //  //Click on the date picker to open the it and select the current month
    //  await page.locator('input[placeholder="End date"]').click();
    //  //Select a day in the past from which to search
    //  selectDate(30, "November 2024", page);
    //  await page.waitForTimeout(5000);
    //  await page.reload();

})

async function selectDate(date:number, dateToSelect:string, page){
    //Identify the locator for changing the month and the year
    const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
    //Identify the locator for the previous button
    const previousButton = page.locator('div[class="datepicker-days"] th[class="prev"]');
    //Identify the locator for the next button
    const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]');

     //If you want to search from a date late in the past, use the the following code
     const formattedMonth = DateTime.fromFormat(dateToSelect, 'MMMM yyyy');
     while(await monthYear.textContent() != dateToSelect) {
         if(formattedMonth < DateTime.fromJSDate(new Date())){
             await previousButton.click();
         }
         
         else {
             await nextButton.click();
         }}
     //To identify days in the table of the calendar picker use the following CSS
     //td[@class="day"] [text()="1"]
     await page.locator(`//td[@class="day"] [text()="${date}"]`).click();
     await page.pause(); 

}