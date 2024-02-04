import { ChakraTheme, DeepPartial } from "@chakra-ui/react";

const Modal: DeepPartial<ChakraTheme["components"]["Modal"]> = {
  baseStyle: {
    dialog: {
      background: "neutrals.950",
      borderRadius: "lg",
      border: "2px",
      borderColor: "neutrals.900",
      position: "relative",
      mx: "auto",
      marginLeft: 7,
      marginRight: 7,
    },
    dialogContainer: {},
  },
};

export default Modal;
