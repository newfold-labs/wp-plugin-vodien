<?php
/**
 * Vodien WordPress Plugin
 *
 * @package           WPPluginVodien
 * @author            Newfold Digital
 * @copyright         Copyright 2023 by Newfold Digital - All rights reserved.
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Vodien Plugin
 * Plugin URI:        https://www.vodien.com
 * Update URI:        https://github.com/newfold-labs/wp-plugin-vodien/
 * Description:       WordPress plugin that integrates a WordPress site with the Vodien control panel, including performance, security, and update features.
 * Version:           1.0.0
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Tested up to:      6.9
 * Author:            Vodien
 * Author URI:        https://www.vodien.com
 * Text Domain:       wp-plugin-vodien
 * Domain Path:       /languages
 * License:           GPL 2.0 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Vodien;

// Do not allow multiple copies of the Vodien Plugin to be active
if ( defined( 'VODIEN_PLUGIN_VERSION' ) ) {
	exit;
}

// Define constants
define( 'VODIEN_PLUGIN_VERSION', '1.0.0' );
define( 'VODIEN_PLUGIN_FILE', __FILE__ );
define( 'VODIEN_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'VODIEN_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
if ( ! defined( 'NFD_HIIVE_URL' ) ) {
	define( 'NFD_HIIVE_URL', 'https://hiive.cloud/api' );
}

define( 'VODIEN_BUILD_DIR', VODIEN_PLUGIN_DIR . 'build/' . VODIEN_PLUGIN_VERSION );
define( 'VODIEN_BUILD_URL', VODIEN_PLUGIN_URL . 'build/' . VODIEN_PLUGIN_VERSION );

global $pagenow;
if ( 'plugins.php' === $pagenow ) {

	require VODIEN_PLUGIN_DIR . '/inc/plugin-php-compat-check.php';

	$plugin_check = new Plugin_PHP_Compat_Check( __FILE__ );

	$plugin_check->min_php_version = '7.1';
	$plugin_check->min_wp_version  = '6.0';

	$plugin_check->check_plugin_requirements();
}

// Check NFD plugin incompatibilities
require_once VODIEN_PLUGIN_DIR . '/inc/plugin-nfd-compat-check.php';
$nfd_plugins_check = new NFD_Plugin_Compat_Check( VODIEN_PLUGIN_FILE );
// Defer to Incompatible plugin, self-deactivate
$nfd_plugins_check->incompatible_plugins = array(
	'The Bluehost Plugin' => 'bluehost-wordpress-plugin/bluehost-wordpress-plugin.php',
);
// Deactivate legacy plugin
$nfd_plugins_check->legacy_plugins = array(
	'The MOJO Marketplace'     => 'mojo-marketplace-wp-plugin/mojo-marketplace.php',
	'The MOJO Plugin'          => 'wp-plugin-mojo/wp-plugin-mojo.php',
	'The HostGator Plugin'     => 'wp-plugin-hostgator/wp-plugin-hostgator.php',
	'The Crazy Domains Plugin' => 'wp-plugin-crazy-domains/wp-plugin-crazy-domains.php',
	'The Web.com Plugin'       => 'wp-plugin-web/wp-plugin-web.php',
);
$pass_nfd_check                    = $nfd_plugins_check->check_plugin_requirements();

// Check PHP version before initializing to prevent errors if plugin is incompatible.
if ( $pass_nfd_check && version_compare( PHP_VERSION, '5.3', '>=' ) ) {
	require __DIR__ . '/bootstrap.php';
}
