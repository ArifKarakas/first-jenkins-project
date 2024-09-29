import { test } from '@playwright/test';

test.describe('@smoke Test Group1', () => {   //tagname verdik. Buradaki tum testleri gorur.
  
  //create beforeEach tests
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');
  });

  //create afterEach tests
  test.afterEach(async ({ page }) => {
    
  });

  test('Getting the title of the page', async ({ page }) => {
    console.log(await page.title());
  });

  test('Getting the current URL of the page', async ({ page }) => {  //burada da tagname verilebilir. Sadece bunu calistirir. json file uzerinden.
    console.log(page.url());
    
  });

  
});