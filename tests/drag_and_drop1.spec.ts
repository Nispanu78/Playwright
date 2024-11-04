import {test} from '@playwright/test'

//First approach
test('Drag_and_drop', async({page})=>{
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    //Locator of the element to drag
    const Washington = page.locator('//div[@id="box3"][text()="Washington"]');
    //Locator of the element towards which to drag the previous one
    const UnitedStates = page.locator('//div[@id="box103"][text()="United States"]');
    //Hover over the Washington box to drag and press down with the mouse
    await Washington.hover();
    await page.mouse.down();
    //Hover over the United States
    await UnitedStates.hover();
    await page.mouse.up();
    await page.waitForTimeout(5000)
});

test.only('Easier_drag_and_drop', async({page})=> {
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const Washington = page.locator('//div[@id="box3"][text()="Washington"]');
    //Locator of the element towards which to drag the previous one
    const UnitedStates = page.locator('//div[@id="box103"][text()="United States"]');
    await Washington.dragTo(UnitedStates);
    await page.waitForTimeout(5000)
})