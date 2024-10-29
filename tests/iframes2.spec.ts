// //How to handle nested frames. 
// This code works on retry but it does not convince me much, let's look for possible alternatives

// import {test} from '@playwright/test'

// test('Handling frames using Page.grameLocator()', async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/');

//     const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

//     const childFrames = frame3?.childFrames();
//     console.log('Number of child frames is: ' + childFrames?.length)

//     await childFrames[0].locator('//*[@id="i8"]/div[3]/div').check({force:true});
//     await childFrames[0].locator('//*[@id="i19"]/div[2]').check({force:true});

//     await page.waitForTimeout(5000)
//     await page.close();
// });