import ActionField from "../../components/action-field";
import { Container } from "@newfold/ui-component-library";

const WebContentSection = () => {
	return (
		<Container.SettingsField
			title={__('Website Content', 'wp-plugin-vodien')}
			description={__('Create, manage & sort your story.', 'wp-plugin-vodien')}
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-5">
				<ActionField
					label={__("Blog", "wp-plugin-vodien")}
					buttonLabel={__("New Post", "wp-plugin-vodien")}
					href={window.NewfoldRuntime.linkTracker.addUtmParams(window.NewfoldRuntime.adminUrl + 'post-new.php')}
					className={"wppv-app-home-blog-action"}
				>
					{__('Write a new blog post.', 'wp-plugin-vodien')}
				</ActionField>

				<ActionField
					label={__("Pages", "wp-plugin-vodien")}
					buttonLabel={__("New Page", "wp-plugin-vodien")}
					href={window.NewfoldRuntime.linkTracker.addUtmParams(window.NewfoldRuntime.adminUrl + 'post-new.php?post_type=page')}
					className={"wppv-app-home-pages-action"}
				>
					{__('Add fresh pages to your website.', 'wp-plugin-vodien')}
				</ActionField>

				<ActionField
					label={__("Categories", "wp-plugin-vodien")}
					buttonLabel={__("Manage Categories", "wp-plugin-vodien")}
					href={window.NewfoldRuntime.linkTracker.addUtmParams(window.NewfoldRuntime.adminUrl + 'edit-tags.php?taxonomy=category')}
					className={"wppv-app-home-categories-action"}
				>
					{__('Organize existing content into categories.', 'wp-plugin-vodien')}
				</ActionField>
			</div>
		</Container.SettingsField >
	);
};

export default WebContentSection;
