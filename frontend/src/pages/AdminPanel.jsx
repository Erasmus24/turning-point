import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/users').then((response) => setUsers(response.data));
    axios.get('/api/admin/jobs').then((response) => setJobs(response.data));
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user._id}>
          <p>{user.name} - {user.email}</p>
          <button onClick={() => axios.delete(`/api/admin/users/${user._id}`)}>Delete</button>
        </div>
      ))}
      <h2>Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <p>{job.title} - {job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;