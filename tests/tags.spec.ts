//Tags are used to group a set of tests and execute only those groups when needed. For example to run just a set of smoke test cases

import {test} from '@playwright/test'


test('Login page @smoke', async()=>{
    console.log('test 1 Block')
})

test('Home page @smoke', async()=>{
    console.log('test 2 Block')
})

test('Payment page @regression', async()=>{
    console.log('test 3 Block')
})

test('Check-out page @regression', async()=>{
    console.log('test 3 Block')
})
