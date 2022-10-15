import React from "react";

import CardView from "views/Generators/CardGenerator/card";
import { CardContextProvider } from "views/Generators/CardGenerator/context/CardContext";
import { EditorCardContextProvider } from "views/Generators/CardGenerator/context/EditorCardContext";
import { SaveCardContextProvider } from "views/Generators/CardGenerator/context/SaveCardContext";

const ContextProviders = ({ children }: {children: React.ReactNode}) => (
  <CardContextProvider>
    <SaveCardContextProvider>
      <EditorCardContextProvider>{children}</EditorCardContextProvider>
    </SaveCardContextProvider>
  </CardContextProvider>
);

const card = () => {
  return (
    <ContextProviders>
      <CardView />
    </ContextProviders>
  );
};

export default card;
