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
    <Card>
      <CardHeader>
        <Heading size="md" w="25vw">
          Cart
        </Heading>
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
