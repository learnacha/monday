import { test, expect } from '@playwright/test';

const signinUrl = 'http://localhost:4200/auth/signin';
const signupUrl = 'http://localhost:4200/auth/signup';
const dashboardUrl = 'http://localhost:4200/dashboard';
const validEmail = 'test@example.com';

test.describe('GIVEN Dashboard page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(signupUrl);
    page.getByPlaceholder('name@company.com').fill(validEmail);
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.waitForURL(signinUrl);
    await page.getByPlaceholder('Example@company.com').fill(validEmail);
    await page.getByRole('button', { name: 'Next' }).click();

    await page.waitForURL(dashboardUrl);
  });

  test('WHEN dashboard is visited THEN display relevant information', async ({ page }) => {
    await expect(await page.getByText(`Hello ${validEmail}`)).toBeVisible();
    await expect(await page.getByRole('button', { name: 'Logout', exact: true })).toBeVisible();
  });

  test('WHEN logout is clicked THEN redirect to login page', async ({ page }) => {
    await expect(await page.getByRole('button', { name: 'Logout', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Logout', exact: true }).click();

    await page.waitForURL(signinUrl);
    await expect(await page.getByText('Log in to your account')).toBeVisible();
  });
});
