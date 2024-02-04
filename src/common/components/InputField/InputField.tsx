import { Input } from '@chakra-ui/react'
import React from 'react'

function InputField({ ...props }: any) {

    const { placeholder } = props;

    return (
        <Input
            {...props}
            placeholder={placeholder}
            _placeholder={{
                layerStyle: "base",
                color: "neutrals.600",
            }}
            errorBorderColor="error.500"
            border="1px solid #626D7A"
            borderRadius="4px"
            size="sm"
            height="2.5rem"

            _hover={{
                background: "rgba(62, 71, 81, 0.2)",
                border: "2px solid #828E9B"
            }}
            _focus={{
                boxShadow: "0px 0px 0px 2px rgba(130, 142, 155, 0.4)",
                background: "rgba(62, 71, 81, 0.2)",
            }}
            _active={{
                background: "#626D7A"
            }}
        />
    )
}

export default InputField
