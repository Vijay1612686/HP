import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('fasdf');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('1234343');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByLabel('Log in').getByText('Close').click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
});
//npx playwright codegen --target  -->if we set target it will automatically populates next line. Ex:Login
//npx playwright codegen --device"iPhone 12"
//npx playwright codegen --viewport-size "1280,720"

