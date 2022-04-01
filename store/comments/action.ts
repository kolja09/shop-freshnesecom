import { apiService } from "../../api/api";
import { AppDispatch } from "../store";

export const ACTION_TYPES = {
	SET_COMMENTS: 'SET_COMMENTS'
}

const setComments = (comments:any) => ({
	type: ACTION_TYPES.SET_COMMENTS,
	payload: comments
});

export const loadComments = () => (dispatch:AppDispatch) => {
	apiService.getComments().then(({data}) => dispatch(setComments(data.comments)))
}
