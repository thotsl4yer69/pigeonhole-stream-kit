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
  brand: "Pigeonhole Streaming Devices by MZ1312",
  telegram: { 
    handle: "@MZ1312Support", 
    url: "https://t.me/MZ1312Support" 
  },
  crypto: { 
    btc_address: "bc1prnj6qrraspeg2zs03caxg2fr3zculzennn969xujt0f6q9rjfkkslf2nax" 
  },
};

export const products: Product[] = [
  {
    sku: "firestick",
    name: "Pigeonhole Firestick",
    model: "Standard",
    price: "$79",
    image_url: "/src/assets/firestick.jpg",
    features: ["Kodi preconfigured", "Real‑Debrid compatible", "Surfshark ready"],
    stripe_price_id_env: "VITE_STRIPE_BASIC_PRICE"
  },
  {
    sku: "firestick4k",
    name: "Pigeonhole Firestick 4K",
    model: "4K Edition", 
    price: "$129",
    image_url: "/src/assets/firestick4k.jpg",
    features: ["4K streaming", "Advanced configuration", "Real‑Debrid compatible"],
    stripe_price_id_env: "VITE_STRIPE_STANDARD_PRICE"
  },
  {
    sku: "firecube",
    name: "Pigeonhole Fire Cube",
    model: "Pro Series",
    price: "$199",
    image_url: "/src/assets/firecube.jpg",
    features: ["Voice control", "Premium bundle", "VPN + dashboard"],
    stripe_price_id_env: "VITE_STRIPE_ENTERPRISE_PRICE"
  },
  {
    sku: "pi",
    name: "Pigeonhole Ultimate Pi",
    model: "Raspberry Pi Edition",
    price: "$299",
    image_url: "/src/assets/raspberry-pi.jpg",
    features: ["AI‑Kodi hybrid", "Offline assistants", "Private Telegram notifications"],
    stripe_price_id_env: "VITE_STRIPE_GOV_PRICE"
  }
];