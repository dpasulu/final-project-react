import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

export default function OrderHistory() {
  const getOrderData = useSelector((state) => state.pizza.orderPlace);

  return (
    <>
      <div>
        {getOrderData.map((data) => (
          // <Text>{data[0].pizzaName}</Text>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Order Number #ID{data["orderId"]}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Nama Makanan</Th>
                        <Th>Jumlah Pesanan</Th>
                        <Th>Notes</Th>
                        <Th isNumeric>Price</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data.cartData.map((item) => (
                        <Tr>
                          <Th> {item.pizzaName}</Th>
                          <Th> {item.quantity}</Th>
                          <Th> {item.notes}</Th>
                          <Th isNumeric> {item.price}</Th>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
}
