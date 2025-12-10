import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { Container, Page, Title } from '@newfold/ui-component-library';
import { NewfoldRuntime } from "@newfold/wp-module-runtime";
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { default as MarketplaceBody } from '@modules/wp-module-marketplace/components/marketplaceBody';

const MarketplacePage = () => {
	
    // constants to pass to module
	const moduleConstants = {
		'supportsCTB': false,
		'perPage': 12,
		'text': {
			title: __('Marketplace', 'wp-plugin-vodien'),
			subTitle: __('Explore our marketplace plugins and services.', 'wp-plugin-vodien'),
			error: __('Oops, there was an error loading the marketplace, please try again later.', 'wp-plugin-vodien'),
			noProducts: __('Sorry, no marketplace items. Please, try again later.', 'wp-plugin-vodien'),
			loadMore: __('Load More', 'wp-plugin-vodien'),
			productPage: {
				error: {
					title: __(
						'Oops! Something Went Wrong',
						'wp-plugin-vodien'
					),
					description: __(
						'An error occurred while loading the content. Please try again later.',
						'wp-plugin-vodien'
					),
				},
			},
		}
	};
    // methods to pass to module
    const moduleMethods = {
        apiFetch,
		classNames,
        useState,
        useEffect,
        useLocation,
		useMatch,
		useNavigate,
        NewfoldRuntime,
    };

	return (
        <Page className={"wppv-app-marketplace-page"}>
			<Container className={'wppv-app-marketplace-container'}>
				<Container.Header className={'wppv-app-marketplace-header'}>
					<Title as="h2" className="nfd-flex nfd-items-center nfd-gap-2">
						<ShoppingBagIcon className="nfd-w-8 nfd-h-8" />
						{moduleConstants.text.title}
					</Title>
					<span>{moduleConstants.text.subTitle}</span>
				</Container.Header>

				<Container.Block className={'wppv-app-marketplace-body'}>
					<MarketplaceBody 
						methods={moduleMethods}
						constants={moduleConstants}
					/>
				</Container.Block>

			</Container>
		</Page>
	);
};

export default MarketplacePage;