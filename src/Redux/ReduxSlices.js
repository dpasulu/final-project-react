import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  searchKeyword: "",
  orderPlace: [],
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
    storeOrderPlace: (state, action) => {
      state.orderPlace = state.cartData;
      console.log("orderplace: "+JSON.stringify(state.orderPlace));
      state.cartData = [];
    }
  },
});

export const { storeCartData, storeSearchKeyword, deleteCartData, storeOrderPlace, } =
  pizzaSlice.actions;
export default pizzaSlice.reducer;
