export const ACTION_TYPES = {
	ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
	REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
	PLUS_CART_ITEM: 'PLUS_CART_ITEM',
	MINUS_CART_ITEM: 'MINUS_CART_ITEM',
}

export const addProductToCart = (productObj:any) => ({
	type: ACTION_TYPES.ADD_PRODUCT_TO_CART,
	payload: productObj
});

export const removeCartItem = (id:string) => ({
	type: ACTION_TYPES.REMOVE_CART_ITEM,
	payload: id
});

export const plusCartItem = (id:string) => ({
	type: ACTION_TYPES.PLUS_CART_ITEM,
	payload: id
});

export const minusCartItem = (id:string) => ({
	type: ACTION_TYPES.MINUS_CART_ITEM,
	payload: id
});