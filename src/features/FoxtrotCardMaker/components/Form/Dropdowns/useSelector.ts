import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { useEffect, useRef, useState } from "react";

type SelectorProp = "rarity" | "type" | "faction";

function useSelector(selector: SelectorProp) {

  const changesReference = useRef(useCardStore.getState());
  const { updateCardStateKey } = changesReference.current;

  const [selection, setSelection] = useState<string | undefined>("");

  const onSelectorChange = (event) => {
    setSelection(event);
    updateCardStateKey(selector, event)
  }

  useEffect(() => {
    const unsubChange = useCardStore.subscribe(state => {
      changesReference.current.cardState = state.cardState;
      setSelection(state.cardState[selector]);
    });

    return () => {
      unsubChange();
    };
  }, []);

  return {
    state: selection,
    actions: { onSelectorChange }
  }
}

export default useSelector;

