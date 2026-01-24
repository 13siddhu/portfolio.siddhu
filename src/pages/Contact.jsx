import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

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

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'siddharthasingh.workspace@gmail.com',
      link: 'mailto:siddharthasingh.workspace@gmail.com',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91 9598486555',
      link: 'tel:+919598486555',
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'Ballia, UP\nIndia',
    },
    {
      icon: '⏰',
      title: 'Response Time',
      content: 'I typically respond within 24-48 hours',
    },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/13siddhu' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/siddhartha-singh-a46080286/' },
    { name: 'Twitter', url: 'https://x.com/13siddhu' },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-5xl lg:text-7xl font-black text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-fade-in-up relative">
          Get In Touch
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
        </h1>

        <p className="text-center text-lg text-slate-300 max-w-2xl mx-auto mb-16 leading-relaxed animate-fade-in-up animation-delay-200">
          Have a question or want to collaborate? I'd love to hear from you. 
          Fill out the form below or reach out directly.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-900/60 rounded-3xl p-8 lg:p-12 border-2 border-indigo-500/30 overflow-hidden animate-fade-in-up animation-delay-300">
              {/* Background Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 animate-pulse"></div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="relative mb-6 p-4 bg-emerald-500/20 border-2 border-emerald-500/50 rounded-2xl text-emerald-300 font-semibold text-center animate-fade-in-up">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="relative mb-6 p-4 bg-red-500/20 border-2 border-red-500/50 rounded-2xl text-red-300 font-semibold text-center animate-fade-in-up">
                  ✗ Failed to send message. Please try again or email me directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block mb-2 text-sm font-bold text-slate-300 uppercase tracking-wider group-focus-within:text-indigo-400 transition-colors">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-6 py-4 bg-slate-800/70 backdrop-blur-sm border-2 border-indigo-500/30 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/30 transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block mb-2 text-sm font-bold text-slate-300 uppercase tracking-wider group-focus-within:text-indigo-400 transition-colors">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-6 py-4 bg-slate-800/70 backdrop-blur-sm border-2 border-indigo-500/30 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/30 transition-all duration-300"
                  />
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label htmlFor="subject" className="block mb-2 text-sm font-bold text-slate-300 uppercase tracking-wider group-focus-within:text-indigo-400 transition-colors">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-6 py-4 bg-slate-800/70 backdrop-blur-sm border-2 border-indigo-500/30 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/30 transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block mb-2 text-sm font-bold text-slate-300 uppercase tracking-wider group-focus-within:text-indigo-400 transition-colors">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me more..."
                    className="w-full px-6 py-4 bg-slate-800/70 backdrop-blur-sm border-2 border-indigo-500/30 rounded-2xl text-white placeholder-slate-500 resize-vertical focus:outline-none focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/30 transition-all duration-300"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full px-8 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10">
                    {loading ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 animate-fade-in-up animation-delay-400">
            {/* Info Cards */}
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="group backdrop-blur-xl bg-slate-900/60 rounded-2xl p-6 border-2 border-indigo-500/20 transition-all duration-300 hover:scale-105 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {info.icon}
                  </span>
                  <div className="flex-1 min-w-0"> {/* Added min-w-0 to ensure flex child shrinks properly */}
                    <h3 className="text-indigo-400 font-bold mb-2 group-hover:text-pink-400 transition-colors">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        // ADDED 'break-all' to the className below
                        className="text-slate-300 hover:text-white transition-colors whitespace-pre-line break-all block" 
                      >
                        {info.content}
                      </a>
                    ) : (
                      // ADDED 'break-all' to the className below
                      <p className="text-slate-300 group-hover:text-white transition-colors whitespace-pre-line break-all">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          
            {/* Social Links */}
            <div className="backdrop-blur-xl bg-slate-900/60 rounded-2xl p-6 border-2 border-indigo-500/20">
              <h3 className="text-indigo-400 font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🔗</span>
                Social Links
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((social, idx) => (
                  <li key={idx}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-indigo-500 group-hover/link:text-pink-500 transition-colors">→</span>
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;