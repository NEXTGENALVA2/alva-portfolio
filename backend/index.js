// Entry point for backend
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const projectsRouter = require('./routes/projects');
const coursesRouter = require('./routes/courses');
const uploadRouter = require('./routes/upload');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/upload', uploadRouter);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
