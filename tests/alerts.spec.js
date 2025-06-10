const{test,expect}=require('@playwright/test')

test('Alerts', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //Alert
    
    /*page.on('dialog',async dialog=>{

        await expect(dialog.type()).toContain('alert')
        await expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

    })

    await page.locator('#alertBtn').click()*/

    //confirm
    page.on('dialog', async dialog=>{

        await expect(dialog.type()).toContain('confirm')
        await expect(dialog.message()).toContain('Press a button')
        await dialog.dismiss()
    })

    await page.locator('#confirmBtn').click()
    
    await page.waitForTimeout(3000)

})