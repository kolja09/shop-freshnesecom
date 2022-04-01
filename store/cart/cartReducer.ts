import {ACTION_TYPES} from "./action";

const initialState = {
	items: {} as any,
	totalPrice: 0 as number,
	totalCount: 0 as number
}
const getTotalPrice = (arr: any) => arr.reduce((sum: number, obj: ProductsProps) => obj.price + sum, 0)

const cartReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ACTION_TYPES.ADD_PRODUCT_TO_CART: {
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
		case ACTION_TYPES.REMOVE_CART_ITEM: {
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
		case ACTION_TYPES.PLUS_CART_ITEM: {
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
		case ACTION_TYPES.MINUS_CART_ITEM: {
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