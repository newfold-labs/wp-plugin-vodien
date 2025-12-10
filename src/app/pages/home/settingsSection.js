import ActionField from "../../components/action-field";
import { Container } from "@newfold/ui-component-library";

const SettingsSection = () => {
	return (
		<Container.SettingsField
			title={__('Settings and Performance', 'wp-plugin-vodien')}
			description={__('Customize & fine-tune your site.', 'wp-plugin-vodien')}
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-5">
				<ActionField
					label={__("Manage Settings", "wp-plugin-vodien")}
					buttonLabel={__("Settings", "wp-plugin-vodien")}
					href={window.NewfoldRuntime.linkTracker.addUtmParams("admin.php?page=vodien#/settings")}
					className={"wppv-app-home-settings-action"}
				>
					{__('Manage your site settings. You can ajdust automatic updates, comments, revisions and more.', 'wp-plugin-vodien')}
				</ActionField>

				<ActionField
					label={__("Performance", "wp-plugin-vodien")}
					buttonLabel={__("Performance", "wp-plugin-vodien")}
					href={window.NewfoldRuntime.linkTracker.addUtmParams("admin.php?page=vodien#/settings/performance")}
					className={"wppv-app-home-performance-action"}
				>
					{__('Manage site performance and caching settings as well as clear the site cache.', 'wp-plugin-vodien')}
				</ActionField>

				<ActionField
					label={__("Marketplace", "wp-plugin-vodien")}
					buttonLabel={__("Visit Marketplace", "wp-plugin-vodien")}
					href={window.NewfoldRuntime.linkTracker.addUtmParams("admin.php?page=vodien#/marketplace")}
					className={"wppv-app-home-marketplace-action"}
				>
					{__('Add site services, themes or plugins from the marketplace.', 'wp-plugin-vodien')}
				</ActionField>
			</div>
		</Container.SettingsField >
	);
};

export default SettingsSection;
