import { apiService } from "../../api/api";
import { AppDispatch } from "../store";

export const ACTION_TYPES = {
	SET_BLOGS: 'SET_BLOGS',
	SET_BLOGS_CURRENT_PAGE:'SET_BLOGS_CURRENT_PAGE'
}

const setBlogs = (blogs:any) => ({
	type: ACTION_TYPES.SET_BLOGS,
	payload: blogs
});

export const setBlogsCurrentPage = (page:any) => ({
	type: ACTION_TYPES.SET_BLOGS_CURRENT_PAGE,
	payload: page
});

export const loadBlogs = () => (dispatch:AppDispatch) => {
	apiService.getBlogs().then(({data}) => dispatch(setBlogs(data.postInfo)))
}
