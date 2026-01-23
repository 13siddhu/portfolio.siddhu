# Backend Deployment Checklist

## 1. Verify Backend Files Exist
- [ ] backend/server.js
- [ ] backend/package.json
- [ ] backend/vercel.json
- [ ] backend/routes/
- [ ] backend/controllers/

## 2. Push Backend to GitHub
```bash
cd backend
git init
git add .
git commit -m "Backend ready for Vercel"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-backend.git
git branch -M main
git push -u origin main
```

## 3. Deploy on Vercel

**Option A: Use Vercel CLI (Easiest)**
```bash
npm install -g vercel
cd backend
vercel --prod
```

**Option B: Use Vercel Dashboard**
1. Go to vercel.com
2. New Project
3. Import GitHub repo (portfolio-backend)
4. Root Directory: `./`
5. Build Command: Leave empty (or `npm run build`)
6. Add Environment Variables:
   - PORT: 3001
   - NODE_ENV: production
   - EMAIL_SERVICE: gmail
   - EMAIL_USER: siddharthasingh.workspace@gmail.com
   - EMAIL_PASSWORD: ixkcyqtntniawbcp
   - RECIPIENT_EMAIL: singhsiddhartha220@gmail.com
   - FRONTEND_URL: https://your-portfolio.vercel.app

7. Deploy

## 4. Verify Deployment
```bash
curl https://your-backend.vercel.app/health
```

Expected response:
```json
{"status":"Backend is running!","timestamp":"2026-01-24T..."}
```

## 5. Test API
```bash
curl -X POST https://your-backend.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@gmail.com",
    "subject": "Test",
    "message": "Test message from portfolio"
  }'
```

## Common Issues

### 404 NOT_FOUND
- Check vercel.json is correct
- Verify package.json has proper build script
- Ensure server.js exports correct app
- Check build logs in Vercel dashboard

### Module not found
- Run `npm install` in backend folder
- Check all imports use correct paths
- Verify dotenv is installed

### Port already in use
- Vercel assigns port automatically
- Remove hardcoded PORT from code
- Use: `const port = process.env.PORT || 3001`

### Email not sending
- Verify all EMAIL_ env vars are set
- Check EMAIL_PASSWORD has no spaces
- Ensure RECIPIENT_EMAIL is correct
