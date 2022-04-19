import { apiService } from "../../api/api";
import { AppDispatch } from "../store";
import { ActionTypes, SetBrandsAction } from "./types";

const setBrands = (brands:string[]): SetBrandsAction => ({
	type: ActionTypes.SET_BRANDS,
	payload: brands
});

export const loadBrands = () => (dispatch:AppDispatch) => {
	apiService.getBrands().then(({data}) => dispatch(setBrands(data.brands)))
}
