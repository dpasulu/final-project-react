import { Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { rupiah } from "../utils/currencyConvert";

export default function Bill() {
  const getCartData = useSelector((state) => state.pizza.cartData);
  const price = getCartData.reduce((acc, pizza) => {
    const itemTotalPrice = pizza.price * pizza.quantity;
    return acc + itemTotalPrice;
  }, 0);

  const ppn = (price * 10) / 100;
  const service = (price * 5) / 100;
  const totalPrice = price + ppn + service;

  return getCartData.length !== 0 ? (
    <Stack>
      <h1>Price : {rupiah(price)}</h1>
      <h1>PPN : {rupiah((price * 10) / 100)}</h1>
      <h1>Service Charge : {rupiah((price * 5) / 100)}</h1>
      <h1>Total Price : {rupiah(totalPrice)}</h1>
    </Stack>
  ) : (
    ""
  );
}
