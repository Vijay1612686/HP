const {test, expect}=require ('@playwright/test')

test ('mouse action', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.mouse.wheel(0,700)
    await page.mouse.wheel(0,-600)
    //await page.click('//a[text()="Blog"]',{button : "right"})
    await page.click('//a[text()="Blog"]',{button : "left"})
    await page.waitForTimeout(4000)

})