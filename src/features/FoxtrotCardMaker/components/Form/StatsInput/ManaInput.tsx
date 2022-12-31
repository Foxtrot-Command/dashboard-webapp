import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import StatInputComponent from "./StatInputComponent";
import shallow from 'zustand/shallow'

const ManaInput = () => {

  const { cardMana, setStats } = useCardStore(
    (state) => ({
      cardMana: state.cardState.stats.mana,
      setStats: state.setStats
    }),
    shallow
  );

  return (
    <StatInputComponent
      value={cardMana}
      label="Mana"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setStats({ mana: event })
      }
    />
  );
};

export default ManaInput;
