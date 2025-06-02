const {test, expect}=require('@playwright/test')

test('checkbox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#sunday').check()
    await expect(await page.locator('#sunday').isChecked()).toBeTruthy()
    await page.locator('#sunday').uncheck()
    await expect(await page.locator('#sunday').isChecked()).toBeFalsy()
    

    const multi=["#sunday","#tuesday","#thursday","#saturday"]
    for(let split of multi){

        let mark =await page.locator(split)
        console.log(split);
        await mark.check()
        
    }
    await page.waitForTimeout(3000)


})