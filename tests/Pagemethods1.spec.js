//another way to import test and expect
//import {test,expect} from '@playwright/test'
const {test, expect} = require('@playwright/test')

test('Home page',async ({page})=>{

await page.goto('https://demoblaze.com/');

const pagetitle=page.title();
await expect(page).toHaveTitle('STORE')

//await page.locator('#login2').click()
//another way--> await page.click(locator)
await page.click('#login2')
await page.locator('#loginusername').fill("abcdefgh")
await page.locator('#loginpassword').fill("12345678")
await page.click("//button[normalize-space()='Log in']")
await page.click('#cartur')
await page.click("//button[normalize-space()='Place Order']")
await page.goBack()
await page.goForward()
await page.goto('https://testautomationpractice.blogspot.com/')
await page.check('#male')
await page.check('#sunday')
await page.uncheck('#sunday')
await page.waitForTimeout(3000)


})
//await page.click('#logout2')

//example
// const {test, expect} = require('@playwright/test')

// test('trip', async({page})=>{

//     await page.goto('https://www.makemytrip.com/')
//     setTimeout(() => {
        
//     }, 9000);
//     await page.locator('xpath=//input[@id="fromCity()"]')
//     await page.click('xpath=//input[@id="fromCity()"]')

// })
