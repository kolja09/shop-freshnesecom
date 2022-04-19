import { ActionTypes, productsAction, ProductsState } from "./types";

const initialState: ProductsState = {
	productItems: [],
	currentPage: 0,
	perPage: 9,
	rating:5,
}

const productReducer = (state = initialState, action:productsAction):ProductsState => {
	switch (action.type){
		case ActionTypes.SET_PRODUCTS:
			return{
				...state,
				productItems: action.payload,
			}
		case ActionTypes.SET_PRODUCTS_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			}
		case ActionTypes.SET_RATING:
			return {
				...state, rating: action.payload
			}
		default:
			return state
	}
}

export default productReducer