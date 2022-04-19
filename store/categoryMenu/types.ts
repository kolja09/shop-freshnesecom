export interface CategoryMenuState {
	categoryMenu: CategoryMenuProps[]
}

export enum ActionTypes {
	SET_CATEGORY_MENU = 'SET_CATEGORY_MENU'
}

export interface SetCategoryMenuAction {
	type: ActionTypes.SET_CATEGORY_MENU;
	payload: CategoryMenuProps[];
}

export type categoryMenuAction = SetCategoryMenuAction