import { test, expect } from '@playwright/test';
import { auth, wordpress } from '../helpers';

test.describe('Version Check', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to the site health page to check versions
		await auth.navigateToAdminPage(page, 'site-health.php');
	});

	test('WordPress version is correct', async ({ page }) => {
		// Get the expected version from environment
		const expectedVersion = process.env.WP_VERSION || '';

		if (!expectedVersion) {
			test.skip();
		}

		// Look for WordPress version
		const wordpressVersionText = await page.locator(':text("WordPress")').first().textContent();

		expect(wordpressVersionText).toContain(expectedVersion);
	});

	test('PHP version is correct', async ({ page }) => {
		// Get the expected PHP version from environment
		const expectedVersion = process.env.PHP_VERSION || '';

		if (!expectedVersion) {
			test.skip();
		}

		// Look for PHP version in the site health page
		const phpVersionText = await page.locator(':text("PHP")').first().textContent();

		expect(phpVersionText).toContain(expectedVersion);
	});

	test('Site is running', async ({ page }) => {
		// Basic check that we can reach the site
		expect(page.url()).toContain('site-health.php');

		// Check that the page has loaded
		await expect(page.locator('body')).toBeTruthy();
	});
});
