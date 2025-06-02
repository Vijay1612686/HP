//await --> it used to wait or to load the test until it completes
//async --> it is used to navigate to another test cases
    
const {test, expect} = require('@playwright/test')

test('Home page',async ({page})=>{

await page.goto('https://www.youtube.com/');

})

