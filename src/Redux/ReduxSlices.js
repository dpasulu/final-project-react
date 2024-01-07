import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    // MENU DATA
    storeCartData: (state, action) => {
      state.cartData = action.payload;
    },
    deleteCartData: (state, action) => {
      state.cartData = state.cartData.filter((cart) => cart.pizzaName !== action.payload)
    }
  },
});

export const { storeCartData, deleteCartData } = pizzaSlice.actions;
export default pizzaSlice.reducer;
