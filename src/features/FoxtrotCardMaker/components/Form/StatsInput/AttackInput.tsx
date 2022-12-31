import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import shallow from "zustand/shallow";

import StatInputComponent from "./StatInputComponent";

const AttackInput = () => {
  const { cardAttack, setStats } = useCardStore(
    (state) => ({
      cardAttack: state.cardState.stats.attack,
      setStats: state.setStats,
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
