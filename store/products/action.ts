import { apiService } from "../../api/api";
import { AppDispatch } from "../store";
import {
	ActionTypes,
	SetProductsAction,
	SetProductsCurrentPage,
	SetRatingAction
} from "./types";

const setProducts = (productItems: ProductsProps[]): SetProductsAction => ({
	type: ActionTypes.SET_PRODUCTS,
	payload: productItems
});

export const setProductsCurrentPage = (page:number): SetProductsCurrentPage => ({
	type: ActionTypes.SET_PRODUCTS_CURRENT_PAGE,
	payload: page
});

export const setRating = (rating: number): SetRatingAction => ({
	type: ActionTypes.SET_RATING,
	payload: rating
})

export const loadProducts = () => (dispatch: AppDispatch) => {
	apiService.getProducts().then(({data}) => dispatch(setProducts(data.products)))
};
