import { test, expect } from '@playwright/test';
import { auth } from '../helpers';

test.describe('Visual Regression Testing (VRT)', () => {
	// Visual regression tests are typically skipped in CI environments
	// These are placeholder tests for local visual regression testing

	test.skip('[VRT] Admin Dashboard', async ({ page }) => {
		const pluginId = process.env.PLUGIN_ID || 'vodien';
		await auth.navigateToAdminPage(page, `admin.php?page=${pluginId}`);

		await expect(page).toHaveScreenshot();
	});

	test.skip('[VRT] Dashboard Widgets', async ({ page }) => {
		const pluginId = process.env.PLUGIN_ID || 'vodien';
		await auth.navigateToAdminPage(page, `admin.php?page=${pluginId}#/dashboard`);

		await expect(page).toHaveScreenshot();
	});

	test.skip('[VRT] Settings Page', async ({ page }) => {
		const pluginId = process.env.PLUGIN_ID || 'vodien';
		await auth.navigateToAdminPage(page, `admin.php?page=${pluginId}#/settings`);

		await expect(page).toHaveScreenshot();
	});

	test.skip('[VRT] Help Page', async ({ page }) => {
		const pluginId = process.env.PLUGIN_ID || 'vodien';
		await auth.navigateToAdminPage(page, `admin.php?page=${pluginId}#/help`);

		await expect(page).toHaveScreenshot();
	});

	test.skip('[VRT] Home Page', async ({ page }) => {
		const pluginId = process.env.PLUGIN_ID || 'vodien';
		await auth.navigateToAdminPage(page, `admin.php?page=${pluginId}#/home`);

		await expect(page).toHaveScreenshot();
	});

	test.skip('[VRT] Coming Soon Page', async ({ page }) => {
		const pluginId = process.env.PLUGIN_ID || 'vodien';
		await auth.navigateToAdminPage(page, `admin.php?page=${pluginId}#/coming-soon`);

		await expect(page).toHaveScreenshot();
	});
});
