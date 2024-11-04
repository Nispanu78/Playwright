import {test} from '@playwright/test'

test('Download a file', async({page})=>{
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    //Give consent
    await page.locator('button[aria-label="Consent"] p[class="fc-button-label"]').click()
    //Click on text area
    await page.locator('#textbox').click();
    //Intert text with the fill() method
    // await page.locator('#textbox').fill('test to test');
    //If website does not allow to use this method, use pressSequentially()
    await page.locator('#textbox').pressSequentially('test to test');
    //Click on button to generate the file
    await page.locator('//button[@id="createTxt"]').click();

    //Write this function in order to check that the file has been downloaded
    const download = await Promise.all([
        page.waitForEvent('download'),
        //Click on download button to download the generated file
        page.locator('#link-to-download').click()
    ]);

    const path = await download[0].path();
    console.log("Downloaded path ... " + path);

    //To download the file (playwright does not do that by default and I do not want to download the file from this demo website, but this is 
    //how it must be done)

    // const fileName = download[0].suggestedFilename();
    // await download[0].saveAs(fileName);

    //To customize the filename you want to download do this

    // const customisedFileName = "test";
    // await download[0].saveAs(customisedFileName);

});