import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { RootState } from "../../store/store";
import { BannerProps } from "../../static/types";
import { loadBanner } from '../../store/banner/action';

import CategoryMenu from '../CategoryMenu/CategoryMenu';
import arrowRightGreen from './../../assets/img/Vector-green.svg';

import {
	CategoryContainer,
	BannersContainer,
	Banner,
	BannerSubtitle,
	BannerHeadline,
	BannerButton,
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
							<BannerSubtitle>{b.subtitle}</BannerSubtitle>
							<BannerHeadline>{b.title}</BannerHeadline>
							<BannerButton>Read recepies<Image src={arrowRightGreen}/></BannerButton>
						</Banner>
					))
				}
			</BannersContainer>
		</CategoryContainer>
	);
};

export default ProductCategory;

