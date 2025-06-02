const{test, expect}=require('@playwright/test')

test('Drag and drop', async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette')
    const box=await page.locator('#box3')
    const box1=await page.locator('#box103')
    await box.dragTo(box1)

    const box2=await page.locator('#box2')
    const box3=await page.locator('#box106')
    await box2.dragTo(box3)

    const box4=await page.locator('#box6')
    const box5=await page.locator('#box107')
    await box4.dragTo(box5)

    await page.waitForTimeout(3000)

})