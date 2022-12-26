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
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";

type Props = {
  value: number;
  label: string;
  onChange: any;
};

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
  const { cardState, setStats } = useCardStore();

  return (
    <Flex gap={3}>
      <InputMaker
        value={cardState.stats.mana}
        label="Mana"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setStats({ mana: event })
        }
      />

      <InputMaker
        value={cardState.stats.health}
        label="Vida"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setStats({ health: event })
        }
      />

      <InputMaker
        value={cardState.stats.attack}
        label="Ataque"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setStats({ attack: event })
        }
      />
    </Flex>
  );
};

export default StatsInput;
