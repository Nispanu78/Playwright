//In playwright hooks are used to avoid repetitive code
//There are four hooks available:

// 1. Before all
// 2. After all
// 3. Before each
// 4  After each

//Before all and after all will run tests before or after all tests, before each and after each will run tests before each specific test

import {test} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("Before all hook")
})

test.beforeEach(async()=>{
    console.log("Before each hook")
})

test('Test 1', async()=>{
    console.log('test 1 Block')
})

test('Test 2', async()=>{
    console.log('test 2 Block')
})

test('Test 3', async()=>{
    console.log('test 3 Block')
})

test.afterAll(async()=>{
    console.log("After all hook")
})

test.afterEach(async()=>{
    console.log("After each hook")
})