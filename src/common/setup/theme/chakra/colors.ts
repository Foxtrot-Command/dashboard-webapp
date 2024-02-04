import { DeepPartial, Theme } from "@chakra-ui/react";

const extendedColors: DeepPartial<Record<string, any>> = {
  neutrals: {
    50: "#f6f6f6",
    100: "#e7e7e7",
    200: "#d1d1d1",
    300: "#b0b0b0",
    400: "#888888",
    500: "#6d6d6d",
    600: "#5d5d5d",
    700: "#4f4f4f",
    800: "#454545",
    900: "#3d3d3d",
    950: "#1e1e1e",
    1000: "#181a1f",
  },
  dust: {
    50: "#f6f6f6",
    100: "#e7e7e7",
    200: "#d1d1d1",
    300: "#b0b0b0",
    400: "#888888",
    500: "#666666",
    600: "#5d5d5d",
    700: "#4f4f4f",
    800: "#454545",
    900: "#3d3d3d",
    950: "#262626",
  },
  alto: {
    50: "#f7f7f7",
    100: "#ededed",
    200: "#dadada",
    300: "#c8c8c8",
    400: "#adadad",
    500: "#999999",
    600: "#888888",
    700: "#7b7b7b",
    800: "#676767",
    900: "#545454",
    950: "#363636",
  },
  primary: {
    200: "#FFC2C7",
    300: "#E5656E",
    500: "#BE1622",
    700: "#800F18",
    900: "#491418",
  },
  secondary: {
    200: "#FFD4C2",
    300: "#F2936B",
    500: "#E76A35",
    700: "#994623",
    900: "#6E351D",
  },
  success: {
    200: "#99EBC5",
    300: "#4FDB9A",
    500: "#1DC678",
    700: "#1D925B",
    900: "#165437",
  },
  warning: {
    200: "#F7E8B5",
    300: "#F0D373",
    500: "#ECC546",
    700: "#C9A21F",
    900: "#745F19",
  },
  error: {
    200: "#F8B1BD",
    300: "#F16A81",
    500: "#ED3C5A",
    700: "#C51C38",
    900: "#711726",
  },
  shades: {
    0: "#FFFFFF",
    1000: "#000000",
  },
};

const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
