import { apiService } from "../../api/api";
import { AppDispatch } from "../store";

export const ACTION_TYPES = {
	SET_PRODUCTS: 'SET_PRODUCTS',
	SET_PRODUCTS_CURRENT_PAGE:'SET_PRODUCTS_CURRENT_PAGE'
}

const setProducts = (productItems:any) => ({
	type: ACTION_TYPES.SET_PRODUCTS,
	payload: productItems
});

export const setProductsCurrentPage = (page:any) => ({
	type: ACTION_TYPES.SET_PRODUCTS_CURRENT_PAGE,
	payload: page
});

export const loadProducts = () => (dispatch:AppDispatch) => {
	apiService.getProducts().then(({data}) => dispatch(setProducts(data.products)))
}
