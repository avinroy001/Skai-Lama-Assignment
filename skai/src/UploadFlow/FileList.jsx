import React from "react";
import PropTypes from "prop-types";
import "./FileList.css";

const FileList = ({ files, setFiles, fetchFiles }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/projects/delete-podcast/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        setFiles(files.filter((file) => file.id !== id && file._id !== id));
        await fetchFiles(); 
      } else {
        console.error("Error deleting file:", data.message);
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div className="fileListContainer">
      <h2>Your Files</h2>
      {files.length > 0 ? (
        <table className="fileTable">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Upload Date & Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={file.id || file._id}>
                <td>{index + 1}</td>
                <td>{file.name || "Unnamed Podcast"}</td>
                <td>{file.date ? new Date(file.date).toLocaleString() : "Unknown Date"}</td>
                <td className="actionButtons">
                  <button className="viewBtn">View</button>
                  <button className="deleteBtn" onClick={() => handleDelete(file.id || file._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No podcasts available.</p>
      )}
    </div>
  );
};
FileList.propTypes = {
  files: PropTypes.array.isRequired,        
  setFiles: PropTypes.func.isRequired,     
  fetchFiles: PropTypes.func.isRequired,    
};

export default FileList;
