// @ts-nocheck

import { Select } from "@chakra-ui/react";
import { CardType } from "features/FoxtrotCardMaker/constants/cards";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { TCardType } from "features/FoxtrotCardMaker/types/cards";
import { capitalize } from "utils";

const TypeSelector = () => {
  const { cardState, setType } = useCardStore();

  return (
    <Select
      placeholder="Sin tipo"
      defaultValue={cardState.type}
      onChange={(
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
      ) => {
        setType(event.target.value as TCardType);
      }}
    >
      {Object.values(CardType).map((value: string, index: number) => (
        <option
          key={index}
          value={capitalize(value)}
          selected={value === cardState.type}
        >
          {capitalize(value)}
        </option>
      ))}
    </Select>
  );
};
export default TypeSelector;
