import React from 'react';

function ResumePreview({ resume, onEdit, onDelete }) {
  return (
    <div className="resume-item">
      <h3>{resume.name}</h3>
      <p>Email: {resume.email}</p>
      <p>Phone: {resume.phone}</p>
      <p>Experience: {resume.experience}</p>
      <p>Skills: {resume.skills}</p> {/* Added skills display */}
      <div className="resume-buttons">
        <button className="edit-button" onClick={onEdit}>Edit</button>
        <button className="delete-button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ResumePreview;
