const {test, expect}=require('@playwright/test')

test('Multi elements', async({page})=>{

    await page.goto('https://demoblaze.com/')
    const links=await page.$$('a')

    for(const link of links){

        const linktext=await link.textContent();
        console.log(linktext);
        
    }

    await page.waitForSelector("//div[@id='tbodyid']//div//h4")
    const products=await page.$$("//div[@id='tbodyid']//div//h4")

    for(const product of products){

        const productlink=await product.textContent();
        console.log(productlink);
        
    }
    

    await page.waitForTimeout(3000)
})