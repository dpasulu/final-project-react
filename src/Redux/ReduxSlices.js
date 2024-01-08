import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  searchKeyword: "",
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
      state.cartData = state.cartData.filter(
        (cart) => cart.pizzaName !== action.payload
      );
    },
    storeSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    // storeCheckout: (state, action) => {
    //   state.cartData = action.storeCheckout;
    // },
  },
});

export const { storeCartData, storeSearchKeyword, deleteCartData } =
  pizzaSlice.actions;
export default pizzaSlice.reducer;
