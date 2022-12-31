import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import StatInputComponent from "./StatInputComponent";
import shallow from 'zustand/shallow'

const AttackInput = () => {

  const { cardAttack, setStats } = useCardStore(
    (state) => ({
      cardAttack: state.cardState.stats.attack,
      setStats: state.setStats
    }),
    shallow
  );

  return (
    <StatInputComponent
      value={cardAttack}
      label="Ataque"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setStats({ attack: event })
      }
    />
  );
};

export default AttackInput;
