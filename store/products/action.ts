import { apiService } from "../../api/api";
import { AppDispatch } from "../store";
import {
	ActionTypes,
	SetProductsAction,
	SetProductsCurrentPage,
} from "./types";

const setProducts = (productItems: ProductsProps[]): SetProductsAction => ({
	type: ActionTypes.SET_PRODUCTS,
	payload: productItems
});

export const setProductsCurrentPage = (page: number): SetProductsCurrentPage => ({
	type: ActionTypes.SET_PRODUCTS_CURRENT_PAGE,
	payload: page
});

export const loadProducts = () => (dispatch: AppDispatch) => {
	apiService.getProducts().then(({data}) => dispatch(setProducts(data.products)))
};
