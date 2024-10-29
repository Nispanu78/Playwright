import {test} from '@playwright/test' 

//How to handles single tab

// test ('Single tab handling', async({page})=>{
//     await page.goto('https://demo.automationtesting.in/Windows.html')

//     //Give consent
//     await page.locator('button[aria-label="Consent"] p[class="fc-button-label"]').click()

//     //We wait until the new tab has opened before operating on it
//     const [newTab] = await Promise.all([
//         page.waitForEvent('popup'),
//         //This is the Javascript event for which the 'Promise' is waiting, namely the clicking of the 'click' button
//         await page.click('button:has-text("click")')
//     ]);


// // //Here we are waiting for the new tab to open completely
//     await newTab.waitForLoadState();
//     //Click on the 'Blog' link in the Selenium.dev page
//     newTab.locator('//span[normalize-space()="Blog"]').click();
//     await newTab.waitForTimeout(5000);
//     await newTab.close();
// })

//How to handle single window

// test ('Single Window handling', async({page})=>{
//     await page.goto('https://demo.automationtesting.in/Windows.html')

//     //Give consent
//     await page.locator('button[aria-label="Consent"] p[class="fc-button-label"]').click()

//     //Click the button to access the section of the page where a new window can be generated

//     await page.locator('.analystic[href="#Seperate"]').click();

//     //We wait until the new tab has opened before operating on it
//     const [newWindow] = await Promise.all([
//         page.waitForEvent('popup'),
//         //This is the Javascript event for which the 'Promise' is waiting, namely the clicking of the 'click' button
//         await page.click('button[onclick="newwindow()"]')
//     ]);


// // //Here we are waiting for the new tab to open completely
//     await newWindow.waitForLoadState();
//     //Click on the 'Blog' link in the Selenium.dev page
//     newWindow.locator('//span[normalize-space()="Blog"]').click();
//     await newWindow.waitForTimeout(5000);
//     await newWindow.close();
// })

//How to handle multiple tabls

test ('Multiple Windows handling', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html')

    //Give consent
    await page.locator('button[aria-label="Consent"] p[class="fc-button-label"]').click()

    //Click the button to access the section of the page where a new window can be generated

    await page.locator('.analystic[href="#Multiple"]').click();

    //We wait until the new tab has opened before operating on it
    const [MultipleTabs] = await Promise.all([
        page.waitForEvent('popup'),
        //This is the Javascript event for which the 'Promise' is waiting, namely the clicking of the 'click' button
        await page.click('button[onclick="multiwindow()"]')
    ]);

    await MultipleTabs.waitForLoadState();
    const pages = MultipleTabs.context().pages();
    console.log('Total pages open: ' + pages.length);
    await MultipleTabs.waitForTimeout(5000);

    //Here we interact with the first tab that has opened
    await pages[1].locator('#email').fill('test@test.com');
    
    //Here we interact with the second tab that has opened
    await pages[2].locator('//span[normalize-space()="Blog"]').click();

    await MultipleTabs.waitForTimeout(5000);
    await pages[1].close();
    await pages[1.].close();
});