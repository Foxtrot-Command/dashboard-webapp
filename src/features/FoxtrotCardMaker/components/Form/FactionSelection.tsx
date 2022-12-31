import { Box, Flex, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { capitalize } from "common/utils";
import { factionCheckbox } from "features/FoxtrotCardMaker/constants/cards";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { TCardFaction } from "features/FoxtrotCardMaker/types/cards";
import shallow from "zustand/shallow";

const FactionSelection = () => {
  const { cardFaction, setFaction } = useCardStore(
    (state) => ({
      cardFaction: state.cardState.faction,
      setFaction: state.setFaction,
    }),
    shallow
  );

  return (
    <Flex direction="column" gap={4} w="100%" position="relative">
      <RadioGroup
        onChange={(value) => setFaction(value as TCardFaction)}
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
