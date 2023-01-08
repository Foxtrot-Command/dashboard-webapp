import StatInputComponent from "./StatInputComponent";
import useStatInput from "./useStatInput";

const AttackInput = () => {
  const {state:{stat}, actions: {onInputChange}} = useStatInput('attack');

  return (
    <StatInputComponent
      value={stat}
      label="Ataque"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onInputChange(event)
      }
    />
  );
};

export default AttackInput;
