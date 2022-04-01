import { ACTION_TYPES } from "./action";

const initialState = {
	categoryMenu: [] as CategoryMenuProps[],
}

const commentReducer = (state = initialState, action:any) => {
	switch (action.type){
		case ACTION_TYPES.SET_CATEGORY_MENU:
			return{
				...state,
				categoryMenu: action.payload
			}
		default:
			return state
	}
}

export default commentReducer