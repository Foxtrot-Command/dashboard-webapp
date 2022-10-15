import React, { useState } from "react";

export type SaveCardContextType = {
  documentSize: string;
  setDocumentSize: (todo: string) => void;
  loadingQuality: boolean;
  setLoadingQuality: (todo: boolean) => void;
}

const SaveCardContext = React.createContext<SaveCardContextType | null>(null);
export default SaveCardContext;

export function SaveCardContextProvider({ children }: {children: React.ReactNode}) {
  const [documentSize, setDocumentSize] = useState<string>("0 MB");
  const [loadingQuality, setLoadingQuality] = useState<boolean>(false);

  return (
    <SaveCardContext.Provider
      value={{
        documentSize,
        setDocumentSize,
        loadingQuality,
        setLoadingQuality,
      }}
    >
      {children}
    </SaveCardContext.Provider>
  );
}
