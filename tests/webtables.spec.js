const{test, expect}=require('@playwright/test')
const { log } = require('console')

test('Webtable', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table=await page.locator('#productTable')

//1) calculate total number of rows and columns

    const column=await table.locator('thead tr th')
    console.log("Number of columns:",await column.count());
    expect(await column.count()).toBe(4)

    const row=await table.locator('tbody tr')
    console.log("Number of rows:", await row.count());
    expect(await row.count()).toBe(5)

//2)select check box for one product only

    // const matchedrow=row.filter({
    //     has: page.locator('td'),
    //     hasText: 'Laptop'
    // })
    //    await matchedrow.locator('input').check()
//3)To select multiple products need to use reusable function --> async function name(params) {}

/*    await selectproduct(row, page, 'Smartphone')
    await selectproduct(row, page, 'Laptop')
    await selectproduct(row, page, 'Smartwatch')
    await selectproduct(row, page, 'Wireless Earbuds')*/

//4)Print all product details using loop
    /*for(let x=0;x<await row.count();x++)//outer loop-->to calculate rows
    {
        const currentrow=row.nth(x)
        const tds=currentrow.locator('td')

        for(let y=0; y<await tds.count()-1; y++)//inner loop-->to calculate columns, (-1)-->to remove last column 
        {
            console.log(await tds.nth(y).textContent())
        }
    }*/

//5)Read data from all the pages in the table

    const pages=await page.locator('#pagination li a')//need to calculate total number of pages
    console.log('Number of pages in the table:', await pages.count());
    
    for(let z=0 ; z< await pages.count() ; z++)//used to repeat the number of pages
    {
        if(z>0)
        {
            await pages.nth(z).click()
        }
    for(let x=0;x<await row.count();x++)//outer loop-->to calculate rows
    {
        const currentrow=row.nth(x)
        const tds=currentrow.locator('td')

        for(let y=0; y<await tds.count()-1; y++)//inner loop-->to calculate columns, (-1)-->to remove last column 
        {
            console.log(await tds.nth(y).textContent())
        }
    }
    await page.waitForTimeout(3000)
    }
    
   /* await selectproduct(row, page, 'Bluetooth Speaker')
    await selectproduct(row, page, 'Digital Camera')
    await selectproduct(row, page, 'Router')
    await selectproduct(row, page, 'Fitness Tracker')*/

    await selectproduct(row, page, 'Soundbar')
    await selectproduct(row, page, 'Wireless Mouse')    
    await page.waitForTimeout(3000)   

})


    async function selectproduct (row, page, name) {
        const matchedrow=row.filter ({
         has: page.locator('td'),
         hasText: name
        })
        await matchedrow.locator('input').check()
        
    }

    
        
    

