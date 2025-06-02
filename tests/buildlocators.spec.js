// page.getByAltText() - to locate an element, usually image, by its text alternative.
// page.getByPlaceholder() - to locate an input by placeholder.
// page.getByRole() to locate by explicit and implicit (or any type of elements) accessibility attributes.
// page.getByText() to locate by text content.

// page.getByLabel() to locate a form control by associated label's text.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

const {test, expect} =require ('@playwright/test')

test ('built locators',async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo =await page.getByAltText('company-branding')
    await expect(logo).toBeVisible
    await page.getByTitle('OrangeHRM')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:'submit'}).click()
    
    

    await page.waitForTimeout(3000)

})

    

//await page.getByLabel('Topbar Menu').toBeVisible()
//await page.getByPlaceholder('Search').fill('Admin')
    //await page.getByText('Tester User').click()
    //await page.getByRole('a',{role:'menuitem'}).click()