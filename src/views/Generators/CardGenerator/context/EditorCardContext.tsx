import { EditorState } from "draft-js";
import React, { useState } from "react";

const EditorCardContext = React.createContext<any>({});
export default EditorCardContext;

export function EditorCardContextProvider({ children }) {
  const [editorState, setEditorState] = useState<EditorState | any>(
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  return (
    <EditorCardContext.Provider
      value={{
        editorState,
        setEditorState,
        onEditorStateChange,
      }}
    >
      {children}
    </EditorCardContext.Provider>
  );
}
