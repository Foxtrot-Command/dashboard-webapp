import React, { useState } from "react";

import { EditorState } from "draft-js";

export type EditorCardContextType = {
  editorState: EditorState;
  setEditorState: (todo: EditorState) => void;
  onEditorStateChange: (todo: EditorState) => void;
}

const EditorCardContext = React.createContext<EditorCardContextType | null>(null);
export default EditorCardContext;

export function EditorCardContextProvider({ children }: { children: React.ReactNode }) {

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: EditorState) => {
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
