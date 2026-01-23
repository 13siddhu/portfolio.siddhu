import nodemailer from 'nodemailer';

// Create transporter function (loads env vars when called)
const getTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.trim().slice(0, 1000); // Limit to 1000 chars
};

// Validate form data
const validateFormData = (name, email, subject, message) => {
  name = sanitizeInput(name);
  email = sanitizeInput(email);
  subject = sanitizeInput(subject);
  message = sanitizeInput(message);

  if (!name) {
    return { valid: false, message: 'Name is required' };
  }
  if (!email || !isValidEmail(email)) {
    return { valid: false, message: 'Valid email is required' };
  }
  if (!subject) {
    return { valid: false, message: 'Subject is required' };
  }
  if (!message) {
    return { valid: false, message: 'Message is required' };
  }
  if (message.length < 10) {
    return { valid: false, message: 'Message must be at least 10 characters long' };
  }
  return { valid: true, data: { name, email, subject, message } };
};

export const sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    const validation = validateFormData(name, email, subject, message);
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        message: validation.message
      });
    }

    const { data } = validation;
    const transporter = getTransporter(); // Create fresh transporter with current env vars

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Message from Your Portfolio</h2>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; word-wrap: break-word;">
            ${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'We received your message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting me!</h2>
          
          <p>Hi ${data.name},</p>
          <p>I received your message and will get back to you as soon as possible.</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <h3>Your Message:</h3>
          <p style="white-space: pre-wrap; word-wrap: break-word; background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p>Best regards,<br><strong>Siddhartha</strong></p>
          
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error.message // Remove this in production!
    });
  }
};
