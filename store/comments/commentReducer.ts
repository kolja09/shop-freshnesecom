import { ACTION_TYPES } from "./action";
import { commentProps } from "../../static/types";

const initialState = {
	comments: [] as commentProps[],
}

const commentReducer = (state = initialState, action:any) => {
	switch (action.type){
		case ACTION_TYPES.SET_COMMENTS:
			return{
				...state,
				comments: action.payload
			}
		default:
			return state
	}
}

export default commentReducer
