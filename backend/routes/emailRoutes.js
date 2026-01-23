import express from 'express';
import { sendEmail } from '../controllers/emailController.js';

const router = express.Router();

// POST endpoint to send email
router.post('/send-email', sendEmail);

// GET endpoint for testing
router.get('/send-email', (req, res) => {
  res.json({ message: 'Use POST method to send email' });
});

export default router;
