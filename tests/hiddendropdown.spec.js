const {test, expect}=require('@playwright/test')
const { log } = require('console')

test('Hidden dropdown', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.locator('[type="submit"]').click()
    await page.locator('//span[normalize-space()="PIM"]').click()

    //for hidden dropdown--> to view hidden dropdown use selector hub turn on debugger
    await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click()
    await page.waitForTimeout(5000)
    const options=await page.$$('//div[@role="listbox"]//span')
    for(let option of options)
        {
            const jobTitle=await option.textContent()
            console.log(jobTitle);
            
        }

     //  await page.$$('//div[@role="listbox"],//span[text()="Chief Financial officer"]').click()

        await page.waitForTimeout(3000)

})