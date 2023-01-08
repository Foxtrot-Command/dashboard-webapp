import { Box, Select } from "@chakra-ui/react";
import { CARD_TYPE_VALUES } from "features/FoxtrotCardMaker/constants/cards";
import { TCardType } from "features/FoxtrotCardMaker/types/cards";
import useSelector from "./useSelector";

const TypeSelector = () => {

  const {state: cardType, actions: {onSelectorChange}} = useSelector("type");

  return (
    <Select
      placeholder="Sin tipo"
      defaultValue={cardType}
      value={cardType}
      textTransform="capitalize"
      onChange={(
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
      ) => {
        onSelectorChange(event.target.value as TCardType);
      }}
    >
      {Object.values(CARD_TYPE_VALUES).map((value: string, index: number) => (
        <Box as="option" key={index} value={value}>
          {value}
        </Box>
      ))}
    </Select>
  );
};
export default TypeSelector;
