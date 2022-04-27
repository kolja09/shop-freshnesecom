import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { loadCategoryMenu } from "../../store/categoryMenu/action";
import { loadBrands } from "../../store/brands/action";

import StarRating from "../StarRating/StarRating";
import RangeSlider from "../RangeSlider/RangeSlider";
import Tag from "../Tag/Tag";
import Checkbox from "../Checkbox/Checkbox";

import {
	AsideFilterProductContainer,
	CategoryContainer,
	LinksContainer,
	LinkCategory,
	LinkBlock,
	Title,
	BrandsContainer,
	InputWrapper,
	Label,
	BrandItem,
	RatingContainer,
	StarContainer,
	SliderContainer
} from "./styled";

const AsideFilterProduct = () => {
	const dispatch = useDispatch();

	const categoryMenu = useSelector((categoryMenu:RootState) => categoryMenu.categoryMenuReducer.categoryMenu);
	const brands = useSelector((brands:RootState) => brands.brandsReducer.brands);

	useEffect(() => {
		dispatch(loadCategoryMenu())
	}, []);

	useEffect(() => {
		dispatch(loadBrands())
	},[]);

	// const handleFilterByCategory = (categoryName: any) => {
	// 	handleSetFilterOptions((prevState: IFilterOptions) => {
	// 		return {
	// 			...prevState,
	// 			selectedCategory: categoryName,
	// 		}
	// 	})
	// };

	// const handleFilterByRating = (starsCount: any) => {
	// 	if (filterOptions.selectedRating.includes(starsCount)) {
	// 		handleSetFilterOptions((prevState: IFilterOptions) => {
	// 			return {
	// 				...prevState,
	// 				selectedRating: filterOptions.selectedRating.splice(filterOptions.selectedRating.findIndex((el: any) => el === starsCount), 1),
	// 			}
	// 		})
	// 	} else {
	// 		handleSetFilterOptions((prevState: IFilterOptions) => {
	// 			// return {
	// 			//     ...prevState,
	// 			//     selectedRating: filterOptions.selectedRating.push(starsCount),
	// 			// }
	// 		})
	// 	}
	// };

	return (
		<AsideFilterProductContainer>
			<CategoryContainer>
				<Title>Categories</Title>
				<LinksContainer>
					{categoryMenu.map((el: CategoryMenuProps, idx: number) => (
						<LinkBlock key={idx}>
							<LinkCategory>{el.name}</LinkCategory>
							<Tag>{0}</Tag>
						</LinkBlock>
					))}
				</LinksContainer>
			</CategoryContainer>
			<BrandsContainer>
				<Title>Brands</Title>
				<InputWrapper>
					{brands.map((brand:string, idx: number)=> (
						<Label key={idx}>
							<Checkbox/>
							<BrandItem>{brand}</BrandItem>
						</Label>
					))}
				</InputWrapper>
			</BrandsContainer>
			<RatingContainer>
				<Title>Rating</Title>
				{[5, 4, 3, 2, 1].map((star, idx: number) => (
					<Label key={idx}>
						<Checkbox />
						<StarContainer>
							<StarRating rating={star}/>
						</StarContainer>
					</Label>
				))}
			</RatingContainer>
			{/*<SliderContainer>*/}
			{/*	<Title>Price</Title>*/}
			{/*	<RangeSlider min={0} max={100}/>*/}
			{/*</SliderContainer>*/}
		</AsideFilterProductContainer>
	);
};

export default AsideFilterProduct;

