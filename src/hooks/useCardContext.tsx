import React, { useContext } from "react";

import CardContext from "views/Generators/CardGenerator/context/CardContext";

export default function useCardContext() {
  const { state } = useContext<any>(CardContext);
  return state;
}
