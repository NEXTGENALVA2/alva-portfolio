const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).json({ error: err.message || 'Failed to fetch courses' });
  }
});

// Add a new course
router.post('/', async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;
    const course = new Course({ title, description, videoUrl });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    console.error('Error adding course:', err);
    res.status(400).json({ error: err.message });
  }
});

// Delete a course
router.delete('/:id', async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    console.error('Error deleting course:', err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
