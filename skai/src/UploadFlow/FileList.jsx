import React from "react";
import "./FileList.css"; // Import CSS for styling

const files = [
  { id: 1, name: "THE SIDEPOD S2 EPISODE 15", date: "25 Oct 23 | 09:04" },
  { id: 2, name: "THE SIDEPOD S2 EPISODE 17", date: "27 Oct 23 | 11:08" },
  { id: 3, name: "THE SIDEPOD S2 EPISODE 20", date: "31 Oct 23 | 20:28" },
];

const FileList = () => {
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
                <button className="deleteBtn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
