import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

console.log('Email Service API URL:', API_URL);

export const sendEmail = async (formData) => {
  try {
    console.log('Sending email to:', `${API_URL}/api/send-email`);
    console.log('Form data:', formData);
    
    const response = await axios.post(`${API_URL}/api/send-email`, {
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
