import React, { useState } from 'react';
import axios from 'axios';

const EmployerDashboard = () => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
    category: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/jobs', job);
    alert('Job posted successfully!');
  };

  return (
    <div>
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        />
        <textarea
          placeholder="Job Description"
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Salary"
          value={job.salary}
          onChange={(e) => setJob({ ...job, salary: e.target.value })}
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default EmployerDashboard;