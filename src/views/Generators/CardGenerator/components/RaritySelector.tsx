import { useContext } from "react"
import { Flex, Stack, Tooltip, Box, useRadio, useRadioGroup, Text } from "@chakra-ui/react"
import { rarityArr } from "views/Generators/CardGenerator/Utils/RawData"
import CardContext from "views/Generators/CardGenerator/context/CardContext"


function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Tooltip label={props.label}>
                <Box
                    {...checkbox}
                    backgroundColor={props.color}
                    cursor='pointer'
                    borderRadius='md'
                    width="32px"
                    height="32px"
                    _checked={{
                        borderWidth: '4px',
                        borderColor: 'blackAlpha.600',
                    }}
                    _focus={{
                        boxShadow: 'outline',
                    }}
                >
                    {props.children}
                </Box>
            </Tooltip>
        </Box>
    )
}

const RaritySelector = () => {

    const { state, dispatch } = useContext(CardContext)

    const { getRadioProps } = useRadioGroup({
        name: 'rarities',
        value: state.rarity,
        defaultValue: 'Common',
        onChange: (rarity) => dispatch({ type: 'rarity', rarity: rarity }),
    })

    return (
        <>
            <Flex direction="column" gap={4} w="100%" position="relative">
                <Stack direction='row'>
                    <Text my="auto">Rareza: </Text>
                    {rarityArr.map(({ name, color, isDisabled }, index: number) => {
                        const radio = getRadioProps({
                            value: name
                        })
                        return (

                            <RadioCard
                                key={name}
                                label={name} {...radio} isDisabled={isDisabled} color={color}>
                            </RadioCard>
                        )
                    })}
                </Stack>
            </Flex>
        </>
    )
}

export default RaritySelector;