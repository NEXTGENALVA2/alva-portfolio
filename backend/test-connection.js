// Diagnostic script to test MongoDB and API connection
require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  console.log('🔍 Testing MongoDB Connection...\n');

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ MONGODB_URI not set in backend/.env');
    return;
  }

  console.log('✓ MongoDB URI found');
  console.log(`  URI: ${uri.substring(0, 40)}...`);

  try {
    console.log('\n⏳ Connecting to MongoDB...');
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
    });
    console.log('✅ MongoDB connected successfully!');

    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`\n📚 Collections found: ${collections.length}`);
    collections.forEach(col => console.log(`   - ${col.name}`));

    // Try fetching projects
    const Project = require('../models/Project');
    const count = await Project.countDocuments();
    console.log(`\n📊 Total projects in DB: ${count}`);

    await mongoose.connection.close();
    console.log('\n✅ Connection test completed!');
  } catch (err) {
    console.error('❌ MongoDB Connection Failed:', err.message);
    console.error('\nTroubleshooting steps:');
    console.error('1. Verify MongoDB Atlas credentials in backend/.env');
    console.error('2. Check network access in MongoDB Atlas (IP whitelist)');
    console.error('3. Ensure database exists and is accessible');
  }
}

testConnection();
