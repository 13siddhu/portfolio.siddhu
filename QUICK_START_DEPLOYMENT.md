# 🚀 Quick Start: Frontend & Backend Setup

## Local Development (5 minutes)

### Terminal 1: Start Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your Gmail credentials
npm install
npm run dev
```
✓ Backend running on http://localhost:3001

### Terminal 2: Start Frontend
```bash
npm install
npm run dev
```
✓ Frontend running on http://localhost:5173

### Test Contact Form
- Go to http://localhost:5173/contact
- Fill and submit form
- Check your email ✓

---

## Deploy to Vercel (10 minutes)

### Step 1: Deploy Backend
```bash
cd backend
npm install -g vercel
vercel
```
- Choose GitHub account
- Add these environment variables:
  - `EMAIL_USER`: your-email@gmail.com
  - `EMAIL_PASSWORD`: your-app-password
  - `RECIPIENT_EMAIL`: your-email@gmail.com
  - `FRONTEND_URL`: your-frontend-url (add after deploying frontend)

**Save backend URL:** `https://your-backend-xyz.vercel.app`

### Step 2: Deploy Frontend
```bash
cd ..
# Update .env.production with backend URL
echo "VITE_API_URL=https://your-backend-xyz.vercel.app" > .env.production
vercel
```

**Your portfolio is now live!** 🎉

---

## Folder Structure
```
portfolio-react/
├── backend/              ← Node.js API (Deploy on Vercel)
│   ├── server.js
│   ├── package.json
│   ├── vercel.json
│   └── .env.example
│
├── src/                  ← React app (Deploy on Vercel)
├── package.json
├── vite.config.js
└── DEPLOYMENT_GUIDE.md
```

---

## Environment Variables

**Backend .env:**
```env
PORT=3001
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=app-password (16 chars from Google)
RECIPIENT_EMAIL=your-email@gmail.com
FRONTEND_URL=http://localhost:5173 (or Vercel URL)
```

**Frontend .env.production:**
```env
VITE_API_URL=https://your-backend-url.vercel.app
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Email not sending | Check Gmail 2FA enabled & app password correct |
| CORS error | Update FRONTEND_URL in backend .env |
| Port 3001 in use | Change to 3002 in backend .env |
| Contact form doesn't work | Check backend is running at /health |

---

**Need help?** See DEPLOYMENT_GUIDE.md for detailed instructions
