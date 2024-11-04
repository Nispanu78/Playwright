import {test} from '@playwright/test'

test('Download a file', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        //Locator that identifies where the files have to be uploaded
        page.locator('input[name="files[]"]').click()
    ])
    //Copy the relative path of the file to upload but change backslash in forward slash
    await uploadFile[0].setFiles(['tests/filesToUpload/playwright_1.png','tests/filesToUpload/playwright_2.png'])

    await page.waitForTimeout(5000)

});

test.only('New approach to download a file', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('input[name="files[]"]',['tests/filesToUpload/playwright_1.png']);
    await page.waitForTimeout(5000)
})