<?php
/**
 * Handle updates for version 1.0.2
 *
 * Sync the plugin's auto-update settings with the new, WordPress Core options.
 *
 * @package WPPluginVodien
 */

// Migrate any existing legacy coming soon setting.
if ( 'true' === get_option( 'mm_coming_soon', 'false' ) ) {
	update_option( 'nfd_coming_soon', 'true' );
}
