import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";

import ImportCard from "./ImportCard";

const NameInput = () => {
  const { cardState, setName } = useCardStore();
  return (
    <FormControl>
      <FormLabel
        htmlFor="card_name"
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{
          color: "gray.50",
        }}
      >
        Nombre de carta
      </FormLabel>
      <InputGroup size="md" w="100%">
        <Input
          type="text"
          name="first_name"
          id="first_name"
          autoComplete="given-name"
          mt={1}
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          pr="5.4rem"
          value={cardState.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value.toUpperCase())
          }
        />
        <ImportCard />
      </InputGroup>
    </FormControl>
  );
};

export default NameInput;
