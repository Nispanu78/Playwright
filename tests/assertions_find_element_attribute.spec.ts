import {test, expect} from '@playwright/test'

test('Find element attributes', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // How to find a class's attribue value
    // await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('class', 'oxd-input oxd-input--active');
    // We can achieve the same with a regular expression
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('class',/.*oxd-input/);
    await page.close();
})