import {test, expect} from '@playwright/test';
import {LandingPage} from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/pages/landingPage.ts'
import {AdminPage} from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/pages/adminPage.ts'
import {LoginPage} from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/pages/loginPage.ts'
import {LogOut} from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/tests/pages/logoutPage.ts'

test('Login conduit test to access ORANGEHRM', async({ page })=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const adminPage = new AdminPage(page);
    const logoutPage = new LogOut(page);

    await loginPage.enterUserName('Admin');
    await loginPage.enterPassword('admin123');
    await landingPage.clickLoginButton();
    await adminPage.clickAdminButton();
    await logoutPage.clickLogoutButton();
    await page.close();
});