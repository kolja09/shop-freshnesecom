export interface CommentsState {
	comments: CommentProps[],
}

export enum ActionTypes {
	SET_COMMENTS = 'SET_COMMENTS',
}

export interface SetCommentsAction {
	type: ActionTypes.SET_COMMENTS;
	payload: CommentProps[];
}

export type commentsAction = SetCommentsAction