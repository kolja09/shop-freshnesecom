import { apiService } from "../../api/api";
import { AppDispatch } from "../store";

export const ACTION_TYPES = {
	SET_TAGS: 'SET_TAGS'
}

const setTags = (tags:any) => ({
	type: ACTION_TYPES.SET_TAGS,
	payload: tags
});

export const loadTags = () => (dispatch:AppDispatch) => {
	apiService.getTags().then(({data}) => dispatch(setTags(data.tags)))
}
