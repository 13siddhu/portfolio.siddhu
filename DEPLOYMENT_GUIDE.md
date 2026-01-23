# Complete Setup Guide: Separate Frontend & Backend with Vercel Deployment

## 📁 Project Structure
```
portfolio-react/
├── frontend/                 # React app
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.development
│   ├── .env.production
│   └── vercel.json
│
└── backend/                  # Node.js backend
    ├── server.js
    ├── routes/
    ├── controllers/
    ├── package.json
    ├── .env.example
    ├── vercel.json
    └── README.md
```

## ✅ Step 1: Local Development Setup

### 1.1 Backend Setup
```bash
cd backend
cp .env.example .env
# Edit .env with your Gmail credentials
npm install
npm run dev
```

Backend will run on: **http://localhost:3001**

### 1.2 Frontend Setup
```bash
cd ..
# Frontend already has dependencies, just update .env
npm run dev
```

Frontend will run on: **http://localhost:5173**

### 1.3 Test Contact Form
- Navigate to http://localhost:5173/contact
- Fill the form and submit
- You should receive emails to both yourself and the user

---

## 🚀 Step 2: Deploy Backend on Vercel

### 2.1 Prepare Backend for Vercel
```bash
cd backend
git init
git add .
git commit -m "Backend setup"
```

### 2.2 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-backend.git
git branch -M main
git push -u origin main
```

### 2.3 Deploy on Vercel

**Option A: Using Vercel Dashboard (Easiest)**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your `portfolio-backend` repo
5. Set **Root Directory** to `./` (since backend is the whole repo)
6. Add Environment Variables:
   ```
   PORT=3001
   NODE_ENV=production
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```
7. Click **Deploy** ✓

**Option B: Using Vercel CLI**
```bash
npm install -g vercel
cd backend
vercel
# Follow prompts and add environment variables
```

### 2.4 Get Backend URL
After deployment, you'll get a URL like:
```
https://portfolio-backend-xyz.vercel.app
```

---

## 🎨 Step 3: Deploy Frontend on Vercel

### 3.1 Update Frontend .env
Edit `.env.production`:
```env
VITE_API_URL=https://your-backend-url.vercel.app
```

### 3.2 Push to GitHub
```bash
cd portfolio-react
git add .env.production
git commit -m "Update backend URL"
git push origin main
```

### 3.3 Deploy Frontend on Vercel

**Option A: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your `portfolio-react` repo
4. Set **Root Directory** to `./`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add Environment Variables (if needed):
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```
8. Click **Deploy** ✓

**Option B: Using Vercel CLI**
```bash
vercel
# Follow prompts
```

### 3.4 Get Frontend URL
After deployment, you'll get a URL like:
```
https://your-portfolio.vercel.app
```

---

## 🔄 Step 4: Final Configuration

### 4.1 Update Backend CORS
If you get CORS errors, update backend `server.js` with your frontend URL:
```javascript
const allowedOrigins = [
  'https://your-portfolio.vercel.app',
  'http://localhost:5173',
];
```

Then redeploy backend.

### 4.2 Test Production
1. Go to your frontend URL
2. Test the contact form
3. Should receive emails successfully ✓

---

## 📋 Environment Variables Checklist

### Backend (.env in Vercel)
```
✓ PORT=3001
✓ NODE_ENV=production
✓ EMAIL_SERVICE=gmail
✓ EMAIL_USER=your-email@gmail.com
✓ EMAIL_PASSWORD=your-app-password
✓ RECIPIENT_EMAIL=your-email@gmail.com
✓ FRONTEND_URL=https://your-portfolio.vercel.app
```

### Frontend (.env.production)
```
✓ VITE_API_URL=https://your-backend-url.vercel.app
```

---

## 🔐 Gmail App Password Setup

If you haven't generated Gmail App Password yet:

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** if not already enabled
4. Search for **"App passwords"**
5. Select **Mail** and **Windows Computer**
6. Google generates a 16-character password
7. Copy it and use in `.env` as `EMAIL_PASSWORD`

---

## 🚨 Troubleshooting

### CORS Error on Frontend
**Problem:** "Access to XMLHttpRequest blocked by CORS policy"

**Solution:**
1. Check `FRONTEND_URL` in backend `.env`
2. Make sure it matches your actual frontend URL
3. Redeploy backend after updating

```bash
cd backend
vercel --prod
```

### Email Not Sending
**Problem:** "Failed to send email"

**Checklist:**
- [ ] Gmail 2FA is enabled
- [ ] App password is correct (16 characters)
- [ ] EMAIL_USER matches your Gmail
- [ ] RECIPIENT_EMAIL is valid
- [ ] Backend is running (check `/health` endpoint)

### Port 3001 Already in Use (Local)
```bash
# Change PORT in backend/.env to 3002
# Update frontend .env.development to http://localhost:3002
```

### Build Fails on Vercel
1. Check build logs in Vercel dashboard
2. Make sure all dependencies are in `package.json`
3. Check for environment variables
4. Run `npm run build` locally to test

---

## 📱 Mobile Testing

### Test on Your Phone
1. Get your local IP: `ipconfig getifaddr en0` (Mac) or `ipconfig` (Windows)
2. Use `http://YOUR-IP:5173` instead of localhost
3. Make sure your phone is on same WiFi
4. Backend should be accessible from phone too

---

## 🎯 Next Steps

1. ✅ Deploy backend on Vercel
2. ✅ Deploy frontend on Vercel
3. ✅ Test contact form in production
4. ✅ Add more features (projects, skills, etc.)
5. ✅ Custom domain (optional)

---

## 📚 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Express.js Guide](https://expressjs.com)
- [Nodemailer Docs](https://nodemailer.com)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)

