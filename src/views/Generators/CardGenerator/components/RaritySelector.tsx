import { useContext } from "react";

import {
  Box,
  Flex,
  Stack,
  Text,
  Tooltip,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { rarityArr } from "views/Generators/CardGenerator/Utils/RawData";
import CardContext from "views/Generators/CardGenerator/context/CardContext";

type RadioCardType = {
  label: string;
  color: string;
  children?: React.ReactNode;
  isDisabled: boolean;
}
function RadioCard({label, color, children, ...props}: RadioCardType) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Tooltip label={label}>
        <Box
          {...checkbox}
          backgroundColor={color}
          cursor="pointer"
          borderRadius="md"
          width="32px"
          height="32px"
          _checked={{
            borderWidth: "4px",
            borderColor: "blackAlpha.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
        >
          {children}
        </Box>
      </Tooltip>
    </Box>
  );
}

const RaritySelector = () => {
  const { state, dispatch } = useContext(CardContext);

  const { getRadioProps } = useRadioGroup({
    name: "rarities",
    value: state.rarity,
    defaultValue: "Common",
    onChange: (rarity) => dispatch({ type: "rarity", rarity: rarity }),
  });

  return (
    <>
      <Flex direction="column" gap={4} w="100%" position="relative">
        <Stack direction="row">
          <Text my="auto">Rareza: </Text>
          {rarityArr.map(({ name, color, isDisabled }, index: number) => {
            const radio = getRadioProps({
              value: name,
            });
            return (
              <RadioCard
              {...radio}
                key={name}
                label={name}
                isDisabled={isDisabled}
                color={color}
              />
            );
          })}
        </Stack>
      </Flex>
    </>
  );
};

export default RaritySelector;
