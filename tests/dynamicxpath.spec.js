const{test, expect}=require('@playwright/test')

test('dynamic xpath', async({page})=>{

    await page.goto('https://www.amazon.in')
    /*dynamic xpath
    //span[text()="₹69,900"]/parent::span/parent::span/parent::span/parent::span/parent::div/parent::div/child::div/child::span/following-sibling::span/following-sibling::span/child::span/following-sibling::span/child::span/following-sibling::span
    */

    await page.getByRole('searchbox').fill('one plus')
    await page.keyboard.press('Enter')
    await page.locator('//h2[@aria-label="Sponsored Ad - OnePlus Nord 4 5G (Oasis Green, 8GB RAM, 256GB Storage) | Lifetime Display Warranty | Qualcomm® Snapdragon™ 7 Plus Gen 3 | ANTUTU Score 1.5Mn AI"]').click()
    await page.locator('//span[text()="₹32,999"]//ancestor::span//parent::div//preceding-sibling::div//child::span//following-sibling::span')
    
    await page.waitForTimeout(25000)
    
})
    