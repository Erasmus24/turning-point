const express = require('express');
const User = require('../models/User');
const Job = require('../models/Job');
const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
});

// Get all jobs
router.get('/jobs', async (req, res) => {
    const jobs = await Job.find().populate('employer');
    res.json(jobs);
});

module.exports = router;