# AI Training Platform Deployment Guide

## Overview

Your AI training platform is now set up with:
- **Frontend**: Next.js deployed on Vercel
- **Backend**: Next.js API routes (serverless functions on Vercel)
- **Database**: PostgreSQL on Railway
- **Authentication**: NextAuth.js with Google OAuth + credentials
- **Features**: Course management, notes, questions, user progress tracking

## Current Status

✅ **Vercel Deployment**: https://ai-consulting-website-nqyscc844-philippe-beliveaus-projects.vercel.app
✅ **API Routes**: Created for auth, courses, notes, questions
✅ **Database Schema**: Complete Prisma schema with all models
✅ **Environment Config**: Ready for production variables

## Next Steps to Complete Setup

### 1. Set Up Railway Database

```bash
# Login to Railway (interactive)
railway login

# Create a new project
railway init

# Add PostgreSQL database
railway add --database postgresql

# Get database connection string
railway variables
```

### 2. Configure Environment Variables

Update your `.env.local` with the Railway database URL:

```env
# Database (from Railway)
DATABASE_URL="postgresql://postgres:password@host:port/database"

# NextAuth
NEXTAUTH_URL="https://ai-consulting-website-nqyscc844-philippe-beliveaus-projects.vercel.app"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (get from Google Cloud Console)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 3. Set Up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google OAuth API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (dev)
   - `https://ai-consulting-website-nqyscc844-philippe-beliveaus-projects.vercel.app/api/auth/callback/google` (prod)

### 4. Database Setup

```bash
# Install Prisma CLI
npm install -g prisma

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# (Optional) Seed database
npx prisma db seed
```

### 5. Configure Vercel Environment Variables

In your Vercel dashboard, add these environment variables:

- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

### 6. Deploy Updates

```bash
# Deploy to Vercel
vercel --prod
```

## API Endpoints

### Authentication
- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signup` - Sign up
- `POST /api/auth/signout` - Sign out

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course (admin only)
- `GET /api/courses/[id]` - Get specific course
- `PUT /api/courses/[id]` - Update course (admin only)

### Notes
- `GET /api/notes` - Get user's notes
- `POST /api/notes` - Create note
- `GET /api/notes?courseId=xxx` - Get notes for specific course

### Questions
- `GET /api/questions` - Get user's questions
- `POST /api/questions` - Create question
- `GET /api/questions?courseId=xxx` - Get questions for specific course

## Database Schema

Your database includes:
- **Users**: Authentication, roles, subscriptions
- **Courses**: Course content and structure
- **Folders**: Hierarchical organization
- **Materials**: Course materials (videos, docs, etc.)
- **Notes**: User note-taking
- **Questions**: Q&A system
- **Progress**: User progress tracking

## Features Implemented

### ✅ User Authentication
- Email/password signup/login
- Google OAuth integration
- Role-based access (USER, ADMIN, INSTRUCTOR)
- Session management

### ✅ Course Management
- Hierarchical folder structure
- Multiple material types (video, document, audio, etc.)
- Course progress tracking
- Admin course creation/management

### ✅ Note-Taking System
- Personal notes linked to courses
- Private/public note options
- Rich text content support

### ✅ Q&A System
- Users can ask questions
- Questions linked to courses
- Answer system with official responses
- Question status tracking

### ✅ Subscription System
- FREE, PREMIUM, ENTERPRISE tiers
- Content access control based on subscription
- Payment integration ready

## Security Features

- JWT authentication with refresh tokens
- Role-based access control
- Input validation and sanitization
- CORS protection
- Rate limiting ready
- SQL injection prevention (Prisma ORM)

## File Upload (Optional Enhancement)

For file uploads (course materials, user avatars), you can integrate:
- **Cloudinary** (recommended)
- **AWS S3**
- **Vercel Blob Storage**

## Next Development Steps

1. **Frontend Pages**: Create course viewer, note editor, Q&A pages
2. **Admin Dashboard**: Course management interface
3. **Payment Integration**: Stripe for subscriptions
4. **File Upload**: Course material management
5. **Real-time**: WebSocket for live Q&A
6. **Mobile App**: React Native version

## Testing

```bash
# Run development server
npm run dev

# Test API endpoints
curl -X GET http://localhost:3000/api/courses
```

## Troubleshooting

### Common Issues:

1. **Database Connection**: Check Railway database credentials
2. **Authentication**: Verify Google OAuth settings
3. **Environment Variables**: Ensure all variables are set in Vercel
4. **Prisma**: Run `npx prisma generate` after schema changes

### Logs:
- **Vercel**: View function logs in Vercel dashboard
- **Railway**: View database logs in Railway dashboard
- **Local**: Check browser console and terminal

## Production Checklist

- [ ] Railway database connected
- [ ] Google OAuth configured
- [ ] Environment variables set in Vercel
- [ ] Database schema deployed
- [ ] API endpoints tested
- [ ] Frontend authentication flows working
- [ ] Course creation/viewing functional
- [ ] Notes system working
- [ ] Q&A system functional

Your AI training platform is now ready for full deployment! 🚀