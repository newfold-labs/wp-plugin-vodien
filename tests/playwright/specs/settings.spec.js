import { test, expect } from '@playwright/test';
import { auth, a11y, newfold } from '../helpers';

test.describe('Settings', () => {
	test.beforeEach(async ({ page }) => {
		await auth.navigateToAdminPage(page, 'admin.php?page=vodien#/settings');
	});

	test('Settings page is accessible', async ({ page }) => {
		await a11y.checkA11y(page, '.wppv-app-body');
	});

	test('Coming Soon section is visible', async ({ page }) => {
		// Check Coming Soon header
		await expect(page.locator('.wppv-page-settings .wppv-card-header:has-text("Coming Soon")')).toBeVisible();

		// Check Coming Soon toggle
		await expect(page.locator('#wppv-coming-soon-toggle')).toBeVisible();
	});

	test('Coming Soon toggle can be toggled', async ({ page }) => {
		// Get initial state
		const initialAriaChecked = await page.locator('#wppv-coming-soon-toggle').getAttribute('aria-checked');

		// Click the toggle
		await page.click('#wppv-coming-soon-toggle');

		// Wait for any animations
		await page.waitForTimeout(300);

		// Get new state
		const newAriaChecked = await page.locator('#wppv-coming-soon-toggle').getAttribute('aria-checked');

		// States should be different
		expect(newAriaChecked).not.toBe(initialAriaChecked);
	});

	test('Auto Updates section contains options', async ({ page }) => {
		// Check Auto Updates header
		await expect(page.locator('.wppv-page-settings .wppv-card-header:has-text("Automatic Updates")')).toBeVisible();

		// Check for various update toggle options
		const updateToggles = page.locator('.wppv-page-settings input[type="checkbox"]');
		const count = await updateToggles.count();

		// Should have at least 3 update toggles (Core, Plugins, Themes)
		expect(count).toBeGreaterThanOrEqual(3);
	});

	test('Auto Updates plugins toggle is visible', async ({ page }) => {
		await expect(page.locator('#wppv-autoupdate-plugins-toggle')).toBeVisible();
	});

	test('Auto Updates themes toggle is visible', async ({ page }) => {
		await expect(page.locator('#wppv-autoupdate-themes-toggle')).toBeVisible();
	});

	test('Auto Updates core toggle is visible', async ({ page }) => {
		await expect(page.locator('#wppv-autoupdate-core-toggle')).toBeVisible();
	});

	test('Content Controls section is visible', async ({ page }) => {
		// Check Content Controls header
		await expect(page.locator('.wppv-page-settings .wppv-card-header:has-text("Content Controls")')).toBeVisible();

		// Check XML Sitemap toggle
		await expect(page.locator('#wppv-xml-sitemap-toggle')).toBeVisible();

		// Check Rest API toggle
		await expect(page.locator('#wppv-rest-api-toggle')).toBeVisible();
	});

	test('Content Controls XML Sitemap toggle works', async ({ page }) => {
		// Get initial state
		const initialState = await page.locator('#wppv-xml-sitemap-toggle').getAttribute('aria-checked');

		// Click the toggle
		await page.click('#wppv-xml-sitemap-toggle');

		// Wait for any animations
		await page.waitForTimeout(300);

		// Get new state
		const newState = await page.locator('#wppv-xml-sitemap-toggle').getAttribute('aria-checked');

		// States should be different
		expect(newState).not.toBe(initialState);
	});

	test('Content Controls Rest API toggle works', async ({ page }) => {
		// Get initial state
		const initialState = await page.locator('#wppv-rest-api-toggle').getAttribute('aria-checked');

		// Click the toggle
		await page.click('#wppv-rest-api-toggle');

		// Wait for any animations
		await page.waitForTimeout(300);

		// Get new state
		const newState = await page.locator('#wppv-rest-api-toggle').getAttribute('aria-checked');

		// States should be different
		expect(newState).not.toBe(initialState);
	});

	test('Discussion Controls section is visible', async ({ page }) => {
		// Check Discussion Controls header
		await expect(page.locator('.wppv-page-settings .wppv-card-header:has-text("Discussion Controls")')).toBeVisible();

		// Check Comments toggle
		await expect(page.locator('#wppv-comments-toggle')).toBeVisible();
	});

	test('Discussion Controls Comments toggle works', async ({ page }) => {
		// Get initial state
		const initialState = await page.locator('#wppv-comments-toggle').getAttribute('aria-checked');

		// Click the toggle
		await page.click('#wppv-comments-toggle');

		// Wait for any animations
		await page.waitForTimeout(300);

		// Get new state
		const newState = await page.locator('#wppv-comments-toggle').getAttribute('aria-checked');

		// States should be different
		expect(newState).not.toBe(initialState);
	});

	test('Discussion Controls Pingbacks toggle is visible', async ({ page }) => {
		await expect(page.locator('#wppv-pingbacks-toggle')).toBeVisible();
	});

	test('Discussion Controls Pingbacks toggle works', async ({ page }) => {
		// Get initial state
		const initialState = await page.locator('#wppv-pingbacks-toggle').getAttribute('aria-checked');

		// Click the toggle
		await page.click('#wppv-pingbacks-toggle');

		// Wait for any animations
		await page.waitForTimeout(300);

		// Get new state
		const newState = await page.locator('#wppv-pingbacks-toggle').getAttribute('aria-checked');

		// States should be different
		expect(newState).not.toBe(initialState);
	});

	test('Discussion Controls Trackbacks toggle is visible', async ({ page }) => {
		await expect(page.locator('#wppv-trackbacks-toggle')).toBeVisible();
	});

	test('Discussion Controls Trackbacks toggle works', async ({ page }) => {
		// Get initial state
		const initialState = await page.locator('#wppv-trackbacks-toggle').getAttribute('aria-checked');

		// Click the toggle
		await page.click('#wppv-trackbacks-toggle');

		// Wait for any animations
		await page.waitForTimeout(300);

		// Get new state
		const newState = await page.locator('#wppv-trackbacks-toggle').getAttribute('aria-checked');

		// States should be different
		expect(newState).not.toBe(initialState);
	});
});
