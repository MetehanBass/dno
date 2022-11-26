import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getPersistConfig } from "redux-deep-persist";
import CartReducer from "./reducers/cartSlice";
import ProductReducer from "./reducers/productSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ProductReducer,
});

const persistConfig = getPersistConfig({
  key: "root",
  storage: storage,
  whitelist: ["cart", "products.selectedProduct"],
  rootReducer, // your root reducer must be also passed here
});

const rootState = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    rootState,
  },
  rootState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
