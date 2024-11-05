import {test} from '@playwright/test'

let page;

//We create the BeforeEach hook
test.beforeEach(async({browser})=>{
    page = await browser.newPage();
    //Here we are loggin-in
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
})

//We create the AfterEach hook
test.afterEach(async({browser})=>{
    //Log-out
    //Open the hamburger menu
    await page.locator('#react-burger-menu-btn').click();
    //Then log-out
    await page.locator('#logout_sidebar_link').click();
    await page.close();
})
// The page fixture is removed from the async() call because we want playwroght to use the page fixture of the beforeEach and afterEach hooks
test('Add items and check out test', async({})=>{
    //Here we add an item to the cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    //Here we enter the cart
    await page.locator('.shopping_cart_link').click();
    //Do a check-out
    await page.locator('#checkout').click();
})

test('Add items and remove them from the cart test', async({})=>{
    //Here we add an item to the cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    //Here we enter the cart
    await page.locator('.shopping_cart_link').click();
    //Remove item from cart
    await page.locator('#remove-sauce-labs-backpack').click();
})