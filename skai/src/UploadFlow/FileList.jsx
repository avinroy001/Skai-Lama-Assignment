import React from "react";
import "./FileList.css"; 

const FileList = ({ files, setFiles }) => {
  const handleDelete = (id) => {
    const updatedFiles = files.filter(file => file.id !== id);
    setFiles(updatedFiles);
  };

  return (
    <div className="fileListContainer">
      <h2>Your Files</h2>
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
            <tr key={file.id}>
              <td>{index + 1}</td>
              <td>{file.name}</td>
              <td>{file.date}</td>
              <td className="actionButtons">
                <button className="viewBtn">View</button>
                <button className="deleteBtn" onClick={() => handleDelete(file.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
