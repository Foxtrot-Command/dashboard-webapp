import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { SetStateAction, useEffect, useRef, useState } from "react";
import shallow from "zustand/shallow";

type SelectorProp = "mana" | "attack" | "health";

function useStatInput(selector: SelectorProp) {

  const changesReference = useRef(useCardStore.getState());
  const { setStats } = changesReference.current;

  const [stat, setActualStat] = useState<number>(0);

  const onInputChange = (event) => {
    setActualStat(event);
    setStats({[selector]: event});
  }

  useEffect(() => {
    const unsubChange = useCardStore.subscribe(state => {
      changesReference.current = state;
      setActualStat(state.cardState.stats[selector]);
    });

    return () => {
      unsubChange();
    };
  }, []);

  return {
    state: {stat},
    actions: {onInputChange}
  }
}

export default useStatInput;

