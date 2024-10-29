//In HTML:

// 1. the table tag <table></table> indicates the presence of a table
// 2. the tbody tag <tbody></tbody> indicates the presence of the body of the table
// 3. the tr tag <tr></tr> indicates the presence of a table row 
// 4. the th tag <th></th> indicates the presence of a table head (the field o column name in a table)
// 5. the td tag <td></td> indicates the presence of a table row (the value or record contained inside a table)

//How to test a static table

// import {test, expect} from '@playwright/test'

// test('Static Web Table', async({page})=> {
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     const table = page.locator('table[name="BookTable"]');

//     //Find the total number of rows and columns
//     // The column are as many as the numbers of <th></th> tags in the DOM

//     //To identify the number of columns, in the dev tools click CTRL+F to open the search box and type the following CSS:

//     // table[name='BookTable'] tr th

//     const columns = table.locator('tr th');
//     console.log('Number of columns : ', await columns.count());

//     //To identify the number of rows, in the dev tools click CTRL+F to open the search box and type the following CSS(please
//     //consider that the header, namely the fields' name of the table, are counted as one row):

//     // table[name='BookTable'] tbody tr


//     const rows = table.locator('tbody tr');
//     console.log('Number of rows : ', await rows.count());

//     expect(await columns.count()).toBe(4);
//     expect(await rows.count()).toBe(7);

//     await page.close();
// })



//How to test a table where a single checkbox is checked

// import {test} from '@playwright/test'

// test('Web Table with checkbox', async({page})=> {
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     const table = page.locator('//table[@id="productTable"]');
//     //Here we identify the columns'rows
//     const rows = table.locator('tbody tr');
//     //Here we identify the checkbox that we want to check corresponding to our selected row
//     const matchedRow = rows.filter({
//         has: page.locator('td'),
//         hasText: 'Tablet'
//     });

//     await matchedRow.locator('input').check();

//     await page.pause();

//     await page.close();
// })


//How to test a table where a multiple checkboxes are checked

import {test} from '@playwright/test'

test('Web Table with Multiple checkboxes to check', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('//table[@id="productTable"]');
    //Here we identify the columns'rows
    const rows = table.locator('tbody tr');
    
    //Here we identify the checkbox that we want to check corresponding to our selected row
    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Tablet')
    await selectProduct(rows, page, 'Wireless Earbuds')
    await page.pause();
    await page.close();

})

async function selectProduct(rows, page, productName) {
    const matchedRows = rows.filter({
        has:page.locator('td'),
        hasText: productName

    })
    await matchedRows.locator('input').check();
}