import StatInputComponent from "./StatInputComponent";
import useStatInput from "./useStatInput";

const HealthInput = () => {
  const {
    state: { stat },
    actions: { onInputChange },
  } = useStatInput("health");

  return (
    <StatInputComponent
      value={stat}
      label="Vida"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onInputChange(event)
      }
    />
  );
};

export default HealthInput;
