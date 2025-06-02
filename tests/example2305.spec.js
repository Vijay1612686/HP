const {test, expect} = require('@playwright/test')

test ('Sample',async({page})=>{
    await page.goto('https://www.facebook.com/')
    await page.getByLabel('Email address or phone number').fill('8056054291')
    await page.getByPlaceholder('Password').fill('Vijay@16')
    await page.getByTestId('royal-login-button').click() 
    await page.getByLabel('Notifications').click()

    await page.waitForTimeout(5000)
})

//await page.getByTitle('Facebook').toBeVisible()
//await page.getByText('Vijay Krish').click()
