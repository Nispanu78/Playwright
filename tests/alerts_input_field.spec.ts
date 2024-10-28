import {test, expect} from '@playwright/test'

test('Alerts', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // //Click button that generates the alert and handle a simple alert (where no option is given to the user)
    // await page.locator('//button[normalize-space()="Click for JS Alert"]').click();
    // await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    //To check the test displayed to user in the alert do as following:
    await page.pause();
    page.on('dialog', async(alert)=>{
        const alertMessage = alert.message(); 
        expect(alertMessage).toEqual('I am a JS prompt');
        //Here we accept the alert and typpe a value inside of it
        // await alert.accept('OK');
        // await expect (page.locator('#result')).toHaveText('You entered: OK');
        // //Here we dismiss it
        await alert.dismiss();
        await expect (page.locator('#result')).toHaveText('You entered: null');
        
    });

    //Click the alert generator button whose even will be listened by the alert listener coded before
    await page.locator('button[onclick="jsPrompt()"]').click();
    await page.close();
})
