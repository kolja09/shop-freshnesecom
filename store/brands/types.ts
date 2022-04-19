export interface BrandsState {
	brands: string[],
}

export enum ActionTypes {
	SET_BRANDS = 'SET_BRANDS',
}

export interface SetBrandsAction {
	type: ActionTypes.SET_BRANDS;
	payload: string[]
}

export type brandsAction = SetBrandsAction