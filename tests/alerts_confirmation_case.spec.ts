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
        expect(alertMessage).toEqual('I am a JS Confirm');
        //Here we accept the alert
        // await alert.accept();
        // await expect (page.locator('#result')).toHaveText('You clicked: Ok');
        //Here we dismiss it
        await alert.dismiss();
        await expect (page.locator('#result')).toHaveText('You clicked: Cancel');
        
    });

    //Click the alert generator button whose even will be listened by the alert listener coded before
    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.close();
})
