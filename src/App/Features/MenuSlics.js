import { createSlice } from "@reduxjs/toolkit";
import { fastFoodProducts } from "../../assets/fake-data/products";
const initialState = {
    cart: [],
    items: fastFoodProducts,
}
const foodSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        add: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            }
            else {

                state.cart.push(action.payload)
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
    }
});
export const { add,removeItem } = foodSlice.actions;  //, increaseItemQuantity, decreaseItemQuantity, removeItem 
export default foodSlice.reducer;