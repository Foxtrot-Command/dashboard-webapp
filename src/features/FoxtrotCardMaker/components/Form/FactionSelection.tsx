import { Flex, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import { factionCheckbox } from "features/FoxtrotCardMaker/constants/cards";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { TCardFaction } from "features/FoxtrotCardMaker/types/cards";
import { capitalize } from "utils";

const FactionSelection = () => {
  const { cardState, setFaction } = useCardStore();

  return (
    <Flex direction="column" gap={4} w="100%" position="relative">
      <RadioGroup
        onChange={(value) => setFaction(value as TCardFaction)}
        value={cardState.faction}
      >
        <HStack flexWrap="wrap">
          {factionCheckbox.map(({ name, isDisabled }, index: number) => (
            <Radio value={capitalize(name)} key={index} isDisabled={isDisabled}>
              {capitalize(name)}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </Flex>
  );
};

export default FactionSelection;
