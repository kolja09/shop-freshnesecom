import {
	ActionTypes,
	SetAddProductToCart,
	SetMinusCartItem,
	SetPlusCartItem,
	SetRemoveCartItem
} from "./types";

export const addProductToCart = (productObj:ProductsProps): SetAddProductToCart => ({
	type: ActionTypes.ADD_PRODUCT_TO_CART,
	payload: productObj,
});

export const removeCartItem = (id:string): SetRemoveCartItem => ({
	type: ActionTypes.REMOVE_CART_ITEM,
	payload: id,
});

export const plusCartItem = (id:string): SetPlusCartItem => ({
	type: ActionTypes.PLUS_CART_ITEM,
	payload: id,
});

export const minusCartItem = (id:string): SetMinusCartItem => ({
	type: ActionTypes.MINUS_CART_ITEM,
	payload: id,
});