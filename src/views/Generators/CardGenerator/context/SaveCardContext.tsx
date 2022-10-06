import React, { useState } from 'react'


const SaveCardContext = React.createContext<any>({})
export default SaveCardContext

export function SaveCardContextProvider({ children }) {

    const [documentSize, setDocumentSize] = useState<string>("0 MB");
    const [loadingQuality, setLoadingQuality] = useState<boolean>(false);

    return (
        <SaveCardContext.Provider value={{
            documentSize,
            setDocumentSize,
            loadingQuality,
            setLoadingQuality
        }}>
            {children}
        </SaveCardContext.Provider>
    )
}
