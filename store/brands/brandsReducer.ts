import { ACTION_TYPES } from "./action";

const initialState = {
	brands: [] as string[],
}

const brandsReducer = (state = initialState, action:any) => {
	switch (action.type){
		case ACTION_TYPES.SET_BRANDS:
			return{
				...state,
				brands: action.payload
			}
		default:
			return state
	}
}

export default brandsReducer