import {test, expect} from '@playwright/test'

test('staticDropDown', async({page})=> {
    await page.goto('https://demo.automationtesting.in/Register.html');

    //Give consent
    await page.locator('button[aria-label="Consent"] p[class="fc-button-label"]').click()

    await page.pause();

    //Static drop-downs are those dropdowns created with the 'select' tag: <select></select>
    //Here we pass the value of the 'value' attribute of the 'option' tag <option></option>
    await page.selectOption('#Skills', {
        value:'APIs'
        
    });

    await page.pause();

    //Here we select the label, namely the text related to each of the options available
    await page.selectOption('#Skills', {
        label: 'Art Design'
    });

    await page.pause();

    //Here we select one of the options through the index, namely the number corresponding to each of the options available
    await page.selectOption('#Skills', {
        index: 3
    });

    await page.close();
})