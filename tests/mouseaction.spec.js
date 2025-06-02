const {test, expect}=require ('@playwright/test')

test ('mouse action', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const clik=await page.locator('//button[text()="Copy Text"]')
    await clik.dblclick()
    await expect (page.locator('#field2')).toHaveValue('Hello World!')
    await page.waitForTimeout(3000)


})