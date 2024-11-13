import {test, expect} from '@playwright/test'

test('Assertions screen-shot', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //Please take into consideration that the test is expected to fail the first time it runs since it has no screen-shot to compare to
    await expect(page).toHaveScreenshot();
    await page.close();
})