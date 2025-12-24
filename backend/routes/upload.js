const express = require('express');
const multer = require('multer');
const cloudinary = require('../cloudinary');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    let responded = false;
    // Upload to Cloudinary using upload_stream
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'image', folder: 'alva-projects' },
      (error, result) => {
        if (responded) return;
        responded = true;
        if (error) {
          console.error('Cloudinary error:', error);
          return res.status(500).json({ error: error.message || 'Cloudinary upload failed' });
        }
        if (!result || !result.secure_url) {
          return res.status(500).json({ error: 'No image URL returned from Cloudinary' });
        }
        return res.json({ url: result.secure_url });
      }
    );

    uploadStream.on('error', (err) => {
      if (!responded) {
        responded = true;
        console.error('Stream error:', err);
        return res.status(500).json({ error: 'Image upload stream error' });
      }
    });

    uploadStream.end(req.file.buffer);

    // Fallback: If Cloudinary doesn't respond in 30s, send error
    setTimeout(() => {
      if (!responded) {
        responded = true;
        return res.status(500).json({ error: 'Image upload timed out' });
      }
    }, 30000);
  } catch (err) {
    console.error('Upload error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: err.message || 'Unknown upload error' });
    }
  }
});

module.exports = router;
