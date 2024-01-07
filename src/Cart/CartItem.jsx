import React from "react";
import { Box, Heading, Text, Flex, Button, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { storeCartData } from "../Redux/ReduxSlices";
import { rupiah } from "../utils/currencyConvert";

export default function CartItem({ itemName, itemQty, itemPrice, itemImage }) {
  const dispatch = useDispatch();
  const getCartData = useSelector((state) => state.pizza.cartData);

  const addItemQty = (name) => {
    const newCartData = getCartData.map((data) => {
      if (data.pizzaName == name) {
        let currentQty = data.quantity;
        return { ...data, quantity: (currentQty += 1) };
      }

      return data;
    });

    dispatch(storeCartData(newCartData));
  };

  const reduceItemQty = (name) => {
    const newCartData = getCartData.map((data) => {
      if (data.pizzaName == name) {
        if (data.quantity > 1) {
          let currentQty = data.quantity;
          return { ...data, quantity: (currentQty -= 1) };
        } else {
          return data;
        }
      }

      return data;
    });

    dispatch(storeCartData(newCartData));
  };

  return (
    <Box>
      <Box>
        <Image src={itemImage} objectFit="cover" boxSize></Image>
      </Box>
      <Heading size="xs" textTransform="uppercase">
        {itemName} - {rupiah(itemPrice * itemQty)}
      </Heading>
      <Button colorScheme="blue" onClick={() => addItemQty(itemName)}>
        +
      </Button>
      <Text pt="2" fontSize="sm">
        {itemQty}
      </Text>
      <Button onClick={() => reduceItemQty(itemName)}>-</Button>
    </Box>
  );
}
