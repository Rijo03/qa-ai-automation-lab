import {test, expect} from '@playwright/test'


const testurl = 'https://www.saucedemo.com/'
const loginbtn = '#login-button';
test('login page renders', async({page}) =>{

    await page.goto(testurl);
    await expect (page.locator(loginbtn)).toBeVisible();

})