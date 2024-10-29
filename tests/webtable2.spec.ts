// import {test, expect} from '@playwright/test'

// test('Print values for one table and one page', async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     const table = page.locator('//table[@id="productTable"]');
//     const rows = table.locator('tbody tr');

//     for(let i=0; i < await rows.count(); i++){
//         //nth returns locator to the n-th matching element. It's 0-based, nth(0)
//         const row = rows.nth(i);
//         const rowData = row.locator('td');
//         for(let j=0; j < await rowData.count(); j++) {
//             const cellContent = await rowData.nth(j).textContent();
//             console.log(cellContent)
//         }
//     }
    
// })

import {test, expect} from '@playwright/test'

test('Print all values for all pages', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('//table[@id="productTable"]');
    const rows = table.locator('tbody tr');
    //We build a CSS locator with the pagination id, 'li' and 'a' tags
    const pages = page.locator('#pagination li a');
    const totalPages = await pages.count();
    console.log('Total number of pages is :' + totalPages)

    for(let p=0; p < await totalPages; p++){
        if (p>0) {
            await pages.nth(p).click();
        }

        for(let i=0; i < await rows.count(); i++){
                    //nth returns locator to the n-th matching element. It's 0-based, nth(0)
                    const row = rows.nth(i);
                    const rowData = row.locator('td');
                    for(let j=0; j < await rowData.count(); j++) {
                        const cellContent = await rowData.nth(j).textContent();
                        console.log(cellContent)
                    }
                }

    }
    await page.close();
})