const{test, expect}=require('@playwright/test')

test('Auto suggest', async({page})=>{

    await page.goto('https://www.redbus.in/')
    await page.getByText('From', { exact: true }).click();
  await page.getByRole('textbox', { name: 'From' }).fill('ch');
  await page.getByText('CMBT, Chennai, Chennai').click();
    

    await page.waitForTimeout(4000)

})

// await page.locator('(."label___cef6ea ")[2]')
    //await page.locator('//div[text()="From"]');
   // await page.fill('Chennai');  