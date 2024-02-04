import { ChakraTheme, DeepPartial } from "@chakra-ui/react";

const Switch: DeepPartial<ChakraTheme["components"]["Switch"]> = {
  baseStyle: {
    track: {
      _checked: {
        bg: "primary.600",
      },
    },
  },
};

export default Switch;
