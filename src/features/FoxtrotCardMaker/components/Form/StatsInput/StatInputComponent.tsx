import { FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import React from 'react'

type Props = {
  value: number;
  label: string;
  onChange: any;
};

const StatInputComponent = ({ value, label, onChange }: Props) => (
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

export default StatInputComponent;
