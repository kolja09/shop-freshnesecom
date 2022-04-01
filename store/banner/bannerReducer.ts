import { ACTION_TYPES } from "./action";
import {BannerProps} from "../../static/types";

const initialState = {
	banner: [] as BannerProps[],
}

const bannerReducer = (state = initialState, action:any) => {
	switch (action.type){
		case ACTION_TYPES.SET_BANNER:
			return{
				...state,
				banner: action.payload
			}
		default:
			return state
	}
}

export default bannerReducer