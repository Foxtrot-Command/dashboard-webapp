import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import StatInputComponent from "./StatInputComponent";
import shallow from 'zustand/shallow'

const HealthInput = () => {

  const { cardHealth, setStats } = useCardStore(
    (state) => ({
      cardHealth: state.cardState.stats.health,
      setStats: state.setStats
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
