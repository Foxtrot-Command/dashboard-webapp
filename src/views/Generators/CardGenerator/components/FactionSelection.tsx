import { RadioGroup, HStack, Radio, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import CardContext from "../context/CardContext";
import { factionArr } from "../Utils/RawData";

const FactionSelection = () => {
  const { dispatch, state } = useContext(CardContext);

  return (
    <Flex direction="column" gap={4} w="100%" position="relative">
      <RadioGroup
        onChange={(value) => dispatch({ type: "faction", faction: value })}
        value={state.faction}
      >
        <HStack flexWrap="wrap">
          {factionArr.map(({ name, isDisabled }, index: number) => (
            <Radio value={name} key={index} isDisabled={isDisabled}>
              {name}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </Flex>
  );
};

export default FactionSelection;
