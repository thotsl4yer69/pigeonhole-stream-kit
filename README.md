# Pigeonhole Streaming Devices by MZ1312

A professional e-commerce website for selling preconfigured streaming devices with privacy-first design and third-party service compatibility.

## 🚀 Features

- **Product Catalog**: 4 preconfigured streaming devices (Firestick, Firestick 4K, Fire Cube, Raspberry Pi)
- **Stripe Payments**: Secure checkout with Stripe integration via Netlify Functions
- **Bitcoin Payments**: Privacy-focused crypto payment option
- **Telegram Support**: Dedicated support channel integration
- **TMDB Integration**: Movie preview powered by The Movie Database API
- **Responsive Design**: Mobile-first, fully responsive design
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG AA compliant design

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components
- **State Management**: TanStack Query
- **Routing**: React Router DOM
- **Payments**: Stripe Checkout
- **Deployment**: Netlify with Functions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pigeonhole-streaming-devices
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables:
   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   VITE_STRIPE_BASIC_PRICE=price_1234567890
   VITE_STRIPE_STANDARD_PRICE=price_1234567890
   VITE_STRIPE_ENTERPRISE_PRICE=price_1234567890
   VITE_STRIPE_GOV_PRICE=price_1234567890
   FRONTEND_URL=https://yoursite.netlify.app
   TMDB_V3_KEY=your_tmdb_api_key_here
   TELEGRAM_HANDLE=@MZ1312Support
   BTC_ADDRESS=bc1prnj6qrraspeg2zs03caxg2fr3zculzennn969xujt0f6q9rjfkkslf2nax
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Quick Deployment with Script

1. **Run the deployment setup script**
   ```bash
   ./deploy-setup.sh
   ```
   This script will guide you through the setup process and check your configuration.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add all environment variables in Netlify dashboard

3. **Environment Variables Required**:
   - `VITE_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
   - `STRIPE_SECRET_KEY` - Stripe secret key
   - `VITE_STRIPE_LONE_PIGEON_PRICE` - Price ID for The Lone Pigeon
   - `VITE_STRIPE_FLOCK_DEAL_PRICE` - Price ID for The Flock Deal
   - `FRONTEND_URL` - Your Netlify site URL
   - `TMDB_V3_KEY` - TMDB API key (optional)

### 📖 Detailed Instructions

For complete deployment instructions including API key setup, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🎨 Design System

The site uses a custom dark-themed design system with:
- **Colors**: UV Green (#38FF88) and Cyan (#00E5FF) accents on dark background
- **Typography**: Clean, modern fonts with proper hierarchy
- **Components**: Custom shadcn/ui components with branded variants
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach

## 🔧 Configuration

### Product Data
Edit `src/lib/products.ts` to modify:
- Product information
- Pricing
- Features
- Stripe price IDs

### Brand Information
Update `src/lib/products.ts` for:
- Telegram handle
- Bitcoin address
- Brand messaging

### Styling
Customize the design system in:
- `src/index.css` - Color variables and design tokens
- `tailwind.config.ts` - Tailwind configuration

## 📱 Pages

- **Home (`/`)**: Product catalog, hero section, features
- **Success (`/success`)**: Payment confirmation page
- **Cancel (`/cancel`)**: Payment cancellation page
- **404**: Custom not found page

## 🔐 Security & Compliance

- No hardcoded API keys or secrets
- All sensitive data via environment variables
- Legal disclaimers for third-party services
- Privacy-focused design and messaging
- HTTPS required for production

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Performance

- Lighthouse Score: 90+ (Performance, Best Practices, SEO)
- Mobile-optimized
- Fast loading with optimized images
- Minimal JavaScript bundle

## 🤝 Support

- **Telegram**: [@MZ1312Support](https://t.me/MZ1312Support)
- **Email**: Available through Telegram channel
- **Bitcoin Orders**: Contact via Telegram with transaction ID

## 📄 License

This project is proprietary. All rights reserved by MZ1312.

## 🚨 Legal Notice

Availability of third-party services depends on your region. Use responsibly and comply with all applicable laws. We do not facilitate copyright infringement.

---

**Built with ❤️ by the MZ1312 team**