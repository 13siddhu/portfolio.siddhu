import axios from 'axios';

// Use production URL directly for Vercel deployment
const PRODUCTION_URL = 'https://portfolio-backend-qfx20536e-siddharthas-projects-288c9c52.vercel.app';
const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/$/, '');

// For production, always use the production URL
const finalURL = typeof window !== 'undefined' && window.location.hostname === 'siddhartha-five.vercel.app' 
  ? PRODUCTION_URL 
  : API_URL;

console.log('Email Service - Environment:', import.meta.env.VITE_API_URL);
console.log('Email Service - Final API URL:', finalURL);

export const sendEmail = async (formData) => {
  try {
    const endpoint = `${finalURL}/api/send-email`;
    console.log('Sending email to:', endpoint);
    console.log('Form data:', formData);
    
    const response = await axios.post(endpoint, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Email response:', response.data);
    return {
      success: true,
      message: response.data.message
    };
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error response:', error.response);
    return {
      success: false,
      message: error.response?.data?.message || error.message || 'Failed to send email'
    };
  }
};
