import {
  FormControl,
  GridItem,
  FormLabel,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import ImportCard from "./ImportCard";
import React, { useContext } from "react";
import CardContext from "../context/CardContext";

const NameInput = () => {
  const { state, dispatch } = useContext(CardContext);

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
          value={state.cardName}
          onChange={(e) =>
            dispatch({
              type: "cardName",
              cardName: e.target.value.toUpperCase(),
            })
          }
        />
        <ImportCard />
      </InputGroup>
    </FormControl>
  );
};

export default NameInput;
