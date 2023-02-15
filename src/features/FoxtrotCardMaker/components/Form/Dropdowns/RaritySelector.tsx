import {
  Box,
  Flex,
  Stack,
  Text,
  Tooltip,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { rarityCheckbox } from "features/FoxtrotCardMaker/constants/cards";
import { TCardRarity } from "features/FoxtrotCardMaker/types/cards";
import useSelector from "./useSelector";

type RadioCardType = {
  label?: string;
  color: string;
  children?: React.ReactNode;
  isDisabled: boolean;
};
function RadioCard({ label, color, children, ...props }: RadioCardType) {
  const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(props);

  return (
    <Box as="label">
      <input {...getInputProps({})} hidden />
      <Tooltip textTransform="capitalize" label={label} bg="neutrals.700" color="white">
        <Box
          {...getCheckboxProps()}
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
          {...getLabelProps()}
        >
          {children}
        </Box>
      </Tooltip>
    </Box>
  );
}

const RaritySelector = () => {

  const {state: cardRarity, actions: {onSelectorChange}} = useSelector("rarity");

  const { getRadioProps, getRootProps } = useRadioGroup({
    name: "rarities",
    defaultValue: cardRarity,
    value: cardRarity,
    onChange: (rarity) => onSelectorChange(rarity as TCardRarity),
  });

  return (
    <>
      <Flex direction="column" gap={4} w="100%" position="relative">
        <Stack direction="row" {...getRootProps()}>
          <Text my="auto">Rareza: </Text>
          {rarityCheckbox.map(({ name, color, isDisabled }, index: number) => {
            return (
              <RadioCard
                {...getRadioProps({
                  value: name,
                })}
                key={index}
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
