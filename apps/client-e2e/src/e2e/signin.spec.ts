import { test, expect } from '@playwright/test';

const signinUrl = 'http://localhost:4200/auth/signin';
const signupUrl = 'http://localhost:4200/auth/signup';
const dashboardUrl = 'http://localhost:4200/dashboard';
const validEmail = 'test@example.com';
const invalidEmail = 'invalidemail';

test.describe('GIVEN Signin page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(signinUrl);
  });

  test('WHEN login page requested THEN render required controls', async ({ page }) => {
    await expect(await page.getByText('Log in to your account')).toBeVisible();
    await expect(await page.getByRole('heading', { name: 'Log in to your account' })).toBeVisible();
    await expect(await page.getByText('Enter your work email address')).toBeVisible();
    await expect(await page.getByPlaceholder('Example@company.com')).toBeVisible();
    await expect(await page.getByRole('button', { name: 'Next' })).toBeVisible();
    await expect(await page.locator('div').filter({ hasText: 'Or Sign in with' }).nth(3)).toBeVisible();
    await expect(await page.getByRole('button', { name: 'Google logo Google' })).toBeVisible();
    await expect(await page.getByText("Don't have an account yet? Sign up")).toBeVisible();
    await expect(await page.getByRole('link', { name: 'Sign up' })).toBeVisible();
  });

  test('WHEN invalid email address entered THEN display error message', async ({ page }) => {
    page.getByPlaceholder('Example@company.com').fill(invalidEmail);
    page.getByRole('button', { name: 'Next' }).click();
    await expect(await page.getByText('Invalid email format, kindly enter the valid email address')).toBeVisible();
  });

  test('WHEN valid email id is entered and not registered THEN display error message', async ({ page }) => {
    await page.getByPlaceholder('Example@company.com').click();
    page.getByPlaceholder('Example@company.com').fill(validEmail);
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(await page.getByText('Email ID not found, kindly sign up to proceed')).toBeVisible();
  });

  test('WHEN signup link clicked THEN redirects to signup page', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.waitForURL(signupUrl);
    await expect(await page.getByText('Welcome to monday.com')).toBeVisible();
  });

  test('WHEN login failed THEN register user and login', async ({ page }) => {
    await page.getByPlaceholder('Example@company.com').fill(validEmail);
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(await page.getByText('Email ID not found, kindly sign up to proceed')).toBeVisible();

    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.waitForURL(signupUrl);
    await page.getByText('Welcome to monday.com');
    await page.getByPlaceholder('name@company.com').fill(validEmail);
    await page.getByRole('button', { name: 'Continue', exact: true }).click();

    await page.waitForURL(signinUrl);
    await page.getByPlaceholder('Example@company.com').fill(validEmail);
    await page.getByRole('button', { name: 'Next' }).click();

    await page.waitForURL(dashboardUrl);
    await expect(await page.getByText(`Hello ${validEmail}`)).toBeVisible();
  });
});
