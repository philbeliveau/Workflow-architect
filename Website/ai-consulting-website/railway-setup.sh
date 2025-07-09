#!/bin/bash

# Railway Setup Script for AI Training Platform
# Run this after: railway login

echo "🚀 Setting up Railway for AI Training Platform..."

# Create new project
echo "Creating new Railway project..."
railway init --name "ai-training-platform"

# Add PostgreSQL database
echo "Adding PostgreSQL database..."
railway add --database postgresql

# Wait for database to be ready
echo "Waiting for database to be ready..."
sleep 10

# Get database URL
echo "Getting database connection string..."
railway variables --json > railway-vars.json

# Extract DATABASE_URL
DATABASE_URL=$(cat railway-vars.json | grep -o '"DATABASE_URL":"[^"]*' | cut -d'"' -f4)

echo "📋 Database URL: $DATABASE_URL"

# Update .env.local
echo "Updating .env.local with Railway database URL..."
sed -i.bak "s|DATABASE_URL=.*|DATABASE_URL=\"$DATABASE_URL\"|g" .env.local

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

# Push database schema
echo "Pushing database schema to Railway..."
DATABASE_URL="$DATABASE_URL" npx prisma db push

echo "✅ Railway setup complete!"
echo "📝 Next steps:"
echo "1. Update Vercel environment variables with DATABASE_URL"
echo "2. Set up Google OAuth credentials"
echo "3. Deploy to Vercel with: vercel --prod"

# Clean up
rm railway-vars.json