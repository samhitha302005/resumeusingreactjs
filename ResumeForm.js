import React, { useState, useEffect } from 'react';

function ResumeForm({ resume, onSave }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  useEffect(() => {
    if (resume) {
      setName(resume.name);
      setEmail(resume.email);
      setPhone(resume.phone);
      setExperience(resume.experience);
      setSkills(resume.skills);
    }
  }, [resume]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email, phone, experience, skills });
    setName('');
    setEmail('');
    setPhone('');
    setExperience('');
    setSkills('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Experience:</label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Skills:</label>
        <textarea
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
      </div>
      <div className="buttonContainer">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default ResumeForm;
