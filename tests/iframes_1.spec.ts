//Frames are an HTML feature used to divide the webpage into multiple independent sections, each with its own source URL.
//Each frame accesses a different DOM, with its own HTML, CSS and Javascript

// import {test} from '@playwright/test'

// test('Handling frames using Page.Frame()', async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/');

//     //To find the total number of frames
    
//     const allFrames = page.frames();
//     const allFramesCount = allFrames.length;
//     console.log('Total number of frames is: ' + allFrames);
//     // Individuating the frames through the URL since this frame has no name
//     const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
//     await frame1?.locator('input[name="mytext1"]').fill('Playwright');

//     //We ask playwright to wait for 5 seconds
//     await page.waitForTimeout(5000);
//     await page.close();
// });

import {test} from '@playwright/test'

test('Handling frames using Page.grameLocator()', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //To find the total number of frames
    
    const allFrames = page.frames();
    const allFramesCount = allFrames.length;
    console.log('Total number of frames is: ' + allFrames);
    // Individuating the frames through the URL since this frame has no name
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    await frame1?.locator('input[name="mytext1"]').fill('Playwright');

    //We ask playwright to wait for 5 seconds
    await page.waitForTimeout(5000);
    await page.close();
});