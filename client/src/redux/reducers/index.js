import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../user/userReducers";
import categoryReducer from "../category/categoryReducers";
import productReducer from "../product/productReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  userReducer,
  categoryReducer,
  productReducer
});

export default persistReducer(persistConfig, rootReducer);
