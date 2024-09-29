import { test } from '@playwright/test';

test.describe('Test Group', () => {

  //create a before each for tests
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');
  });
       
  
  test('Check() checks the radio buttons and checkboxes if they havnt been checked yet', async ({ page }) => {
    

    // web element ==>  <a href="/checkboxes">Checkboxes</a>
    // 1) xpath locator:
    //a[text()='Checkboxes']
    // 2) CSS locator:
    //a[href='/checkboxes']
    // 3) Text locator:
    //text='Checkboxes'
    
    let checkboxesLink = page.locator("text='Checkboxes'");
   
    await checkboxesLink.click();

    // web element ==>  <input type="checkbox" name="checkbox1" id="box1">
    // 1) xpath locator:
    //input[@id='box1']
    // 2) CSS locator:
    //#box1

    let checkBox1 = page.locator("#box1");

    await checkBox1.check();
    
  });


  test('unchecked() unchecks the radio buttons and checkboxes if they havnt been unchecked yet', async ({ page }) => {
    
    let checkboxesLink = page.locator("text='Checkboxes'");
   
    await checkboxesLink.click();

    // web element ==>  <input type="checkbox" name="checkbox2" id="box2" checked="">
    // 1) xpath locator:
    //input[@id='box2' and @checked='']
    // 2) CSS locator:
    //#box2

    let checkBox2 = page.locator("#box2");
    
    await checkBox2.uncheck();
    

  });

  test('selectOption() used for dropdown', async ({ page }) => {

    // web element ==>  <a href="/dropdown">Dropdown</a>
    // 1) xpath locator:
    //a[text()='Dropdown']
    // 2) CSS locator:
    //a[href='/dropdown']
    // 3) Text locator:
    //text='Dropdown'

    page.locator("a[href='/dropdown']").click();

    
       
    // xpath locator: //select[@id='dropdown']
    // CSS locator: #dropdown
    
          /*
          <select id="dropdown">
            <option value="" disabled="disabled" selected="selected">Please select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            </select>
          */

    let simpleDropDown = page.locator("#dropdown");
   
    // Dropdown menuden secim yapmak icin 3 yontem kullanilir

    // 1) select by value:
    //await simpleDropDown.selectOption("1");
    
    
    // 2) select by visible text:
    //await simpleDropDown.selectOption({ label: "Option 2" });
    
    
    // 3) select by index:
     await simpleDropDown.selectOption({ index: 2 });
     

  });

  test('innerText() retrives the visible text', async ({ page }) => {

    //web element ==> <span class="h1y">Test Automation Practice</span>
    // 1) xpath locator:
    //span[@class='h1y']
    // 2) CSS locator:
    //.h1y  
    
    let headerElement = page.locator("//span[@class='h1y']");

    let actualText = await headerElement.innerText();

    console.log(actualText);
   
 });


 test('inputValue(): only works with <input>, <textarea>, <select>', async ({ page }) => {

  //web element ==>  <a href="/inputs">Inputs</a>
  // 1) xpath locator:
  //a[text()='Inputs']
  // 2) CSS locator:
  //a[href='/inputs']
  // 3) Text locator:
  //text='Inputs'

  let inputsLink = page.getByText("Inputs");
  
  
  //await inputsLink.scrollIntoViewIfNeeded();  // scroll manually, fakat bu gereksiz. Cunku playwright bunu otomatik yapiyor.
  

  await inputsLink.click();

  //web element ==>  <input type="number"></input>
  // 1) xpath locator:
  //input[@type='number']
  // 2) CSS locator:
  //input[type='number']

  let inputBox = page.locator("//input[@type='number']");

  


  await inputBox.fill("123456");

  

  let inputValue = await inputBox.inputValue();

  console.log(inputValue);

});

});
