import {test, expect} from '@playwright/test';

test('My second test', async({page})=>{
    // page is a fixture which will create an isolated page instance for this particular page in order to 
    // isolate it during the test due to fixtures.context isolation
    // async makes the function return a promise, while await makes the function await for a promise (the promise being the "page"
    // instance 'https://www.google.com')

//  Commands from command line

    //to run the test: npx playwright test
    //This command will run all tests in the "tests" folders and in all browsers
    
    //npx playwright test --workers 3 (this command will assign 3 workers/individual test session and make them run in parallel)


    //to run a specific test when there is more than one the command is: npx playwright test + copy relative path from the IDE and past it in the CLI but change backslash into slash
    //Example:

    //npx playwright test tests/firstTest.spec.ts
    

    //To run multiple spec files in one shot use 

    await page.goto('https://www.google.com');

    //Expect a title 
    await expect(page).toHaveTitle('Google');
})