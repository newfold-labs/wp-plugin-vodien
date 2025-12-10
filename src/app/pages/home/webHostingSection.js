import ActionField from "../../components/action-field";
import { Container } from "@newfold/ui-component-library";

const WebHostingSection = () => {
	return (
		<Container.SettingsField
			title={__('Vodien Hosting', 'wp-plugin-vodien')}
			description={__('Access & manage your Vodien account.', 'wp-plugin-vodien')}
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-5">
				<ActionField
					label={__("Manage Vodien Account", "wp-plugin-vodien")}
					buttonLabel={__("Manage Vodien Account", "wp-plugin-vodien")}
					href={
						`https://www.vodien.com/login?` +
						`&utm_campaign=` +
						`&utm_content=home_hosting_sites_link` +
						`&utm_term=manage_sites` +
						`&utm_medium=brand_plugin` +
						`&utm_source=wp-admin/admin.php?page=vodien#/home`
					}
					target="_blank"
					className={"wppv-app-home-sites-action"}
				>
					{__("Manage Vodien account products, options and billing.", "wp-plugin-vodien")}
				</ActionField>
			</div>
		</Container.SettingsField>
	);
};

export default WebHostingSection;
