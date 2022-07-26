import { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import { EditorProps } from 'react-draft-wysiwyg'

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {

    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    const onEditorStateChange = (editorState: EditorState) => {
        setEditorState(editorState)
    }

    const ComponentWrapper = () => {

        return (<Editor
            toolbar={{
                options: ['inline', 'textAlign', 'history'],
                inline: {
                    inDropdown: false,
                    options: ['bold', 'italic', 'underline', 'strikethrough']
                },
                textAlign: { inDropdown: false },
                link: { inDropdown: false },
                history: { inDropdown: false },

            }}
            editorState={editorState}
            toolbarClassName="toolbar-classname"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
        />)
    };

    return {
        editorState,
        component: ComponentWrapper
    }

}

export default TextEditor