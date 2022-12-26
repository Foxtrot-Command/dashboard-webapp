import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import { Button, Input, Modal, Tabs } from "./components/";
import { MenuTheme } from "./components/MenuTheme";
import fonts from "./fonts";
import layerStyles from "./layerStyles";

const fxdTheme = extendTheme({
  fonts,
  colors,
  components: {
    Modal,
    Button,
    Input,
    Menu: MenuTheme,
    Tabs,
  },
  breakpoints: {
    sm: "30em",
    md: "46em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  styles: {
    global: {
      "html, body, #root": {
        backgroundColor: "neutrals.1000",
      },
    },
  },
  layerStyles,
  shadows: {
    inset: "inset 2px 4px 8px rgba(0, 0, 0, 0.4)",
    outline: "0 !important",
    brand: {
      shadow: {
        md: "4px 5px 24px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    cssVarPrefix: "fxd",
  },
});

export default fxdTheme;
