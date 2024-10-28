import {test, expect} from '@playwright/test'

// test('shiftClicksonButton', async({page})=>{
//     await page.goto('https://play1.automationcamp.ir/mouse_events.html')
//     //Testing shift-click on button
//     await page.locator('#click_area').click();
//     We assert that the locator is visible
//     await expect(page.locator('#click_type')).toBeVisible();
//     await page.close();
    
// })


// test('doubleClicksonButton', async({page})=>{
//     await page.goto('https://play1.automationcamp.ir/mouse_events.html')
//     //Testing shift-double click on button
//     await page.locator('#click_area').dblclick();
//     //We assert that the specified text is displayed
//     await expect(page.locator('#click_type')).toHaveText('Double-Click')
//     await page.close();
    
// })

test('rightClicksonButton', async({page})=>{
    await page.goto('https://play1.automationcamp.ir/mouse_events.html')
    //Testing right-click on button
    await page.locator('#click_area').click({button:'right'})
    //We assert that the specified text is displayed
    await expect(page.locator('#click_type')).toHaveText('Right-Click')
    await page.close();
    
})