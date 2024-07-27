import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.css';

function App() {
  const [resumes, setResumes] = useState([]);
  const [currentResume, setCurrentResume] = useState(null);

  const handleSave = (resume) => {
    setResumes([...resumes, resume]);
    setCurrentResume(null);
  };

  const handleEdit = (index) => {
    setCurrentResume(resumes[index]);
    setResumes(resumes.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    setResumes(resumes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="container">
        <ResumeForm resume={currentResume} onSave={handleSave} />
      </div>
      <div className="resumes-section">
        <h2>Preview Resumes</h2>
        <div className="resumes-container">
          {resumes.map((resume, index) => (
            <ResumePreview
              key={index}
              resume={resume}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

