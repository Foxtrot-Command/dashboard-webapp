// @ts-nocheck
import { Box, Select } from "@chakra-ui/react";
import { CardType } from "features/FoxtrotCardMaker/constants/cards";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { TCardType } from "features/FoxtrotCardMaker/types/cards";
import shallow from "zustand/shallow";

const TypeSelector = () => {
  const { cardType, setType } = useCardStore(
    (state) => ({
      cardType: state.cardState.type,
      setType: state.setType,
    }),
    shallow
  );

  return (
    <Select
      placeholder="Sin tipo"
      defaultValue={cardType}
      value={cardType}
      textTransform="capitalize"
      onChange={(
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
      ) => {
        setType(event.target.value as TCardType);
      }}
    >
      {Object.values(CardType).map((value: string, index: number) => (
        <Box as="option" key={index} value={value}>
          {value}
        </Box>
      ))}
    </Select>
  );
};
export default TypeSelector;
