import { ChakraTheme, DeepPartial } from "@chakra-ui/react";

const Input: DeepPartial<ChakraTheme["components"]["Input"]> = {
  baseStyle: {
    field: {
      border: "1px solid",
      borderColor: "neutrals.700",
      fontWeight: 400,
      _hover: {
        borderColor: "neutrals.500",
      },
      _focus: {
        borderColor: "neutrals.500",
        boxShadow: "0 0 2px 2px var(--octopus-colors-neutrals-500)",
      },
    },
  },
  sizes: {
    xs: {
      field: {
        height: 7,
        width: "100%",
        borderRadius: "5px",
      },
    },
    sm: {
      field: {
        height: 8,
        borderRadius: "4px",
      },
    },

    md: {
      field: {
        borderRadius: "4px",
        fontSize: "md",
      },
    },

    lg: {
      field: {
        height: 16,
        borderRadius: "6px",
        fontSize: "lg",
      },
    },

    xl: {
      field: {
        height: { base: 16, lg: 20 },
        borderRadius: "6px",
        fontSize: { base: "lg", lg: "xl" },
        px: { base: 3, lg: 5 },
      },
    },

    "2xl": {
      field: {
        height: 24,
        borderRadius: "none",
        fontSize: "2xl",
        px: 5,
      },
    },
  },
};

export default Input;
