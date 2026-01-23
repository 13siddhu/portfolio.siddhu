import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const sendEmail = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/api/send-email`, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    });

    return {
      success: true,
      message: response.data.message
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to send email'
    };
  }
};
