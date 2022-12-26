import dynamic from "next/dynamic";

import { Box } from "@chakra-ui/react";
import { useCardStore } from "features/FoxtrotCardMaker/stores/CardStore";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const DescriptionEditor = () => {
  const { editorState, setEditorState } = useCardStore();

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
        onEditorStateChange={(state) => setEditorState(state)}
      />
    </Box>
  );
};

export default DescriptionEditor;
