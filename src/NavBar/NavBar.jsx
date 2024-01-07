import { HStack, Image, Input } from "@chakra-ui/react";
import React from "react";

export default function NavBar() {
  return (
    <HStack px={25} py={25}>
      <Image
        src="src/assets/RichieLogo.png"
        alt="Dan Abramov"
        height={"50px"}
        marginRight={"10px"}
      />
      <Input placeholder="Search for pizzas!" width={"50%"}></Input>
    </HStack>
  );
}
