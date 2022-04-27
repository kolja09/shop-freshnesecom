import React, { useState } from 'react';
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { setProductsCurrentPage } from "../../store/products/action";

import Navigations from "../Navigations/Navigations";
import HeadlineSection from "../HeadlineSection/HeadlineSection";
import Paginator from "../Paginator/Paginator";
import AsideFilterProduct from "../AsideFilterProduct/AsideFilterProduct";
import SmallProductCard from "../SmallProductCard/SmallProductCard";
import BigProductCard from "../BigProductCard/BigProductCard";
import Loader from "../Loader/Loader";

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

	const [gridView, setGridView] = useState(false);
	// const [filteredProducts, setFilteredProducts] = useState(products);
	// const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
	// 	selectedCategory: "",
	// 	selectedRating: [],
	// });
	//
	// useEffect(() => {
	// 	setFilteredProducts(products);
	// }, [products]);
	//
	// const [selectedCategory, setSelectedCategory] = useState('');
	// const [isSelectedFilter, setIsSelectedFilter] = useState(false);
	// useEffect(() => {
	// 	const productsToFilter = products;
	//
	// 	if (filterOptions.selectedCategory)
	// 		setFilteredProducts(productsToFilter.filter((el: { category: string; }) => el.category === filterOptions.selectedCategory));
	// 	if (filterOptions.selectedRating)
	// 		setFilteredProducts(productsToFilter.filter(((el: { numberStar: number; }) => filterOptions.selectedRating.includes(el.numberStar))));
	// }, [filterOptions])
	//
	// const handleSetFilterOptions = (option: IFilterOptions) => {
	// 	setFilterOptions(option);
	// };

	return (
		<>
			{
				!products ? <Loader /> :
					<ProductCardContainer>
						<Navigations nameLink={'Products'} />
						<HeadlineSection setGridView={setGridView} length={products.length} namePage={'Products'}/>
						<MainContainer>
							<AsideFilterProduct
								// filterOptions={filterOptions}
								// handleSetFilterOptions={handleSetFilterOptions}
							/>
							{!gridView ?
								<ProductsSmallCardsContainer>
									{
										products.slice(pagesVisited, pagesVisited + perPage).map((product: ProductsProps, idx: number) => (
											<SmallProductCard product={product} key={idx}/>
										))
									}
								</ProductsSmallCardsContainer>
								:
								<ProductsBigCardsContainer>
									{
										products.slice(pagesVisited, pagesVisited + perPage).map((product: ProductsProps, idx: number) => (
											<BigProductCard product={product} key={idx}/>
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
			}
		</>
	);
};

export default ProductCardPage;
