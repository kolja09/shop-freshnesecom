import { ActionTypes, categoryMenuAction, CategoryMenuState } from "./types";

const initialState: CategoryMenuState = {
	categoryMenu: [],
}

const commentReducer = (state = initialState, action: categoryMenuAction):CategoryMenuState => {
	switch (action.type){
		case ActionTypes.SET_CATEGORY_MENU:
			return{
				...state,
				categoryMenu: action.payload,
			}
		default:
			return state
	}
}

export default commentReducer