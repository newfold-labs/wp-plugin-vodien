/**
 * Newfold/Bluehost Plugin Specific Helpers
 *
 * Specialized utilities for testing Newfold-managed WordPress plugins.
 * Includes helpers for dashboard widgets, capabilities, and plugin features.
 */

import { execSync } from 'child_process';
import utils from './utils.mjs';

/**
 * Wait for dashboard widgets to load
 *
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<void>}
 */
async function waitForDashboardWidgets(page, timeout = 15000) {
	utils.fancyLog('⏳ Waiting for dashboard widgets to load...', 55, 'gray', '');
	// Wait for at least one widget to be visible
	await page.waitForSelector('[id*="_widget"]', { timeout });
}

/**
 * Set coming soon status via WordPress options
 *
 * @param {boolean} enabled - Enable or disable coming soon
 * @returns {Promise<string|number>}
 */
async function setComingSoon(enabled = false) {
	utils.fancyLog(`🌐 Setting coming soon to: ${enabled ? 'enabled' : 'disabled'}`, 55, 'gray', '');
	try {
		const status = enabled ? '1' : '0';
		const command = `option update nfd_coming_soon_enabled ${status}`;
		const output = execSync(`npx wp-env run cli wp ${command}`, {
			encoding: 'utf-8',
			stdio: ['pipe', 'pipe', 'pipe'],
		});
		return output.trim() ? output.trim() : 0;
	} catch (err) {
		if (err.stderr) {
			return `Error: ${err.stderr.toString().trim()}`;
		}
		return err.status || 1;
	}
}

/**
 * Clear all user capabilities (reset to default)
 *
 * @returns {Promise<string|number>}
 */
async function clearCapabilities() {
	utils.fancyLog('🔄 Clearing user capabilities...', 55, 'gray', '');
	try {
		const command = `user meta delete 1 _newfold_capabilities`;
		const output = execSync(`npx wp-env run cli wp ${command}`, {
			encoding: 'utf-8',
			stdio: ['pipe', 'pipe', 'pipe'],
		});
		return output.trim() ? output.trim() : 0;
	} catch (err) {
		// Silently fail if capabilities don't exist
		return 0;
	}
}

/**
 * Get capability status for a feature
 *
 * @param {string} featureName - Feature name to check
 * @returns {Promise<boolean>}
 */
async function hasCapability(featureName) {
	utils.fancyLog(`🔍 Checking capability: ${featureName}`, 55, 'gray', '');
	try {
		const command = `user meta get 1 _newfold_capabilities --format=json`;
		const output = execSync(`npx wp-env run cli wp ${command}`, {
			encoding: 'utf-8',
			stdio: ['pipe', 'pipe', 'pipe'],
		});
		const capabilities = JSON.parse(output.trim());
		return capabilities && capabilities[featureName] === true;
	} catch (err) {
		return false;
	}
}

/**
 * Set capability for a feature
 *
 * @param {string} featureName - Feature name
 * @param {boolean} enabled - Enable or disable
 * @returns {Promise<string|number>}
 */
async function setCapability(featureName, enabled = true) {
	utils.fancyLog(`⚙️ Setting capability ${featureName} to: ${enabled}`, 55, 'gray', '');
	try {
		let command;
		if (enabled) {
			command = `meta:set:field --key=_newfold_capabilities --field="${featureName}::true" --all`;
		} else {
			command = `meta:delete --key=_newfold_capabilities 1`;
		}

		const output = execSync(`npx wp-env run cli wp user ${command}`, {
			encoding: 'utf-8',
			stdio: ['pipe', 'pipe', 'pipe'],
		});

		return output.trim() ? output.trim() : 0;
	} catch (err) {
		if (err.stderr) {
			return `Error: ${err.stderr.toString().trim()}`;
		}
		return err.status || 1;
	}
}

/**
 * Wait for plugin app to render
 *
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<void>}
 */
async function waitForAppRender(page, timeout = 15000) {
	utils.fancyLog('⏳ Waiting for app to render...', 55, 'gray', '');
	await page.waitForSelector('#wppv-app-rendered', { timeout });
}

/**
 * Check if app body is visible
 *
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @returns {Promise<boolean>}
 */
async function isAppBodyVisible(page) {
	const appBody = page.locator('.wppv-app-body');
	return await appBody.isVisible().catch(() => false);
}

/**
 * Get plugin version via WP-CLI
 *
 * @param {string} pluginSlug - Plugin slug
 * @returns {Promise<string>}
 */
async function getPluginVersion(pluginSlug = 'wp-plugin-vodien') {
	utils.fancyLog(`📦 Getting plugin version for: ${pluginSlug}`, 55, 'gray', '');
	try {
		const command = `plugin get ${pluginSlug} --field=version`;
		const output = execSync(`npx wp-env run cli wp ${command}`, {
			encoding: 'utf-8',
			stdio: ['pipe', 'pipe', 'pipe'],
		});
		return output.trim();
	} catch (err) {
		return 'unknown';
	}
}

/**
 * Check if Newfold module is activated
 *
 * @param {string} moduleName - Module name
 * @returns {Promise<boolean>}
 */
async function isModuleActive(moduleName) {
	utils.fancyLog(`🔍 Checking module: ${moduleName}`, 55, 'gray', '');
	try {
		const command = `transient get nfd_modules_${moduleName}`;
		const output = execSync(`npx wp-env run cli wp ${command}`, {
			encoding: 'utf-8',
			stdio: ['pipe', 'pipe', 'pipe'],
		});
		return output.trim() === '1';
	} catch (err) {
		return false;
	}
}

/**
 * Activate Newfold module
 *
 * @param {string} moduleName - Module name
 * @returns {Promise<string|number>}
 */
async function activateModule(moduleName) {
	utils.fancyLog(`🚀 Activating module: ${moduleName}`, 55, 'gray', '');
	try {
		const command = `transient set nfd_modules_${moduleName} 1`;
		const output = execSync(`npx wp-env run cli wp ${command}`, {
			encoding: 'utf-8',
			stdio: ['pipe', 'pipe', 'pipe'],
		});
		return output.trim() ? output.trim() : 0;
	} catch (err) {
		if (err.stderr) {
			return `Error: ${err.stderr.toString().trim()}`;
		}
		return err.status || 1;
	}
}

/**
 * Deactivate Newfold module
 *
 * @param {string} moduleName - Module name
 * @returns {Promise<string|number>}
 */
async function deactivateModule(moduleName) {
	utils.fancyLog(`⏹️ Deactivating module: ${moduleName}`, 55, 'gray', '');
	try {
		const command = `transient delete nfd_modules_${moduleName}`;
		const output = execSync(`npx wp-env run cli wp ${command}`, {
			encoding: 'utf-8',
			stdio: ['pipe', 'pipe', 'pipe'],
		});
		return output.trim() ? output.trim() : 0;
	} catch (err) {
		if (err.stderr) {
			return `Error: ${err.stderr.toString().trim()}`;
		}
		return err.status || 1;
	}
}

export default {
	waitForDashboardWidgets,
	setComingSoon,
	clearCapabilities,
	hasCapability,
	setCapability,
	waitForAppRender,
	isAppBodyVisible,
	getPluginVersion,
	isModuleActive,
	activateModule,
	deactivateModule,
};
