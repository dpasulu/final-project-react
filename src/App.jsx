import { Flex, Stack } from "@chakra-ui/react";
import "./App.css";
import Cart from "./Cart/Cart";
import Menu from "./Menu/Menu";
import Bill from "./Bill/Bill";

function App() {
  return (
    <Flex>
      <Menu />
      <Stack>
        <Cart />
        <Bill />
      </Stack>
    </Flex>
  );
}

export default App;
