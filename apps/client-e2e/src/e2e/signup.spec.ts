import { test, expect } from '@playwright/test';

const signinUrl = 'http://localhost:4200/auth/signin';
const signupUrl = 'http://localhost:4200/auth/signup';
const validEmail = 'test@example.com';
const invalidEmail = 'invalidemail';

test.describe('GIVEN Signup page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(signupUrl);
  });

  test('WHEN signup page requested THEN render required controls', async ({ page }) => {
    await expect(await page.getByText('Welcome to monday.com')).toBeVisible();
    await expect(await page.getByPlaceholder('name@company.com')).toBeVisible();
    await expect(await page.getByRole('button', { name: 'Continue', exact: true })).toBeVisible();
    await expect(await page.getByRole('link', { name: 'Log in' })).toBeVisible();
  });

  test('WHEN invalid emailid entered THEN display error message', async ({ page }) => {
    await expect(await page.getByText('Welcome to monday.com')).toBeVisible();
    page.getByPlaceholder('name@company.com').fill(invalidEmail);
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await expect(await page.getByText('Please enter a valid email address')).toBeVisible();
  });

  test('WHEN valid emailid is entered THEN register and redirect to login page', async ({ page }) => {
    await expect(await page.getByText('Welcome to monday.com')).toBeVisible();
    page.getByPlaceholder('name@company.com').fill(validEmail);
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.waitForURL(signinUrl);
    await expect(await page.getByText('Log in to your account')).toBeVisible();
  });

  test('redirects to Login from the sign up page link', async ({ page }) => {
    await expect(await page.getByRole('link', { name: 'Log in' })).toBeVisible();
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(await page.getByText('Log in to your account')).toBeVisible();
  });
});
