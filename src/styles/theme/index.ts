import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import fonts from "./fonts";
import layerStyles from "./layerStyles";

const fxdTheme = extendTheme({
  fonts,
  colors,
  breakpoints: {
    sm: '30em',
    md: '46em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  layerStyles,
  styles: {
    global: (props: any) => ({
      body: {},
    }),
  },
  shadows: {
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
