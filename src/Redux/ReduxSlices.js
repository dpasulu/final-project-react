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
  },
});

export const { storeCartData } = pizzaSlice.actions;
export default pizzaSlice.reducer;
