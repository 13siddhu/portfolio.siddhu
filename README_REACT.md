# Portfolio Website - React Version

A modern, responsive portfolio website built with React, Vite, and integrated email functionality.

## Features

- ✨ Modern, responsive design
- 🚀 Fast performance with Vite
- 📧 Integrated email contact form (with backend mailer)
- 📱 Mobile-friendly UI
- 🎨 Beautiful gradient designs
- 🔗 Easy navigation with React Router
- 💪 Showcases your projects and skills

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation header
│   └── Footer.jsx       # Footer with links
├── pages/
│   ├── Home.jsx         # Home page with hero section
│   ├── About.jsx        # About page with stats
│   ├── Projects.jsx     # Projects showcase
│   └── Contact.jsx      # Contact form
├── services/
│   └── emailService.js  # Email API integration
├── styles/
│   ├── Header.css
│   ├── Footer.css
│   ├── Home.css
│   ├── About.css
│   ├── Projects.css
│   └── Contact.css
├── App.jsx              # Main app component
└── App.css              # Global styles
```

## Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Update the environment variables:
```
VITE_API_URL=http://localhost:3001
```

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## Email Integration

The contact form sends emails via a backend API. You need to set up a backend server with:

### Backend Setup (Node.js + Express)

Create a backend server (separate project) with:

```javascript
// Example backend endpoint
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

app.use(express.json());

// Configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

### Environment Variables (Backend)

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PORT=3001
```

**Note:** For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

## Pages

### Home
- Hero section with introduction
- Featured projects
- Skills showcase

### About
- Personal bio
- Journey and experience
- Statistics
- Education and certifications

### Projects
- Showcase all projects
- Display technologies used
- Links to GitHub

### Contact
- Contact form with validation
- Email integration
- Contact information sidebar
- Social links

## Technologies Used

### Frontend
- React 18
- Vite
- React Router DOM
- Axios (HTTP client)

### Styling
- CSS3
- Responsive Design
- Flexbox & Grid
- Animations

### Backend (Optional)
- Node.js
- Express
- Nodemailer

## Customization

### Update Your Information

Edit the relevant components:

1. **Header/Footer**: Update email, phone, social links
2. **Home**: Modify intro text and featured projects
3. **About**: Update your bio, stats, and education
4. **Projects**: Add your projects with descriptions
5. **Contact**: Update contact information

### Styling

- Colors: Change the primary color (#3b82f6) in CSS files
- Fonts: Update font-family in `App.css`
- Spacing: Adjust padding/margin as needed

## Performance Tips

- Use optimized images
- Lazy load components for large portfolios
- Minify CSS/JS (Vite does this automatically)
- Use CDN for static assets

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the `dist` folder to Netlify
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

Then:
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## Troubleshooting

### Email not sending?
- Check backend is running on port 3001
- Verify VITE_API_URL in .env.local
- Check browser console for CORS errors
- Verify email credentials on backend

### Styling issues?
- Clear browser cache (Ctrl+Shift+Delete)
- Check if CSS files are imported correctly
- Use browser DevTools to inspect elements

### Build errors?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for syntax errors in JSX

## License

MIT License - feel free to use this as your portfolio!

## Support

For issues or questions, create an issue in the repository.

Happy coding! 🚀
