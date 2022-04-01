import { apiService } from "../../api/api";
import { AppDispatch } from "../store";

export const ACTION_TYPES = {
	SET_BANNER: 'SET_BANNER'
}

const setBanner = (banner:any) => ({
	type: ACTION_TYPES.SET_BANNER,
	payload: banner
});

export const loadBanner = () => (dispatch:AppDispatch) => {
	apiService.getBanner().then(({data}) => dispatch(setBanner(data.banner)))
}
