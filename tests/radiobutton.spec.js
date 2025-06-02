const {test, expect}=require('@playwright/test')

test ('radiobutton',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.check('#female')
    await expect(page.locator('#female')).toBeChecked()
    await page.check('#male')
    await page.waitForTimeout(3000)

})