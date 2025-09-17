import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { CompatibilityBadges } from "@/components/CompatibilityBadges";
import { TMDBPreview } from "@/components/TMDBPreview";
import { TelegramSupport } from "@/components/TelegramSupport";
import { BitcoinPayment } from "@/components/BitcoinPayment";
import { products } from "@/lib/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <section id="products" className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Device Lineup</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional-grade streaming devices preconfigured for optimal performance and privacy.
                All devices come with premium support and setup assistance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.sku} product={product} />
              ))}
            </div>
          </div>
        </section>

        <CompatibilityBadges />
        <TMDBPreview />
        <TelegramSupport />
        <BitcoinPayment />
      </main>

      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold gradient-text">MZ1312</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Pigeonhole Streaming Devices - Underground efficiency meets premium reliability. 
              Availability of third-party services depends on your region. Use responsibly and comply with all applicable laws.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>Privacy First</span>
              <span>•</span>
              <span>24/7 Support</span>
              <span>•</span>
              <span>Global Shipping</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
