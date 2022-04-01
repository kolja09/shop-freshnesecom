import { apiService } from "../../api/api";
import { AppDispatch } from "../store";

export const ACTION_TYPES = {
	SET_CATEGORY_MENU: 'SET_CATEGORY_MENU'
}

const setCategoryMenu = (categoryMenu: any) => ({
	type: ACTION_TYPES.	SET_CATEGORY_MENU,
	payload: categoryMenu
});

export const loadCategoryMenu = () => (dispatch:AppDispatch) => {
	apiService.getCategoryMenu().then(({data}) => dispatch(setCategoryMenu(data.categoryMenu)))
}
