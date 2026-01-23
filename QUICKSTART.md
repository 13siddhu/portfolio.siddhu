# Quick Start Guide

## 🚀 Get Running in 2 Minutes

### 1. Install & Run Frontend

```bash
# You're already in the portfolio-react directory
npm run dev
```

Opens at: `http://localhost:5173`

### 2. Set Up Backend (For Email)

Create a new folder for the backend:

```bash
cd ..
mkdir portfolio-backend
cd portfolio-backend
npm init -y
npm install express cors nodemailer dotenv
```

Create `server.js`:

```javascript
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

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
      subject: `Portfolio: ${subject}`,
      html: `<h2>${name}</h2><p>${message}</p><p>Reply: ${email}</p>`
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => console.log('Server on 3001'));
```

Create `.env`:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

Run:

```bash
node server.js
```

### 3. Now Your Portfolio Works!

- Visit `http://localhost:5173`
- Fill contact form → email arrives!

## 📝 Customize Content

### Edit Your Info

- **src/components/Header.jsx** - Nav links
- **src/components/Footer.jsx** - Contact info
- **src/pages/Home.jsx** - Intro & projects
- **src/pages/About.jsx** - Bio & education
- **src/pages/Projects.jsx** - Add your projects
- **src/pages/Contact.jsx** - Phone/email/social

### Change Colors

Open `src/App.css` and change `#3b82f6` to your color everywhere.

## 🎨 Add Your Logo/Image

1. Put image in `public/`
2. Use in components: `<img src="/image.png" />`

## 📦 Deploy

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

## ❓ Issues?

**Email not sending?**
- Backend running on port 3001? 
- Check .env variables
- Browser console → check API URL

**Styling broken?**
- npm install again
- Clear browser cache
- Check CSS imports

**Build failed?**
- Delete node_modules
- npm install
- npm run build

## 📚 Learn More

- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind Colors: Try changing to Tailwind CSS in the future!

---

**That's it!** You have a professional portfolio with email integration. 🎉
