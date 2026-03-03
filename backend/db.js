// MongoDB connection utility
const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('MongoDB connection error: MONGODB_URI is not defined in the environment.');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected (Atlas)');
  } catch (err) {
    console.error('MongoDB connection error with Atlas URI:', err);
    console.warn('Falling back to local MongoDB instance (mongodb://localhost:27017/alva)');
    try {
      await mongoose.connect('mongodb://localhost:27017/alva');
      console.log('MongoDB connected (local)');
    } catch (localErr) {
      console.error('Local MongoDB connection also failed:', localErr);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
