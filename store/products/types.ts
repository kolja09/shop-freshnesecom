export interface ProductsState {
	productItems: ProductsProps[],
	currentPage: number,
	perPage: number,
	rating: number,
}

export enum ActionTypes {
	SET_PRODUCTS = 'SET_PRODUCTS',
	SET_PRODUCTS_CURRENT_PAGE = 'SET_PRODUCTS_CURRENT_PAGE',
	SET_RATING = 'SET_RATING',
}

export interface SetProductsAction {
	type: ActionTypes.SET_PRODUCTS;
	payload: ProductsProps[];
}

export interface SetProductsCurrentPage {
	type: ActionTypes.SET_PRODUCTS_CURRENT_PAGE;
	payload: number;
}

export interface SetRatingAction {
	type: ActionTypes.SET_RATING
	payload: number
}

export type productsAction =
	SetProductsAction |
	SetProductsCurrentPage |
	SetRatingAction