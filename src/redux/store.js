import { configureStore } from "@reduxjs/toolkit";
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

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, CartReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    cart: CartReducer,
    products: ProductReducer,
  },
  persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
