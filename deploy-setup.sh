#!/bin/bash

# Deployment Setup Script for Pigeonhole Stream Kit
# This script helps set up environment variables and prepare for deployment

echo "🚀 Pigeonhole Stream Kit Deployment Setup"
echo "=========================================="

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "✅ .env file created. Please edit it with your API keys."
    echo ""
    echo "📋 Required API Keys:"
    echo "   - Stripe Publishable Key (VITE_STRIPE_PUBLISHABLE_KEY)"
    echo "   - Stripe Secret Key (STRIPE_SECRET_KEY)"
    echo "   - Stripe Price IDs for your products"
    echo "   - Frontend URL (FRONTEND_URL)"
    echo "   - TMDB API Key (optional, TMDB_V3_KEY)"
    echo ""
    echo "🔧 Edit your .env file with your API keys and run this script again."
    exit 1
fi

echo "✅ .env file found"

# Check if Node modules are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed"
fi

# Check if environment variables are set
echo "🔍 Checking environment variables..."

# Source the .env file
set -a
source .env
set +a

MISSING_VARS=()

# Check required variables
if [ -z "$VITE_STRIPE_PUBLISHABLE_KEY" ] || [ "$VITE_STRIPE_PUBLISHABLE_KEY" = "pk_test_your_stripe_publishable_key_here" ]; then
    MISSING_VARS+=("VITE_STRIPE_PUBLISHABLE_KEY")
fi

if [ -z "$STRIPE_SECRET_KEY" ] || [ "$STRIPE_SECRET_KEY" = "sk_test_your_stripe_secret_key_here" ]; then
    MISSING_VARS+=("STRIPE_SECRET_KEY")
fi

if [ -z "$VITE_STRIPE_LONE_PIGEON_PRICE" ] || [ "$VITE_STRIPE_LONE_PIGEON_PRICE" = "price_lone_pigeon_id_here" ]; then
    MISSING_VARS+=("VITE_STRIPE_LONE_PIGEON_PRICE")
fi

if [ -z "$VITE_STRIPE_FLOCK_DEAL_PRICE" ] || [ "$VITE_STRIPE_FLOCK_DEAL_PRICE" = "price_flock_deal_id_here" ]; then
    MISSING_VARS+=("VITE_STRIPE_FLOCK_DEAL_PRICE")
fi

if [ -z "$FRONTEND_URL" ] || [ "$FRONTEND_URL" = "https://your-site.netlify.app" ]; then
    MISSING_VARS+=("FRONTEND_URL")
fi

if [ ${#MISSING_VARS[@]} -ne 0 ]; then
    echo "❌ Missing or default values for required environment variables:"
    for var in "${MISSING_VARS[@]}"; do
        echo "   - $var"
    done
    echo ""
    echo "Please update your .env file with actual values and run this script again."
    exit 1
fi

echo "✅ All required environment variables are set"

# Test build
echo "🔨 Testing build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build successful"

echo ""
echo "🎉 Deployment setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Commit your changes (except .env file)"
echo "   2. Deploy to Netlify:"
echo "      - Connect your GitHub repo to Netlify"
echo "      - Set build command: 'npm run build'"
echo "      - Set publish directory: 'dist'"
echo "      - Add all environment variables to Netlify dashboard"
echo "   3. Test your deployment"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"