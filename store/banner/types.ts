export interface BannerState {
	banner: BannerProps[],
}

export enum ActionTypes {
	SET_BANNER = 'SET_BANNER',
}

export interface SetBannersAction {
	type: ActionTypes.SET_BANNER;
	payload: BannerProps[];
}

export type bannersAction = SetBannersAction