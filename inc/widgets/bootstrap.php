<?php
/**
 * Widgets bootstrap file
 *
 * @package WPPluginVodien
 */

namespace Vodien\Widgets;

use Web\Widgets\SitePreview;

require_once VODIEN_PLUGIN_DIR . '/inc/widgets/SitePreview.php';

/* Start up the Dashboards */
if ( is_admin() ) {
	new SitePreview();
}
