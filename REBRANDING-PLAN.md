# Rebranding Plan: Web.com → Vodien

This document tracks the progress of rebranding the plugin from Web/Web.com to Vodien.

---

## Summary of Changes Required

| Category | Find | Replace With |
|----------|------|--------------|
| Brand Name | `Web.com` | `Vodien` |
| PHP Namespace | `namespace Web;` | `namespace Vodien;` |
| Text Domain | `wp-plugin-web` | `wp-plugin-vodien` |
| Package Name | `wp-plugin-web` | `wp-plugin-vodien` |
| Constant | `WEB_PLUGIN_VERSION` | `VODIEN_PLUGIN_VERSION` |
| URL Slug | `web#/` | `vodien#/` |
| Admin Page | `page=web` | `page=vodien` |
| Asset Files | `web-*.svg` | `vodien-*.svg` |

---

## Step-by-Step Progress

### ✅ Step 1: Update README.md
**Status:** COMPLETED  
**File:** `README.md`

Changes made:
- Updated logo URL to vodien-logo.svg
- Changed all "Web.com" references to "Vodien"
- Updated GitHub URLs from wp-plugin-web to wp-plugin-vodien
- Updated constant reference from WEB_PLUGIN_VERSION to VODIEN_PLUGIN_VERSION

---

### ✅ Step 2: Update PHP Namespaces
**Status:** COMPLETED  
**Files affected (15):**
- [x] `wp-plugin-vodien.php`
- [x] `bootstrap.php`
- [x] `inc/Admin.php`
- [x] `inc/AdminBar.php`
- [x] `inc/Data.php`
- [x] `inc/base.php`
- [x] `inc/jetpack.php`
- [x] `inc/partners.php`
- [x] `inc/settings.php`
- [x] `inc/updates.php`
- [x] `inc/plugin-php-compat-check.php`
- [x] `inc/plugin-nfd-compat-check.php`
- [x] `inc/RestApi/rest-api.php`
- [x] `inc/RestApi/SettingsController.php`
- [x] `inc/RestApi/CachingController.php`

Changes made:
- `namespace Web;` → `namespace Vodien;`
- `namespace Web\RestApi;` → `namespace Vodien\RestApi;`
- `use Web\...` → `use Vodien\...`
- `\Web\...` → `\Vodien\...`
- All constants: `WEB_*` → `VODIEN_*`
- All variables: `$web_*` → `$vodien_*`
- All functions: `web_*` → `vodien_*`
- URL slugs: `web#/` → `vodien#/`, `page=web` → `page=vodien`
- REST API namespace: `web/v1` → `vodien/v1`
- Admin menu IDs and CSS selectors updated
- Brand references: Web.com → Vodien, Network Solutions → Vodien

---

### ✅ Step 3: Update Text Domain
**Status:** COMPLETED  
**Files affected:** 30+ files (PHP and JS)

Changes made:
- All `'wp-plugin-web'` text domain strings → `'wp-plugin-vodien'`

---

### ✅ Step 4: Update Package Configuration Files
**Status:** COMPLETED  
**Files:**
- [x] `package.json`
- [x] `package-lock.json`
- [x] `composer.json`

Changes made:
- Package name: `wp-plugin-web` → `wp-plugin-vodien`
- GitHub URLs updated
- Script references updated
- Version reset to 1.0.0

---

### ✅ Step 5: Update Main Plugin File
**Status:** COMPLETED (as part of Step 2)  
**File:** `wp-plugin-vodien.php`

Changes made:
- Namespace updated
- All constants: `WEB_*` → `VODIEN_*`
- Comment text updated

---

### ✅ Step 6: Update bootstrap.php
**Status:** COMPLETED (as part of Step 2)  
**File:** `bootstrap.php`

Changes made:
- Namespace updated
- Update URL endpoint updated
- Brand name in coming soon template
- All text domain references updated
- All constant references updated
- Container variable: `$web_module_container` → `$vodien_module_container`

---

### ✅ Step 7: Update Admin.php
**Status:** COMPLETED (as part of Step 2)  
**File:** `inc/Admin.php`

Changes made:
- HTML comments: `<!-- Web.com -->` → `<!-- Vodien -->`
- Menu slugs: `web#/home` → `vodien#/home`
- Action links filter updated
- All text domain references updated
- CSS selectors updated
- Script/style handles: `web-script/style` → `vodien-script/style`

---

### ✅ Step 8: Update All inc/*.php Files
**Status:** COMPLETED (as part of Step 2)  
**Files:**
- [x] `inc/AdminBar.php`
- [x] `inc/Data.php`
- [x] `inc/base.php`
- [x] `inc/jetpack.php`
- [x] `inc/partners.php`
- [x] `inc/settings.php`
- [x] `inc/updates.php`
- [x] `inc/plugin-php-compat-check.php`
- [x] `inc/plugin-nfd-compat-check.php`

---

### ✅ Step 9: Update RestApi Controllers
**Status:** COMPLETED (as part of Step 2)  
**Files:**
- [x] `inc/RestApi/rest-api.php`
- [x] `inc/RestApi/SettingsController.php`
- [x] `inc/RestApi/CachingController.php`

---

### ✅ Step 10: Update JS/React Source Files
**Status:** COMPLETED  
**Files in `src/`:**
- [x] `src/app/components/app-nav/logo.js`
- [x] `src/app/components/site-info/index.js`
- [x] `src/app/data/help.js`
- [x] `src/app/data/routes.js`
- [x] `src/app/pages/home/index.js`
- [x] `src/app/pages/home/settingsSection.js`
- [x] `src/app/pages/home/webHostingSection.js`
- [x] `src/app/pages/help/index.js`
- [x] `src/app/pages/marketplace/index.js`
- [x] `src/app/pages/settings/index.js`
- [x] `src/app/pages/settings/*.js` (all settings files)
- [x] `src/index.js`

Changes made:
- Text domain: `'wp-plugin-web'` → `'wp-plugin-vodien'`
- Brand strings: `'Web WordPress Plugin'` → `'Vodien WordPress Plugin'`
- `'Web Hosting'` → `'Vodien Hosting'`
- All Network Solutions URLs → Vodien URLs
- All brand references updated

---

### ✅ Step 11: Rename SVG Assets
**Status:** COMPLETED  
**Files in `assets/svg/`:**
- [x] `web-icon-white.svg` → `vodien-icon-white.svg`
- [x] `web-icon.svg` → `vodien-icon.svg`
- [x] `web-logo.svg` → `vodien-logo.svg`

Note: SVG files renamed but still contain Web.com graphics - replace with actual Vodien graphics.

---

### ✅ Step 12: Update Language File
**Status:** COMPLETED  
**File:** `languages/wp-plugin-vodien.pot`

Changes made:
- Renamed file from `wp-plugin-web.pot` to `wp-plugin-vodien.pot`
- Updated all internal references to Vodien branding
- Deleted old `wp-plugin-web.pot` file

---

### ✅ Step 13: Update Test Files
**Status:** COMPLETED  
**Files in `tests/`:**
- [x] `tests/cypress/integration/home.cy.js`
- [x] `tests/cypress/integration/navigation.cy.js`

Changes made:
- Updated CSS selectors from `web` to `vodien`
- Updated page references from `page=web` to `page=vodien`
- Updated test assertions for "Vodien Hosting" section

---

## Files Summary

### Total Files to Modify
- **PHP files:** ~18
- **JS files:** ~15
- **Config files:** 3 (package.json, package-lock.json, composer.json)
- **Asset files:** 3 SVG files to rename
- **Language files:** 1
- **Test files:** ~4

---

## Notes

- After all changes, run `npm run build` to regenerate build files
- Run `composer dump-autoload` if using autoloading
- Test the plugin thoroughly after rebranding
- The build folder contains compiled assets that will be regenerated

---

*Last updated: ALL STEPS COMPLETED ✅*

---

## Summary

The rebranding from Web.com/Network Solutions to Vodien has been completed successfully.

### Key Changes:
- **Namespace:** `Web` → `Vodien`
- **Text Domain:** `wp-plugin-web` → `wp-plugin-vodien`
- **Plugin Version:** Reset to `1.0.0`
- **Admin Page Slug:** `web` → `vodien`
- **REST API Namespace:** `web/v1` → `vodien/v1`
- **All URLs:** networksolutions.com → vodien.com
- **SVG Assets:** Renamed (graphics need replacement)

### Next Steps:
1. Replace SVG files with actual Vodien branding graphics
2. Run `npm run build` to regenerate build files
3. Run `composer dump-autoload` if using autoloading
4. Test the plugin thoroughly

