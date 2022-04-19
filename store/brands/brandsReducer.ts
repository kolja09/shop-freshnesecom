import { ActionTypes, brandsAction, BrandsState } from "./types";

const initialState: BrandsState = {
	brands: [],
}

const brandsReducer = (state = initialState, action:brandsAction): BrandsState => {
	switch (action.type){
		case ActionTypes.SET_BRANDS:
			return{
				...state,
				brands: action.payload
			}
		default:
			return state
	}
}

export default brandsReducer