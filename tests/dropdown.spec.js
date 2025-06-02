const {test, expect}=require('@playwright/test')

test('dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator('#country').selectOption('Brazil')
    //await page.locator('#country').selectOption({label : 'China'})
    //await page.locator('#country').selectOption({value : 'china'})
    //await page.locator('#country').selectOption({index:9})
    //await page.locator('#country',"India")

    //assertion type 1
    const count=await page.locator('#country option')
    await expect (count).toHaveCount(10)

   //assertion type 2
   const option=await page.$$('#country option')
   //console.log("Number of options",option.length)
   await expect (option.length).toBe(10)

   await page.selectOption('#colors',['Red','Blue','Yellow','White'])


   await page.waitForTimeout(5000)

})