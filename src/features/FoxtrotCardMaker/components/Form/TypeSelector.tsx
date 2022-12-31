// @ts-nocheck

import { Select } from "@chakra-ui/react";
import { CardType } from "features/FoxtrotCardMaker/constants/cards";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { TCardType } from "features/FoxtrotCardMaker/types/cards";
import { capitalize } from "common/utils";
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
      onChange={(
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
      ) => {
        setType(event.target.value as TCardType);
      }}
    >
      {Object.values(CardType).map((value: string, index: number) => (
        <option
          key={index}
          value={value}
        >
          {capitalize(value)}
        </option>
      ))}
    </Select>
  );
};
export default TypeSelector;
