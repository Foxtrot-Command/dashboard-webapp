import { ChakraTheme, DeepPartial } from "@chakra-ui/react";

const Link: DeepPartial<ChakraTheme["components"]["Link"]> = {
  baseStyle: {
    color: "primary.600",
    textDecoration: "underline",
    _hover: {
      color: "primary.500",
    },
  },
};

export default Link;
