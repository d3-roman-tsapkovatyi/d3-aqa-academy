import { test, expect, Locator } from '@playwright/test';

test('new test', async ({ page }) => {
    await page.goto('https://preuatdaa.z13.web.core.windows.net/auth/login');
    await page.pause();
  
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.locator('input[formcontrolname="username"]').fill('daa@user.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('potatoes');
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    // await expect(page.locator('button span span')).toContainText('LOGIN FAILED');
  
    const myNumber = 6;
    console.log(myNumber);
  });
  