import { Flex, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { factionCheckbox } from "features/FoxtrotCardMaker/constants/cards";
import { TCardFaction } from "features/FoxtrotCardMaker/types/cards";

import useSelector from "./useSelector";

const FactionSelection = () => {
  const {
    state: cardFaction,
    actions: { onSelectorChange },
  } = useSelector("faction");

  return (
    <Flex direction="column" gap={4} w="100%" position="relative">
      <RadioGroup
        onChange={(value) => onSelectorChange(value as TCardFaction)}
        value={cardFaction}
        textTransform="capitalize"
      >
        <HStack flexWrap="wrap">
          {factionCheckbox.map(({ name, isDisabled }, index: number) => (
            <Radio
              value={name}
              id={`${index}_${name}`}
              key={index}
              isDisabled={isDisabled}
            >
              {name}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </Flex>
  );
};

export default FactionSelection;
