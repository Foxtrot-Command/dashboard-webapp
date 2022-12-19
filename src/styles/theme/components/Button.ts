import { ChakraTheme, DeepPartial, defineStyle, Theme } from "@chakra-ui/react";

const Button: DeepPartial<ChakraTheme["components"]["Button"]> = {
    variants: {
        glossy: (props) => ({
            cursor: "pointer",
            _hover: {
                opacity: 0.8,
            },
            _active: {
                opacity: 0.6,
                transform: 'scale(0.98)'
            }
        }),
    }
};

export default Button;
