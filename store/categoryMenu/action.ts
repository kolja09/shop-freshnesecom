import { apiService } from "../../api/api";
import { AppDispatch } from "../store";
import { ActionTypes, SetCategoryMenuAction } from "./types";

const setCategoryMenu = (categoryMenu: CategoryMenuProps[]): SetCategoryMenuAction => ({
	type: ActionTypes.SET_CATEGORY_MENU,
	payload: categoryMenu
});

export const loadCategoryMenu = () => (dispatch:AppDispatch) => {
	apiService.getCategoryMenu().then(({data}) => dispatch(setCategoryMenu(data.categoryMenu)))
}
