import { ActionTypes, tagsAction, TagsState } from "./types";

const initialState: TagsState = {
	tags: [],
}

const tagReducer = (state = initialState, action: tagsAction):TagsState => {
	switch (action.type){
		case ActionTypes.SET_TAGS:
			return{
				...state,
				tags: action.payload,
			}
		default:
			return state
	}
}

export default tagReducer