import {test, expect} from '@playwright/test';

test('My first test', async({page})=>{
    // page is a fixture which will create an isolated page instance for this particular page in order to 
    // isolate it during the test due to fixtures.context isolation
    // async makes the function return a promise, while await makes the function await for a promise (the promise being the "page"
    // instance 'https://www.google.com')

//  Commands from command line

    //to run the test: npx playwright test
    //This command will run all tests in the "tests" folders and in all browsers
    
    //npx playwright test --workers 3 (this command will assign 3 workers/individual test session and make them run in parallel)
    
    await page.goto('https://www.google.com');

    //Expect a title 
    await expect(page).toHaveTitle('Google');
})