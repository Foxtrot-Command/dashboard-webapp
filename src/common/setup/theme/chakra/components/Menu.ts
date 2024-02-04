import { ChakraTheme, DeepPartial, theme } from "@chakra-ui/react";

const Menu: DeepPartial<ChakraTheme["components"]["Menu"]> = {
  variants: {
    elegant: () => ({
      ...theme?.components?.Menu?.variants,
      list: {
        ...theme?.components?.Menu?.variants?.enclosed,
        zIndex: 20,
        borderRadius: "4px",
        bg: "neutrals.900",
        borderColor: "neutrals.1000",
      },
      item: {
        color: "neutrals.200",
        bg: "neutrals.900",
        _hover: {
          bg: "neutrals.1000",
        },
      },
      groupTitle: {
        color: "neutrals.200",
      },
    }),
  },
};

export default Menu;
