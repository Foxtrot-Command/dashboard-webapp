import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import shallow from "zustand/shallow";

import StatInputComponent from "./StatInputComponent";

const HealthInput = () => {
  const { cardHealth, setStats } = useCardStore(
    (state) => ({
      cardHealth: state.cardState.stats.health,
      setStats: state.setStats,
    }),
    shallow
  );

  return (
    <StatInputComponent
      value={cardHealth}
      label="Vida"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setStats({ health: event })
      }
    />
  );
};

export default HealthInput;
