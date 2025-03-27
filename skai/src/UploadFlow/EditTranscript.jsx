import React from "react";
import PropTypes from "prop-types";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const EditTranscript = ({ transcript, onBack }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: transcript || "<p>Loading...</p>",
  });

  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: "10px" }}>← Back</button>
      <h2>Edit Transcript</h2>
      <EditorContent editor={editor} />
    </div>
  );
};

EditTranscript.propTypes = {
  transcript: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default EditTranscript;
