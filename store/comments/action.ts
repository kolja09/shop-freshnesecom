import { apiService } from "../../api/api";
import { AppDispatch } from "../store";
import { ActionTypes, SetCommentsAction } from "./types";

const setComments = (comments:CommentProps[]): SetCommentsAction => ({
	type: ActionTypes.SET_COMMENTS,
	payload: comments
});

export const loadComments = () => (dispatch:AppDispatch) => {
	apiService.getComments().then(({data}) => dispatch(setComments(data.comments)))
}
