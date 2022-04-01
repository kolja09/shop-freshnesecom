import { ACTION_TYPES } from "./action";

const initialState = {
	blog: [] as PostProps[],
	currentPage:0 as number,
	perPage: 9 as number,
}

const blogReducer = (state = initialState, action:any) => {
	switch (action.type){
		case ACTION_TYPES.SET_BLOGS:
			return{
				...state,
				blog: action.payload
			}
		case ACTION_TYPES.SET_BLOGS_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload
			}
		default:
			return state
	}
}

export default blogReducer