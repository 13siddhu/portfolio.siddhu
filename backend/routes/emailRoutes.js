import express from 'express';
import { sendEmail } from '../controllers/emailController.js';

const router = express.Router();

// Handle OPTIONS preflight requests
router.options('/send-email', (req, res) => {
  res.sendStatus(200);
});

// POST endpoint to send email
router.post('/send-email', sendEmail);

// GET endpoint for testing
router.get('/send-email', (req, res) => {
  res.json({ message: 'Use POST method to send email' });
});

export default router;
