import { DeepPartial, Theme } from "@chakra-ui/react";

const extendedColors: DeepPartial<Record<string, any>> = {
    faction: {
        bushido: "#502828",
        forgotten: "#4d3818",
        resistence: "#bd7800",
    },
    neutrals: {
        200: "#D6DCE5",
        300: "#828E9B",
        500: "#626D7A",
        700: "#3E4751",
        900: "#23272E",
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
}


const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
    ...overridenChakraColors,
    ...extendedColors,
};

export default colors;