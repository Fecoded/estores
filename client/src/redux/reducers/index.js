import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../user/userReducers";
import categoryReducer from "../category/categoryReducers";
import productReducer from "../product/productReducers";
import orderReducer from '../order/orderReducer'
import cartReducer from '../cart/cartReducer'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cartReducer'],
};

const rootReducer = combineReducers({
  userReducer,
  categoryReducer,
  productReducer,
  orderReducer,
  cartReducer
});

export default persistReducer(persistConfig, rootReducer);
