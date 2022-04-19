import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { loadBanner } from '../../store/banner/action';

import CategoryMenu from '../CategoryMenu/CategoryMenu';

import {
	CategoryContainer,
	BannersContainer,
	Banner,
	Subtitle,
	Headline,
	Button,
} from "./styled";

const ProductCategory = () => {
	const dispatch = useDispatch();

	const banner = useSelector((banner: RootState) => banner.bannerReducer.banner);

	useEffect(() => {
		dispatch(loadBanner())
	}, []);

	return (
		<CategoryContainer>
			<CategoryMenu title={'Category menu'} />
			<BannersContainer>
				{
					banner.map((b: BannerProps, id: number) => (
						<Banner key={id}>
							<Subtitle>{b.subtitle}</Subtitle>
							<Headline>{b.title}</Headline>
							<Button>Read recipes</Button>
						</Banner>
					))
				}
			</BannersContainer>
		</CategoryContainer>
	);
};

export default ProductCategory;

