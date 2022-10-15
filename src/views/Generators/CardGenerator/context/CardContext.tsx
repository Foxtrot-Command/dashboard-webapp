import React, { useReducer, useState } from "react";

const initialState: {[key: string]: number | string} = {
  cardName: "",
  faction: "Bushido",
  rarity: "Common",
  mana: 1,
  attack: 1,
  health: 1,
  cardType: "",
  cardQuality: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "rarity":
      return { ...state, rarity: action.rarity };
    case "faction":
      return { ...state, faction: action.faction };
    case "cardName":
      return { ...state, cardName: action.cardName };
    case "mana":
      return { ...state, mana: Number(action.mana) };
    case "attack":
      return { ...state, attack: Number(action.attack) };
    case "health":
      return { ...state, health: Number(action.health) };
    case "cardType":
      return { ...state, cardType: action.cardType };
    case "cardQuality":
      return { ...state, cardQuality: action.cardQuality };
    case "multiStatement":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

const CardContext = React.createContext<any>({ state: initialState });
export default CardContext;


type Props = {
  children: React.ReactNode;
}

export function CardContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoadingContent, setLoadingContent] = useState<boolean>(false);

  return (
    <CardContext.Provider
      value={{
        state,
        dispatch,
        selectedImage,
        setSelectedImage,
        isLoadingContent,
        setLoadingContent,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
