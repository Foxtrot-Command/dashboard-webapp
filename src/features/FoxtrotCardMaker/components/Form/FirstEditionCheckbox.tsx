import React from "react";

import { Checkbox } from "@chakra-ui/react";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import shallow from "zustand/shallow";

import { BoxFieldset } from "../../../../common/components/BoxFieldset";

const FirstEditionCheckbox = () => {
  const { isFirstEdition, setFirstEdition } = useCardStore(
    (state) => ({
      isFirstEdition: state.cardState.isFirstEdition,
      setFirstEdition: state.setFirstEdition,
    }),
    shallow,
  );

  return (
    <BoxFieldset label="Extras">
      <Checkbox
        checked={isFirstEdition}
        defaultChecked={isFirstEdition}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFirstEdition(event.target.checked);
        }}
      >
        First edition
      </Checkbox>
    </BoxFieldset>
  );
};

export default FirstEditionCheckbox;
