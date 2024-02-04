import { ChakraTheme, DeepPartial } from "@chakra-ui/react";

const Alert: DeepPartial<ChakraTheme["components"]["Alert"]> = {
  baseStyle: {
    container: {
      background: "neutrals.950",
      borderRadius: 4,
      border: "2px",
      borderColor: "neutrals.900",
      position: "relative",
      mx: "auto",
      marginRight: 3,
      marginBottom: 3,
    },
    icon: {
      color: "primary.500",
    },
  },
  variants: {
    elegant: () => {
      return {
        container: {
          background: "neutrals.1000",
          borderRadius: 4,
          border: "2px",
          borderColor: "neutrals.900",
          position: "relative",
          mx: "auto",
          marginLeft: "6",
          marginRight: 10,
        },
        icon: {
          color: "primary.500",
        },
      };
    },
  },
};

export default Alert;
