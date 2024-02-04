import { ChakraTheme, DeepPartial } from "@chakra-ui/react";

const Drawer: DeepPartial<ChakraTheme["components"]["Drawer"]> = {
  baseStyle: {
    dialog: {
      background: "white",
      border: "2px",
      borderColor: "primary.100",
      position: "relative",
    },
  },
};

export default Drawer;
