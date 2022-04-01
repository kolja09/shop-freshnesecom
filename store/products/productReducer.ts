import {ACTION_TYPES} from "./action";

const initialState = {
	productItems: [] as ProductsProps[],
	currentPage: 0 as number,
	perPage: 9 as number,
}

const productReducer = (state = initialState, action:any) => {
	switch (action.type){
		case ACTION_TYPES.SET_PRODUCTS:
			return{
				...state,
				productItems: action.payload,
			}
		case ACTION_TYPES.SET_PRODUCTS_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload
			}
		default:
			return state
	}
}

export default productReducer