import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, theme } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    ...theme?.components?.Menu?.variants?.enclosed,
    zIndex: 20,
    borderRadius: "4px",
    bg: "dust.950",
    borderColor: "alto.950",
  },
  item: {
    layerStyle: "s",
    bg: "dust.950",
    _hover: {
      bg: "dust.900",
    },
  },
});

export const MenuTheme = defineMultiStyleConfig({ baseStyle });
