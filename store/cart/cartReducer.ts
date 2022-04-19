import { ActionTypes, cartAction, CartState } from "./types";

const initialState: CartState = {
	items: [],
	totalPrice: 0,
	totalCount: 0,
}

const getTotalPrice = (arr: ProductsProps[]) => arr.reduce((sum: number, obj: ProductsProps) => obj.price + sum, 0);

const cartReducer = (state = initialState, action: cartAction): CartState => {
	switch (action.type) {
		case ActionTypes.ADD_PRODUCT_TO_CART: {
			const currentProductItems = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload]

			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentProductItems,
					totalPrice: getTotalPrice(currentProductItems),
				}
			}
			const totalCount = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].items.length + sum,
				0
			);

			const totalPrice = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].totalPrice + sum,
				0
			);

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			}
		}
		case ActionTypes.REMOVE_CART_ITEM: {
			const newItems = {
				...state.items
			}
			const currentTotalPrice = newItems[action.payload].totalPrice;
			const currentTotalCount = newItems[action.payload].items.length;
			delete newItems[action.payload];

			return {
				...state,
				items: newItems,
				totalPrice: state.totalPrice - currentTotalPrice,
				totalCount: state.totalCount - currentTotalCount,
			};
		}
		case ActionTypes.PLUS_CART_ITEM: {
			const newObjItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0]
			];

			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems),
				}
			};

			const totalCount = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].items.length + sum,
				0
			);

			const totalPrice = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].totalPrice + sum,
				0
			);

			return {
				...state,
				items: newItems,
				totalPrice,
				totalCount,
			}
		}
		case ActionTypes.MINUS_CART_ITEM: {
			const oldItems = state.items[action.payload].items;
			const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems),
				}
			};

			const totalCount = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].items.length + sum,
				0
			);

			const totalPrice = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].totalPrice + sum,
				0
			);

			return {
				...state,
				items: newItems,
				totalPrice,
				totalCount,
			}
		}
		default:
			return state
	}
}

export default cartReducer