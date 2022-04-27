import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware  from 'redux-thunk';

import blogReducer from "./blogs/blogReducer";
import productReducer from "./products/productReducer";
import commentReducer from "./comments/commentReducer";
import categoryMenuReducer from "./categoryMenu/categoryMenuReducer";
import tagReducer from "./tags/tagReducer";
import brandsReducer from "./brands/brandsReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
	productReducer,
	blogReducer,
	commentReducer,
	categoryMenuReducer,
	tagReducer,
	brandsReducer,
	cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
