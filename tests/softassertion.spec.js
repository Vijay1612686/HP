const {test, expect}=require('@playwright/test')

test('Assertion',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo =await page.getByAltText('//img[@alt="company-branding"]')
    await expect.soft(logo).toBeVisible()
    await page.fill('[placeholder="Username"]','Admin')
    await page.fill('[placeholder="Password"]','admin123')
    await page.click('//button[@type="submit"]')
    await page.waitForTimeout(3000)


})