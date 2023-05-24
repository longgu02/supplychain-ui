import { configureStore } from "@reduxjs/toolkit";
import orderCreateReducer from "./order/orderCreateSlice";
import walletReducer from "./connection/walletSlice";
import userReducer from "./connection/userSlice";
export const store = configureStore({
	reducer: {
		orderCreate: orderCreateReducer,
		wallet: walletReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;