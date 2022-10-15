import { useContext } from "react";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditorCardContext from "views/Generators/CardGenerator/context/EditorCardContext";
import { Box } from "@chakra-ui/react";
import React from "react";

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
