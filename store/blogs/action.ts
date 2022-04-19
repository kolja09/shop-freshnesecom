import { apiService } from "../../api/api";
import { AppDispatch } from "../store";
import { ActionTypes, SetBlogsAction, SetBlogsCurrentPageAction } from "./types";

const setBlogs = (blogs:PostProps[]): SetBlogsAction => ({
	type: ActionTypes.SET_BLOGS,
	payload: blogs,
});

export const setBlogsCurrentPage = (page:number): SetBlogsCurrentPageAction => ({
	type: ActionTypes.SET_BLOGS_CURRENT_PAGE,
	payload: page,
});

export const loadBlogs = () => (dispatch:AppDispatch) => {
	apiService.getBlogs().then(({data}) => dispatch(setBlogs(data.postInfo)))
}
