const{test, expect}=require('@playwright/test')

test('Keyboard', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill('#name','Trendnologies')
    await page.keyboard.press('Control+a')
    await page.keyboard.press('Control+x')
    await page.keyboard.down('Tab')
    await page.keyboard.press('Control+v')
    await page.keyboard.press('Shift+Tab')
    await page.keyboard.insertText('Vijay')
    await page.keyboard.down('Tab')
    await page.keyboard.down('Tab')
    await page.keyboard.insertText('8056054291')

    await page.waitForTimeout(3000)

})