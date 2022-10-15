import dynamic from "next/dynamic";

import React, { useContext } from "react";

import { Box } from "@chakra-ui/react";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorCardContext from "views/Generators/CardGenerator/context/EditorCardContext";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const DescriptionEditor = () => {
  const { editorState, onEditorStateChange } = useContext(EditorCardContext);

  return (
    <Box>
      <Editor
        toolbar={{
          options: ["inline", "textAlign", "history"],
          inline: {
            inDropdown: false,
            options: ["bold", "italic", "underline", "strikethrough"],
          },
          textAlign: { inDropdown: false },
          link: { inDropdown: false },
          history: { inDropdown: false },
        }}
        editorState={editorState}
        toolbarClassName="editor-toolbar"
        wrapperClassName="editor-wrapper"
        editorClassName="editor-box"
        onEditorStateChange={onEditorStateChange}
      />
    </Box>
  );
};

export default DescriptionEditor;
