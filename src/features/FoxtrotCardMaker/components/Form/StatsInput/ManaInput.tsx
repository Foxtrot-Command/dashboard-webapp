import StatInputComponent from "./StatInputComponent";
import useStatInput from "./useStatInput";

const ManaInput = () => {
  const {
    state: { stat },
    actions: { onInputChange },
  } = useStatInput("mana");

  return (
    <StatInputComponent
      value={Number(stat)}
      label="Mana"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onInputChange(event)
      }
    />
  );
};

export default ManaInput;
