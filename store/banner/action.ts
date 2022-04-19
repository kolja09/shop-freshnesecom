import { apiService } from "../../api/api";
import { AppDispatch } from "../store";
import { ActionTypes, SetBannersAction } from "./types";

const setBanner = (banner:BannerProps[]): SetBannersAction => ({
	type: ActionTypes.SET_BANNER,
	payload: banner
});

export const loadBanner = () => (dispatch:AppDispatch) => {
	apiService.getBanner().then(({data}) => dispatch(setBanner(data.banner)))
}
