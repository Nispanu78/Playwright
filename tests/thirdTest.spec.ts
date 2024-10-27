import {test, expect} from '@playwright/test';

test('My third test', async({page})=>{
    // page is a fixture which will create an isolated page instance for this particular page in order to 
    // isolate it during the test due to fixtures.context isolation
    // async makes the function return a promise, while await makes the function await for a promise (the promise being the "page"
    // instance 'https://www.google.com')


    await page.goto('https://www.google.com');

    //Expect a title 
    await expect(page).toHaveTitle('Google');
})