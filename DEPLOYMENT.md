# Deployment Guide for Pigeonhole Stream Kit

This guide will help you deploy the Pigeonhole Stream Kit website and configure all necessary API keys.

## Prerequisites

1. **Stripe Account**: For payment processing
2. **TMDB Account**: For movie database integration (optional)
3. **Netlify Account**: For hosting and serverless functions
4. **Telegram**: For support integration (optional)

## Step 1: Get Required API Keys

### Stripe Configuration

1. **Create a Stripe Account** at [https://stripe.com](https://stripe.com)
2. **Get your API keys**:
   - Go to Developers → API keys in your Stripe dashboard
   - Copy your **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)

3. **Create Products and Price IDs**:
   - Go to Products in your Stripe dashboard
   - Create two products:
     - **The Lone Pigeon** ($150 AUD)
     - **The Flock Deal** ($130 AUD each for 3+ units)
   - Copy the Price IDs for each product (they start with `price_`)

### TMDB API Key (Optional)

1. **Create account** at [https://www.themoviedb.org](https://www.themoviedb.org)
2. **Get API key**:
   - Go to Settings → API
   - Request an API key (v3 auth)
   - Copy your API key

## Step 2: Configure Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# Stripe Configuration (Frontend)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Stripe Product Price IDs (Frontend)
VITE_STRIPE_LONE_PIGEON_PRICE=price_your_lone_pigeon_price_id
VITE_STRIPE_FLOCK_DEAL_PRICE=price_your_flock_deal_price_id

# Stripe Secret Key (Backend - Netlify Functions)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here

# Frontend URL for Stripe redirects
FRONTEND_URL=https://your-site-name.netlify.app

# The Movie Database API Key (Optional)
TMDB_V3_KEY=your_tmdb_api_key_here

# Support and Contact Information
TELEGRAM_HANDLE=@MZ1312Support

# Bitcoin Address for Crypto Payments
BTC_ADDRESS=bc1prnj6qrraspeg2zs03caxg2fr3zculzennn969xujt0f6q9rjfkkslf2nax
```

## Step 3: Deploy to Netlify

### Option A: Git-based Deployment (Recommended)

1. **Push your code to GitHub** (if not already done)
2. **Connect to Netlify**:
   - Go to [https://netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Choose your repository

3. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions` (auto-detected)

4. **Add Environment Variables**:
   - Go to Site settings → Environment variables
   - Add all variables from your `.env` file
   - **Important**: Don't include variables starting with `VITE_` in the backend environment

### Option B: Manual Deployment

1. **Build the project locally**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [https://netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Configure environment variables in Site settings

## Step 4: Configure Netlify Environment Variables

In your Netlify dashboard, add these environment variables:

### Required Variables:
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `VITE_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `VITE_STRIPE_LONE_PIGEON_PRICE`: Price ID for The Lone Pigeon
- `VITE_STRIPE_FLOCK_DEAL_PRICE`: Price ID for The Flock Deal
- `FRONTEND_URL`: Your Netlify site URL (e.g., https://your-site.netlify.app)

### Optional Variables:
- `TMDB_V3_KEY`: TMDB API key for movie previews
- `TELEGRAM_HANDLE`: Your Telegram support handle
- `BTC_ADDRESS`: Bitcoin address for crypto payments

## Step 5: Test Your Deployment

1. **Visit your site** at your Netlify URL
2. **Test features**:
   - Browse products
   - Click "Buy Now" to test Stripe checkout (use test card: 4242 4242 4242 4242)
   - Check movie previews (if TMDB key configured)
   - Verify support links work

## Step 6: Go Live (Production)

When ready for production:

1. **Switch to Stripe Live Mode**:
   - Replace test keys with live keys
   - Update `FRONTEND_URL` to your custom domain (if using one)

2. **Configure Custom Domain** (optional):
   - In Netlify, go to Domain settings
   - Add your custom domain
   - Update `FRONTEND_URL` environment variable

## Troubleshooting

### Common Issues:

1. **Stripe Checkout Not Working**:
   - Check that `STRIPE_SECRET_KEY` is set in Netlify environment variables
   - Verify Price IDs are correct
   - Check browser console for errors

2. **TMDB Not Loading**:
   - Verify `TMDB_V3_KEY` is correct
   - Check browser console for API errors
   - TMDB will use placeholder data if key is missing

3. **Build Failures**:
   - Check that all required environment variables are set
   - Verify node version compatibility
   - Check build logs in Netlify dashboard

### Environment Variable Checklist:

- [ ] `VITE_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- [ ] `STRIPE_SECRET_KEY` - Stripe secret key  
- [ ] `VITE_STRIPE_LONE_PIGEON_PRICE` - Lone Pigeon price ID
- [ ] `VITE_STRIPE_FLOCK_DEAL_PRICE` - Flock Deal price ID
- [ ] `FRONTEND_URL` - Your site URL
- [ ] `TMDB_V3_KEY` - TMDB API key (optional)
- [ ] `TELEGRAM_HANDLE` - Support handle (optional)
- [ ] `BTC_ADDRESS` - Bitcoin address (optional)

## Security Notes

- Never commit your `.env` file to version control
- Use test Stripe keys for development
- Rotate API keys regularly
- Monitor Stripe webhooks for security events

## Support

For issues with deployment, check:
- Netlify build logs
- Browser developer console
- Stripe dashboard for payment issues
- Contact support via Telegram: @MZ1312Support