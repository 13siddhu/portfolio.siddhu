# Portfolio Backend API

Email backend service for portfolio contact form using Express.js and Nodemailer.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create .env File
Copy `.env.example` to `.env` and fill in your details:
```bash
cp .env.example .env
```

```env
PORT=3001
NODE_ENV=development
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
FRONTEND_URL=http://localhost:5173
```

### 3. Gmail Setup
1. Enable 2-Factor Authentication on your Google Account
2. Generate App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use the generated 16-character password in .env

### 4. Run Development Server
```bash
npm run dev
```

Server will run on `http://localhost:3001`

### 5. Test Backend
```bash
curl http://localhost:3001/health
```

## Deployment on Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repo
4. Select "backend" folder as root directory
5. Add Environment Variables:
   - `EMAIL_SERVICE` = gmail
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASSWORD` = your-app-password
   - `RECIPIENT_EMAIL` = your-email@gmail.com
   - `FRONTEND_URL` = your-vercel-frontend-url
6. Click Deploy

### 3. Update Frontend
Update `VITE_API_URL` in frontend `.env`:
```env
VITE_API_URL=https://your-backend.vercel.app
```

## API Endpoints

### POST `/api/send-email`
Send contact form email

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "This is a test message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

### GET `/health`
Check if backend is running

**Response:**
```json
{
  "status": "Backend is running!",
  "timestamp": "2024-01-24T12:00:00.000Z"
}
```

## Troubleshooting

- **CORS Error**: Update `FRONTEND_URL` in .env
- **Email not sending**: Check EMAIL_USER and EMAIL_PASSWORD
- **Port already in use**: Change PORT in .env
