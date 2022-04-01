import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import StarRating from "../StarRating/StarRating";
import RangeSlider from "../RangeSlider/RangeSlider";
import { IFilterOptions } from "../ProductCardPage/types";
import {RootState} from "../../store/store";
import {loadCategoryMenu} from "../../store/categoryMenu/action";
import {loadBrands} from "../../store/brands/action";

import { IAsideFilterProductProps } from "./types";
import {
	AsideFilterProductContainer,
	CategoryContainer,
	LinksContainer,
	LinkCategory,
	LinkBlock,
	Tag,
	Title,
	BrandsContainer,
	InputWrapper,
	InputBlock,
	InputCheckbox,
	NameBrandItem,
	RatingContainer,
	RatingBlock,
	SliderContainer,
	ButtonApply,
	ButtonReset,
	Buttons
} from "./styled";

const AsideFilterProduct = ({filterOptions, handleSetFilterOptions}: IAsideFilterProductProps) => {
	const dispatch = useDispatch()
	const categoryMenu = useSelector((categoryMenu:RootState) => categoryMenu.categoryMenuReducer.categoryMenu)
	const brands = useSelector((brands:RootState) => brands.brandsReducer.brands)


	useEffect(() => {
		dispatch(loadCategoryMenu())
	}, [])

	useEffect(() => {
		dispatch(loadBrands())
	},[])

	const handleFilterByCategory = (categoryName: any) => {
		handleSetFilterOptions((prevState: IFilterOptions) => {
			return {
				...prevState,
				selectedCategory: categoryName,
			}
		})
	};

	const handleFilterByRating = (starsCount: any) => {
		if (filterOptions.selectedRating.includes(starsCount)) {
			handleSetFilterOptions((prevState: IFilterOptions) => {
				return {
					...prevState,
					selectedRating: filterOptions.selectedRating.splice(filterOptions.selectedRating.findIndex((el: any) => el === starsCount), 1),
				}
			})
		} else {
			handleSetFilterOptions((prevState: IFilterOptions) => {
				// return {
				//     ...prevState,
				//     selectedRating: filterOptions.selectedRating.push(starsCount),
				// }
			})
		}
	};

	return (
		<AsideFilterProductContainer>
			<CategoryContainer>
				<Title>Categories</Title>
				<LinksContainer>
					{categoryMenu.map((el: CategoryMenuProps, idx: number) => (
						<LinkBlock key={idx}>
							<LinkCategory onClick={() => handleFilterByCategory(el.name)}>{el.name}</LinkCategory>
							<Tag>{el.numberOfProducts}</Tag>
						</LinkBlock>
					))}
				</LinksContainer>
			</CategoryContainer>
			<BrandsContainer>
				<Title>Brands</Title>
				<InputWrapper>
					{brands.map((brand:string)=> (
						<InputBlock>
							<InputCheckbox type={'checkbox'}/>
							<NameBrandItem>{brand}</NameBrandItem>
						</InputBlock>
					))}
				</InputWrapper>
			</BrandsContainer>
			<RatingContainer>
				<Title>Rating</Title>
				{[5, 4, 3, 2, 1].map((star => (
					<RatingBlock>
						<InputCheckbox onClick={() => handleFilterByRating(star)} type={'checkbox'}/> <StarRating rating={star}/>
					</RatingBlock>
				)))}
			</RatingContainer>
			<SliderContainer>
				<Title>Price</Title>
				<RangeSlider min={0} max={100}/>
			</SliderContainer>
			<Buttons>
				<ButtonApply>Apply</ButtonApply>
				<ButtonReset>Reset</ButtonReset>
			</Buttons>
		</AsideFilterProductContainer>
	);
};

export default AsideFilterProduct;

