

const {test, expect} = require('@playwright/test');


test('Auto', async ({page}) => {

  await page.goto('https://www.logitech.com/en-in/products/mice.html'); 

});


