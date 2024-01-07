import { Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { rupiah } from "../utils/currencyConvert";
import { Button, Center, Table, Tr, Td } from "@chakra-ui/react";

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
      <Center>
        <Stack>
      <Table variant={"unstyled"} size={"sm"}>
        <Tr>
          <Td>Price</Td>
          <Td>:</Td>
          <Td>{rupiah(price)}</Td>
        </Tr>
        <Tr>
          <Td>PPN</Td>
          <Td>:</Td>
          <Td>{rupiah((price * 10) / 100)}</Td>
        </Tr>
        <Tr>
          <Td>Service Charge</Td>
          <Td>:</Td>
          <Td>{rupiah((price * 5) / 100)}</Td>
        </Tr>
        <Tr>
          <Td>
            <b>Total Price</b>
          </Td>
          <Td>:</Td>
          <Td>
            {" "}
            <b>{rupiah(totalPrice)}</b>
          </Td>
        </Tr>
      </Table>
      <Button
            width="50%"
            colorScheme="green"
            style={{ marginTop: "5%", width: "100%" }}
            // onClick={() =>
            //   addToCart(
            //     cardContent.pizzaName,
            //     1,
            //     cardContent.pizzaPrice,
            //     cardContent.img
            //   )
            // }
          >
            Checkout
      </Button>
      </Stack>
    </Center>
  ) : (
    ""
  );
}
