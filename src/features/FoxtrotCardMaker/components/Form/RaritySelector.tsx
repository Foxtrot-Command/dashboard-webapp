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
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { TCardRarity } from "features/FoxtrotCardMaker/types/cards";
import { capitalize } from "utils";

type RadioCardType = {
  label?: string;
  color: string;
  children?: React.ReactNode;
  isDisabled: boolean;
};
function RadioCard({ label, color, children, ...props }: RadioCardType) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Tooltip label={label} bg="neutrals.700" color="white">
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
  const { cardState, setRarity } = useCardStore();

  const { getRadioProps } = useRadioGroup({
    name: "rarities",
    value: cardState.rarity,
    defaultValue: "Common",
    onChange: (rarity) => setRarity(rarity as TCardRarity),
  });

  return (
    <>
      <Flex direction="column" gap={4} w="100%" position="relative">
        <Stack direction="row">
          <Text my="auto">Rareza: </Text>
          {rarityCheckbox.map(({ name, color, isDisabled }, index: number) => {
            const radio = getRadioProps({
              value: capitalize(name),
            });
            return (
              <RadioCard
                {...radio}
                key={index}
                label={capitalize(name)}
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
