const {test, expect}=require ('@playwright/test')

test.skip ('Homepage Screenshot', async({page})=>{

    await page.goto('https://www.myntra.com/?utm_source=dms_trafficaffiliates&utm_medium=ri_rev&utm_campaign=dms_trafficaffiliates_ri_rev_119243&gad_source=1&gad_campaignid=22595056014&gbraid=0AAAAABrlNvYj7E0XvrzQA6CRA9dYq7Zq4&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rhqkM8jSrBBeiUvFj46RAYqQINutVkyv7b_RvPK_ewIelYJInR44cRoCFuMQAvD_BwE')
    await page.screenshot({path:'C:/Users/esan/VS codes/Playwright/tests/pic.spec.js'+Date.now()+'Homepage.png'})  

})

test.skip('Fullpage screenshot', async({page})=>{

    await page.goto('https://www.myntra.com/?utm_source=dms_trafficaffiliates&utm_medium=ri_rev&utm_campaign=dms_trafficaffiliates_ri_rev_119243&gad_source=1&gad_campaignid=22595056014&gbraid=0AAAAABrlNvYj7E0XvrzQA6CRA9dYq7Zq4&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rhqkM8jSrBBeiUvFj46RAYqQINutVkyv7b_RvPK_ewIelYJInR44cRoCFuMQAvD_BwE')
    await page.screenshot({path:'C:/Users/esan/VS codes/Playwright/tests/pic.spec.js'+Date.now()+'Fullpage.png',fullPage: true})

})

test ('Element', async({page})=>{

    await page.goto('https://www.myntra.com/?utm_source=dms_trafficaffiliates&utm_medium=ri_rev&utm_campaign=dms_trafficaffiliates_ri_rev_119243&gad_source=1&gad_campaignid=22595056014&gbraid=0AAAAABrlNvYj7E0XvrzQA6CRA9dYq7Zq4&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rhqkM8jSrBBeiUvFj46RAYqQINutVkyv7b_RvPK_ewIelYJInR44cRoCFuMQAvD_BwE')
    await page.locator('//div[@class="desktop-user"]').screenshot({path:'C:/Users/esan/VS codes/Playwright/tests/pic.spec.js'+Date.now()+'Element.png'})

})