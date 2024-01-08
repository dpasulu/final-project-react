import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import CartItem from "./CartItem";

export default function Cart() {
  const getCartData = useSelector((state) => state.pizza.cartData);
  return (
    <Card ml={4} width="100%" minWidth="16rem" minHeight="10rem">
      <CardHeader>
        <Heading size="100%">Cart</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {getCartData.map((item, index) => (
            <CartItem
              key={index}
              itemIndex={index}
              itemName={item.pizzaName}
              itemQty={item.quantity}
              itemPrice={item.price}
            ></CartItem>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}
