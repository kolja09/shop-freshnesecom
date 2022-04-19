import { ActionTypes, blogsAction, BlogsState } from "./types";

const initialState: BlogsState = {
	blogs: [],
	currentPage:0,
	perPage: 9,
}

const blogReducer = (state = initialState, action:blogsAction):BlogsState => {
	switch (action.type){
		case ActionTypes.SET_BLOGS:
			return{
				...state,
				blogs: action.payload,
			}
		case ActionTypes.SET_BLOGS_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload
			}
		default:
			return state
	}
}

export default blogReducer