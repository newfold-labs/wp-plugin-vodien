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
			'siteType'           => self::get_site_type(),
		);
		return $runtime;
	}

	/**
	 * Get site type from onboarding data
	 *
	 * @return string The site type
	 */
	public static function get_site_type() {
		// Option name for onboarding site info
		$ONBOARDING_SITE_INFO_OPTION = 'nfd_module_onboarding_site_info';

		/**
		 * Available plan types, this maps the site_type from onboarding module to internal plan types
		 * Maps the site_type to the site type for the runtime data
		 */
		$SITE_TYPES = array(
			'personal'  => 'blog',
			'business'  => 'website',
			'ecommerce' => 'store',
		);

		if ( is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
			return 'store';
		}

		$onboarding_data = \get_option( $ONBOARDING_SITE_INFO_OPTION, array() );
		$site_type       = $onboarding_data['site_type'] ?? '';
		if ( ! empty( $site_type ) && \array_key_exists( $site_type, $SITE_TYPES ) ) {
			return $SITE_TYPES[ $site_type ];
		}

		return 'website';
	}
}
