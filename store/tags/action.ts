import { apiService } from "../../api/api";
import { AppDispatch } from "../store";
import { ActionTypes, SetTagsAction } from "./types";

const setTags = (tags:string[]): SetTagsAction => ({
	type: ActionTypes.SET_TAGS,
	payload: tags
});

export const loadTags = () => (dispatch:AppDispatch) => {
	apiService.getTags().then(({data}) => dispatch(setTags(data.tags)))
};
