import { extendTheme } from "@chakra-ui/react";
import {
  Button,
  Drawer,
  Input,
  Link,
  MenuTheme,
  Modal,
  Switch,
  Tabs,
  Tooltip,
  colors,
  fonts,
  layerStyles,
} from "common/setup/theme/chakra";

import Alert from "./chakra/components/Alert";

const borderRadius = {
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
};

const FoxtrotTheme = extendTheme({
  ...borderRadius,

  fonts,
  colors,
  components: {
    Modal,
    Button,
    Input,
    Alert,
    Menu: MenuTheme,
    Tabs,
    Link,
    Tooltip,
    Switch,
    Drawer,
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

export default FoxtrotTheme;
