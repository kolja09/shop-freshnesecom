export interface TagsState {
	tags: string[],
}

export enum ActionTypes {
	SET_TAGS = 'SET_TAGS',
}

export interface SetTagsAction {
	type: ActionTypes.SET_TAGS;
	payload: string[];
}

export type tagsAction = SetTagsAction