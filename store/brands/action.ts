import { apiService } from "../../api/api";
import { AppDispatch } from "../store";

export const ACTION_TYPES = {
	SET_BRANDS: 'SET_BRANDS'
}

const setBrands = (brands:any) => ({
	type: ACTION_TYPES.SET_BRANDS,
	payload: brands
});

export const loadBrands = () => (dispatch:AppDispatch) => {
	apiService.getBrands().then(({data}) => dispatch(setBrands(data.brands)))
}
