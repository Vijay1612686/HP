const {test, expect}=require('@playwright/test');
const { url } = require('inspector');

test('Frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')
  
//total frames

    const totalframes=await page.frames()
    console.log("Number of frames:",totalframes.length);

//type 1--> using name or url
//using name-->const varname=await page.frame('name')

    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill('[name="mytext1"]','Hello')
    await frame1.fill('//input[@type="text"]', "Hello")  
    
//type 2--> using frame locator

    await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]').fill("Hello")
    
    const frame2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
    await frame2.fill('[name="mytext2"]',"Welcome")

    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.fill('[name="mytext3"]',"To the")

    const frame4=await page.frameLocator('frame[src="frame_4.html"]').locator('[name="mytext4"]')
    await frame4.fill("Money World")

//Nested frames--> use childframe command

    const child=await frame3.childFrames()
    child[0].locator('//*[@id="i9"]/div[3]/div').click()    
    child[0].locator('//*[@id="i21"]/div[2]').check()
    
    await page.waitForTimeout(3000)
    
})