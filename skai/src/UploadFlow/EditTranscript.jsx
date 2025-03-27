import React from "react";
import PropTypes from "prop-types";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FaArrowLeftLong } from "react-icons/fa6";

const EditTranscript = ({ transcript, onBack }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: transcript || "<p>Loading...</p>",
  });

  return (
    <div>
      {/* <button onClick={onBack} style={{ marginBottom: "10px" ,width: "10rem"}}>← Back</button> */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }} onClick={onBack}>
        <FaArrowLeftLong size={32} />
        <h1>Edit Transcript</h1>
      </div>
      <EditorContent
        editor={editor}
        style={{
          border: "2px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
};

EditTranscript.propTypes = {
  transcript: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default EditTranscript;
