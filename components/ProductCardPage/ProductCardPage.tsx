import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { setProductsCurrentPage } from "../../store/products/action";

import Navigations from "../Navigations/Navigations";
import HeadlineSection from "../HeadlineSection/HeadlineSection";
import Paginator from "../Paginator/Paginator";
import AsideFilterProduct from "../AsideFilterProduct/AsideFilterProduct";
import SmallProductCard from "../SmallProductCard/SmallProductCard";
import BigProductCard from "../BigProductCard/BigProductCard";

import { IFilterOptions } from "./types";
import {
	ProductCardContainer,
	MainContainer,
	ProductsSmallCardsContainer,
	ProductsBigCardsContainer
} from "./styled";

const ProductCardPage = () => {

	const products = useSelector((products:RootState) => products.productReducer.productItems);
	const currentPage = useSelector((currentPage:RootState) => currentPage.productReducer.currentPage);
	const perPage = useSelector((perPage:RootState) => perPage.productReducer.perPage);

	const pageCount = Math.ceil(products.length / perPage);
	const pagesVisited = currentPage * perPage;

	const [gridView, setGridView] = useState(false)
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
		selectedCategory: "",
		selectedRating: [],
	});

	useEffect(() => {
		setFilteredProducts(products);
	}, [products]);

	const [selectedCategory, setSelectedCategory] = useState('');
	const [isSelectedFilter, setIsSelectedFilter] = useState(false);
	useEffect(() => {
		const productsToFilter = products;

		if (filterOptions.selectedCategory)
			setFilteredProducts(productsToFilter.filter((el: { category: string; }) => el.category === filterOptions.selectedCategory));
		if (filterOptions.selectedRating)
			setFilteredProducts(productsToFilter.filter(((el: { numberStar: number; }) => filterOptions.selectedRating.includes(el.numberStar))));
	}, [filterOptions])

	const handleSetFilterOptions = (option: IFilterOptions) => {
		setFilterOptions(option);
	};

	return (
		<ProductCardContainer>
			<Navigations/>
			<HeadlineSection setGridView={setGridView} length={products.length}/>
			<MainContainer>
				<AsideFilterProduct
					filterOptions={filterOptions}
					handleSetFilterOptions={handleSetFilterOptions}
				/>
				{!gridView ?
					<ProductsSmallCardsContainer>
						{
							products.slice(pagesVisited, pagesVisited + perPage).map((product: ProductsProps) => (
								<SmallProductCard product={product}/>
							))
						}
					</ProductsSmallCardsContainer>
					:
					<ProductsBigCardsContainer>
						{
							products.slice(pagesVisited, pagesVisited + perPage).map((product: ProductsProps) => (
								<BigProductCard product={product}/>
							))
						}
					</ProductsBigCardsContainer>}
			</MainContainer>
			<Paginator
				currentPage={currentPage}
				pageCount={pageCount}
				setCurrentPage={setProductsCurrentPage}
				length={products.length}
			/>
		</ProductCardContainer>
	);
};

export default ProductCardPage;
