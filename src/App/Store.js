import { configureStore } from "@reduxjs/toolkit";
import foodReducer from './Features/MenuSlics';
export const Store = configureStore({
    reducer: {
        cart: foodReducer,
    },
})