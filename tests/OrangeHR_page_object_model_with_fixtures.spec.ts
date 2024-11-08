import {test, expect} from 'C:/Users/menhi/Desktop/Files Nicola/IT Resources/Testing-Continuous integration/Playwright/fixtures/pomFixtures.ts'

//Here we use our own custom fixtures
//By implementing the custom fixtures design model, we avoid creating ojects for each of the page of the POM by importing the "page" build-in fixture.
//If I do not need some of the methods listed in the test() function, I simply need to remove its page and corresponding method
test('Login conduit test to access ORANGEHRM', async({ page, landingPage, loginPage, adminPage,logoutPage  })=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.enterUserName('Admin');
    await loginPage.enterPassword('admin123');
    await landingPage.clickLoginButton();
    await adminPage.clickAdminButton();
    await logoutPage.clickLogoutButton();
    await page.close();
});