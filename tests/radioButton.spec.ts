import {test, expect} from '@playwright/test'

test('Radio Button', async({page})=> {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="FeMale"]');
    //Give consent
    //Assert the 'male' radio button is not checked
    expect(maleRadioButton).not.toBeChecked();
    //Assert the 'female' radio button is checked
    expect(femaleRadioButton).not.toBeChecked();

    //Give consent
    await page.locator('button[aria-label="Consent"] p[class="fc-button-label"]').click()

    //Another way of asserting the radio button is the following
    expect(await maleRadioButton.isChecked).toBeTruthy();
    expect(await femaleRadioButton.isChecked).toBeTruthy();

    //Select or check 'male' radio button
    await maleRadioButton.check();
    expect(maleRadioButton).toBeChecked();

    //Select or check 'female' radio button
    await femaleRadioButton.check();
    expect(femaleRadioButton.isChecked()).toBeTruthy();

    await page.close();

})