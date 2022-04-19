import { ActionTypes, bannersAction, BannerState } from "./types";

const initialState: BannerState = {
	banner: [],
}

const bannerReducer = (state = initialState, action:bannersAction):BannerState => {
	switch (action.type){
		case ActionTypes.SET_BANNER:
			return{
				...state,
				banner: action.payload,
			}
		default:
			return state
	}
}

export default bannerReducer