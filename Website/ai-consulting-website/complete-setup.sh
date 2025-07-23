#!/bin/bash

# Complete Railway Setup Script
echo "🔧 Completing Railway setup..."

# Load environment variables from .env.local
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | xargs)
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ] || [ "$DATABASE_URL" = '""' ]; then
    echo "❌ DATABASE_URL is not set in .env.local"
    echo "📋 Please:"
    echo "1. Go to: https://railway.com/project/729c0b30-6698-4f24-bac5-075465f83931"
    echo "2. Click on your PostgreSQL service"
    echo "3. Copy the DATABASE_URL from Variables tab"
    echo "4. Update .env.local with: DATABASE_URL='your-copied-url'"
    echo "5. Run this script again"
    exit 1
fi

echo "✅ DATABASE_URL found: ${DATABASE_URL:0:50}..."

# Generate Prisma client
echo "📦 Generating Prisma client..."
npx prisma generate

# Push database schema
echo "🚀 Pushing database schema..."
npx prisma db push

# Test database connection
echo "🔍 Testing database connection..."
npx prisma db pull --print

echo "✅ Railway setup complete!"
echo "🎉 Your AI training platform is ready!"
echo ""
echo "📝 Next steps:"
echo "1. Update Vercel environment variables with your DATABASE_URL"
echo "2. Set up Google OAuth credentials"
echo "3. Deploy to Vercel: vercel --prod"