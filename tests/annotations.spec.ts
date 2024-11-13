//There are 8 main annotations types in Playwright
// 1. Skip - Skip a test unconditionally. Test is immediately aborted when youn call test.skip()
// 2. Skip with condition - Skip a test when a certain condition applies
// 3. Fail - Mark a test unconditionally as "should fail"
// 4. Fail with conditions - Fail a test when a certain condition applie
// 5. Fix me - Declares a test to be fixed. This test wil not execute
// 6. Slow - Unconditionally mark a test as "slow". A slow test will be given triple the default timeout
// 8. Only - Run only the test marked as only

import {test} from '@playwright/test'

test.skip('Skipped test', async()=>{
    console.log('I skip this test unconditionally')
});

//For this test to be run correcty in command line put --project=firefox
test('Skipped in Firefox', async({page, browserName})=>{
    test.skip(browserName === "firefox", "This feature is not implemented for Firefox")
    console.log('I skip this test conditionally')
});
// Here we fail a test
test('Not yet ready to test', async()=>{
    test.fail();
})
//Here we fail it with condition
test('Fail in firefox', async({page, browserName})=>{
    test.fail(browserName === "firefox", "This feature is not implemented for Firefox")
    console.log('I fail this test with condition');
})
// Here we run a fix me test
test.fixme('Fix me test', async()=>{
    console.log('this test needs a fix');
})
// Here we slow a test
test('Slow test', async()=>{
    console.log('this test is slow');
    test.slow();
})
//Here we slow a test with condition
test('Slow test with a condition', async({browserName})=>{
    test.slow(browserName === "firefox", "This feature is not implemented for Firefox");
})

//With test.only only one test will be executed

// test.only('test.only test', async()=>{
//     console.log('Only this test will get executed');
// })