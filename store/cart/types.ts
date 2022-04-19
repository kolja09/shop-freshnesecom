export interface CartState {
	items: ProductsProps[],
	totalPrice: number,
	totalCount: number,
}

export enum ActionTypes {
	ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
	REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
	PLUS_CART_ITEM = 'PLUS_CART_ITEM',
	MINUS_CART_ITEM = 'MINUS_CART_ITEM',
}

export interface SetAddProductToCart {
	type: ActionTypes.ADD_PRODUCT_TO_CART;
	payload: ProductsProps;
}

export interface SetRemoveCartItem {
	type: ActionTypes.REMOVE_CART_ITEM;
	payload: string;
}

export interface SetPlusCartItem {
	type: ActionTypes.PLUS_CART_ITEM;
	payload: string;
}

export interface SetMinusCartItem {
	type: ActionTypes.MINUS_CART_ITEM;
	payload: string;
}

export type cartAction =
	SetAddProductToCart |
	SetRemoveCartItem |
	SetPlusCartItem |
	SetMinusCartItem
