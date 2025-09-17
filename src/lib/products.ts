export interface Product {
  sku: string;
  name: string;
  model: string;
  price: string;
  image_url: string;
  features: string[];
  stripe_price_id_env: string;
}

export const brandData = {
  brand: "The Pigeon by MZ1312",
  telegram: { 
    handle: "@MZ1312Support", 
    url: "https://t.me/MZ1312Support" 
  },
  crypto: { 
    btc_address: "bc1prnj6qrraspeg2zs03caxg2fr3zculzennn969xujt0f6q9rjfkkslf2nax" 
  },
  contact: {
    email: "admin@mz1312.xx.kg",
    protonmail: "mz1312@proton.me"
  },
};

export const products: Product[] = [
  {
    sku: "lone-pigeon",
    name: "The Lone Pigeon",
    model: "Single Unit",
    price: "$150 AUD",
    image_url: "/src/assets/firestick4k.jpg",
    features: ["Custom MZ1312 Kodi Build", "12 Months Private Feed Access", "Multicultural Content Support", "Express Post Shipping (Vic)"],
    stripe_price_id_env: "VITE_STRIPE_LONE_PIGEON_PRICE"
  },
  {
    sku: "flock-deal",
    name: "The Flock Deal",
    model: "3+ Units",
    price: "$130 AUD each",
    image_url: "/src/assets/raspberry-pi.jpg",
    features: ["Custom MZ1312 Kodi Build", "12 Months Private Feed Access", "Bulk Discount Applied", "Free Express Post Australia-wide"],
    stripe_price_id_env: "VITE_STRIPE_FLOCK_DEAL_PRICE"
  }
];