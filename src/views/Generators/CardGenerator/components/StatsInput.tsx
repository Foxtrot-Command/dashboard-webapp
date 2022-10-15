import React, { useContext } from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import CardContext from "views/Generators/CardGenerator/context/CardContext";

type Props = {
  value: number;
  label: string;
  onChange: any
}

const InputMaker = ({ value, label, onChange }: Props) => (
  <FormControl>
    <FormLabel
      htmlFor="last_name"
      fontSize="sm"
      fontWeight="md"
      color="gray.700"
      _dark={{
        color: "gray.50",
      }}
      mb={3}
    >
      {label}
    </FormLabel>
    <NumberInput
      size="sm"
      defaultValue={1}
      max={15}
      min={0}
      clampValueOnBlur={false}
      value={value}
      key={label}
      onChange={onChange}
    >
      <NumberInputField borderRadius={6} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </FormControl>
);

const StatsInput = () => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <Flex gap={3}>
      <InputMaker
        value={state.mana}
        label="Mana"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "mana", mana: e })
        }
      />

      <InputMaker
        value={state.health}
        label="Vida"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "health", health: e })
        }
      />

      <InputMaker
        value={state.attack}
        label="Ataque"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "attack", attack: e })
        }
      />
    </Flex>
  );
};

export default StatsInput;
