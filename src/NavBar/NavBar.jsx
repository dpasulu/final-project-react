import { HStack, Image, Input } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeSearchKeyword } from "../Redux/ReduxSlices";

export default function NavBar() {
  const getSearchKeyword = useSelector((state) => state.pizza.searchKeyword);
  const dispatch = useDispatch();
  return (
    <HStack px={25} py={25}>
      <Image
        src="src/assets/RichieLogo.png"
        alt="Dan Abramov"
        height={"50px"}
        marginRight={"10px"}
      />
      <Input
        placeholder="Search for pizzas!"
        width={"50%"}
        onChange={(e) => dispatch(storeSearchKeyword(e.target.value))}
      >
        {console.log(getSearchKeyword)}
      </Input>
    </HStack>
  );
}
