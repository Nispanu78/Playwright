import {test, expect} from '@playwright/test'

test('checkBoxes', async({page})=> {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const Cricket = page.locator('#checkbox1');
    const Movies = page.locator('#checkbox2');
    const Hockey = page.locator('#checkbox2');

    //Assert the three check boxes
    expect(Cricket).not.toBeChecked();
    expect(Movies).not.toBeChecked();
    expect(Hockey).not.toBeChecked();

    //Give consent
    await page.locator('button[aria-label="Consent"] p[class="fc-button-label"]').click()

    //Check the 'Cricket' check box
    await Cricket.check();
    expect(Cricket).toBeChecked();

    await page.close();
})