const{test, expect}=require('@playwright/test')

test('Upload file', async({page})=>{

    //await page.goto('https://demo.automationtesting.in/FileUpload.html')
    //CHANGE FORWARD SLASH \ TO OPPOSITE SLASH /
    //await page.locator('#input-4').setInputFiles('C:/Users/esan/Downloads/JOINS QUERY.txt')
    //await expect (page.locator('#preview-1749004377621-0')).toHaveText('JOINS QUERY.txt')
    
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles('C:/Users/esan/Downloads/JOINS QUERY.txt')
    await expect(page.locator('#fileList')).toHaveText('JOINS QUERY.txt')


    await page.waitForTimeout(3000)

})