<?php
/**
 * All data retrieval and saving happens from this file.
 *
 * @package WPPluginVodien
 */

namespace Vodien;

/**
 * \Vodien\Data
 * This class does not have a constructor to get instantiated, just static methods.
 */
final class Data {

	/**
	 * Data loaded onto window.NewfoldRuntime
	 *
	 * @return array
	 */
	public static function runtime() {
		global $vodien_module_container;
		$runtime = array(
			'plugin' => array(
				'url'     => VODIEN_BUILD_URL,
				'version' => VODIEN_PLUGIN_VERSION,
				'assets'  => VODIEN_PLUGIN_URL . 'assets/',
				'brand'   => $vodien_module_container->plugin()->brand,
			),
		);
		return $runtime;
	}
}
