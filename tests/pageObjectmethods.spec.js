
import { test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {  //eger birden fazla test varsa, dikkat!!! herbir test description unique olmali, yoksa hata verir
  
  //goto https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");

  let actualTitle = await page.title();     // web sayfasinin basligini/title ceker.

  console.log(actualTitle);

  console.log(await page.title());      // console icerisinde direkt method da kullanilabilir.
  
});


test('Getting the current URL of the page', async ({ page }) => {
 
  await page.goto('https://practice.cydeo.com/');

  let currentUrl = page.url();  //url method promise olmadigindan await gerektirmiyor

  console.log(currentUrl);
});


test('Set the window size', async ({ page }) => {
  // await page.goto('https://practice.cydeo.com/');

  await page.setViewportSize({width: 1900, height: 1080});

  await page.goto('https://practice.cydeo.com/');

});
