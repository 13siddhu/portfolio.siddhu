import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await sendEmail(formData);
      
      if (response.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p className="intro-text">
          Have a question or want to collaborate? I'd love to hear from you. 
          Fill out the form below or reach out directly.
        </p>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            {status === 'success' && (
              <div className="alert alert-success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-error">
                ✗ Failed to send message. Please try again or email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me more..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-section">
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:siddharthasingh.workspace@gmail.com">siddharthasingh.workspace@gmail.com</a>
              </p>
            </div>

            <div className="info-section">
              <h3>📞 Phone</h3>
              <p>
                <a href="tel:+919598486555">+91 9598486555</a>
              </p>
            </div>

            <div className="info-section">
              <h3>📍 Location</h3>
              <p>Ballia ,UP <br />India</p>
            </div>

            <div className="info-section">
              <h3>🔗 Social Links</h3>
              <ul className="social-links">
                <li><a href="https://github.com/13siddhu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/siddhartha-singh-a46080286/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://x.com/13siddhu" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>

            <div className="info-section">
              <h3>⏰ Response Time</h3>
              <p>I typically respond within 24-48 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
