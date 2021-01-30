import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../user/userReducers";
import categoryReducer from "../category/categoryReducers";
import productReducer from "../product/productReducers";
import orderReducer from '../order/orderReducer';
import cartReducer from '../cart/cartReducer';
import forgotpasswordReducer from '../forgotpassword/forgotpassword.reducer';

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
  cartReducer,
  forgotpasswordReducer
});

export default persistReducer(persistConfig, rootReducer);
