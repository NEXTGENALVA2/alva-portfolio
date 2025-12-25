// Script to verify both local and Vercel backends are using the same MongoDB Atlas database
// Usage: node check-atlas-connection.js

import 'dotenv/config';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  liveSite: String,
  code: String
}, { collection: 'projects' });

const Project = mongoose.model('Project', projectSchema);

async function main() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas!');
    const projects = await Project.find().sort({ createdAt: -1 });
    console.log('Projects in DB:');
    projects.forEach(p => {
      console.log(`- ${p.title} (${p._id})`);
    });
    process.exit(0);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
}

main();
