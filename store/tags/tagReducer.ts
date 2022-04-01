import { ACTION_TYPES } from "./action";

const initialState = {
	tags: [] as string[],
}

const tagReducer = (state = initialState, action:any) => {
	switch (action.type){
		case ACTION_TYPES.SET_TAGS:
			return{
				...state,
				tags: action.payload
			}
		default:
			return state
	}
}

export default tagReducer