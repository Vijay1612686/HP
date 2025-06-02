const {test, expect}=require('@playwright/test')

test('Assertion',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveTitle('Automation Testing Practice')
    await page.goto('https://www.instagram.com/')
    await expect(page.locator('//button[@type="submit"]')).toBeDisabled()
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator('//a[text()="GUI Elements"]')).toHaveText('GUI Elements')
    await expect(page.locator('//a[text()="GUI Elements"]')).toBeVisible()
        
    //await expect(page.locator('//button[@class="START"]')).toBeEnabled()
    //await expect(page.locator('//button[@class="START"]')).toBeVisible()
    
    await page.waitForTimeout(3000)
    

})