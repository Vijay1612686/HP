const{test, expect}=require('@playwright/test')

test('Multiple file', async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(['C:/Users/esan/Downloads/JOINS QUERY.txt','C:/Users/esan/OneDrive/Desktop/Github.txt','C:/Users/esan/OneDrive/Desktop/Jenkins.txt'])
    await page.locator('#filesToUpload').setInputFiles([])    

    await page.waitForTimeout(3000)
})