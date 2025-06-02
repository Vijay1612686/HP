const {test, expect}=require('@playwright/test')

test('Example', async({page})=>{
    
    await page.goto('https://www.myntra.com/')
    await page.hover('(//a[text()="Kids"])[1]')
    await page.locator('(//a[text()="Shorts"])[2]').click()
    await page.locator('(//div[@class="common-checkboxIndicator"])[1]').click()
    await page.locator('//div[@class="categories-more"]').click()
    await page.locator('//ul[@class="FilterDirectory-indices"]//li[@data-item="t"]').click()
    await page.getByPlaceholder("Search categories").fill('Trac')
    await page.locator('(//div[@class="common-checkboxIndicator"])[334]').click()
    await page.locator('//span[@class="myntraweb-sprite FilterDirectory-close sprites-remove"]').click()

    await page.waitForTimeout(5000)

})