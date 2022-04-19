import { ActionTypes, commentsAction, CommentsState } from "./types";

const initialState: CommentsState = {
	comments: [],
}

const commentReducer = (state = initialState, action:commentsAction):CommentsState => {
	switch (action.type){
		case ActionTypes.SET_COMMENTS:
			return{
				...state,
				comments: action.payload,
			}
		default:
			return state
	}
}

export default commentReducer
