import React, { useState } from 'react';
import axios from 'axios';

const JobSeekerDashboard = () => {
  const [resume, setResume] = useState(null);

  const handleApply = async (jobId) => {
    const formData = new FormData();
    formData.append('resume', resume);
    await axios.post(`/api/jobs/${jobId}/apply`, formData);
    alert('Application submitted!');
  };

  return (
    <div>
      <h1>Job Seeker Dashboard</h1>
      <input type="file" onChange={(e) => setResume(e.target.files[0])} />
      <button onClick={handleApply}>Upload Resume</button>
    </div>
  );
};

export default JobSeekerDashboard;