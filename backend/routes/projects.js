const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: err.message || 'Failed to fetch projects' });
  }
});

// Add a new project
router.post('/', async (req, res) => {
  try {
    const { title, description, imageUrl, liveSite, code } = req.body;
    const project = new Project({ title, description, imageUrl, liveSite, code });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a project
router.put('/:id', async (req, res) => {
  try {
    const { title, description, imageUrl, liveSite, code } = req.body;
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, imageUrl, liveSite, code },
      { new: true }
    );
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error('Error updating project:', err);
    res.status(400).json({ error: err.message });
  }
});

// Delete a project
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    console.error('Error deleting project:', err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
