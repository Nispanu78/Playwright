import {test, expect} from '@playwright/test'

test('Multi Static Drop-Down', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dual-list-box-demo');
    //Here we will test the multi select drop-down. This drop-down is created with the 'select' tag: <select></select>
    //but, differently from the single static drop-down, here we can choose more than one value from the drop-down by
    //this keyboard combination: SHIFT+shift-click
    await page.selectOption('.border-4.border-gray-950.h-full.p-10.rounded.w-full.form-control.pickListSelect.pickData',
        [{value:'Andrea'},
        {value:'Newbry'},
        {value:'West'},
        {value:'Gibbs'},
        {value:'Una'}]
    );
    await page.locator('button[class="pAdd bg-gray-900 text-white block w-full text-center text-size-14 py-5 mt-15 hover:bg-lambda-900 rounded"]').click();
    await page.pause();
    await page.close();
})