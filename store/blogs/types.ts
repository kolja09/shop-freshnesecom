export interface BlogsState {
	blogs: PostProps[],
	currentPage: number,
	perPage: number,
}

export enum ActionTypes {
	SET_BLOGS = 'SET_BLOGS',
	SET_BLOGS_CURRENT_PAGE = 'SET_BLOGS_CURRENT_PAGE',
}

export interface SetBlogsAction {
	type: ActionTypes.SET_BLOGS;
	payload: PostProps[];
}

export interface SetBlogsCurrentPageAction {
	type: ActionTypes.SET_BLOGS_CURRENT_PAGE;
	payload: number;
}

export type blogsAction = SetBlogsAction | SetBlogsCurrentPageAction