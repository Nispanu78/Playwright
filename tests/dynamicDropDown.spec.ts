import {test, expect} from '@playwright/test'

//First strategy to handle dynamic drop-downs

// test('Dynamic Drop Downs', async({page})=> {
//     await page.goto('https://demo.automationtesting.in/Register.html');

//     //Give consent
//     await page.locator('button[aria-label="Consent"] p[class="fc-button-label"]').click()

//     //Dynamic drop downs are created with the 'span' tag <span></span> and they may or may not be acccompanied by
//     //the input tag where user type the item to select and autosearch suggest the item to choose while user is typing
//     //Here we will test by considering the the 'input' tag is used together with the 'span' tag
//     //Let us first identify the locator for the 'span' tag
//     await page.locator('span[role="combobox"]').click();
//     //Let us then identify the locator for the search box
//     await page.locator('input[role="textbox"]').fill('India');
//     //Let us then inspect the unordered list in the DOM, then check for the list number to choose and identify the selector for this
//     //We construct a CSS selector in the dowm and pass it playwright
//     await page.locator('ul#select2-country-results>li').click();
//     await page.pause();
//     await page.close();

// })


//First strategy to handle dynamic drop-downs

test('Dynamic Drop Downs', async({page})=> {
    await page.goto('https://demo.automationtesting.in/Register.html');

    //Give consent
    await page.locator('button[aria-label="Consent"] p[class="fc-button-label"]').click()
    //Here we select the span tag in its entirety, then we identify the locator for the search box
    // and finally we choose the text corrisponding to the 'li' (list) element to choose
    await page.locator('span[role="combobox"]').click();
    //Let us then identify the locator for the search box
    await page.locator('ul#select2-country-results').locator('li', {
        hasText:'Denmark'
    }).click();
    await page.pause();
    await page.close();

})


