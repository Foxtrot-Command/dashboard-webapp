import { ChakraTheme, DeepPartial, cssVar } from "@chakra-ui/react";

const $arrowBg = cssVar("popper-arrow-bg");
const Tooltip: DeepPartial<ChakraTheme["components"]["Tooltip"]> = {
  baseStyle: {
    background: "white",
    paddingX: "2",
    paddingY: "1",
    borderRadius: "4px",
    [$arrowBg.variable]: "white",
  },
};

export default Tooltip;
