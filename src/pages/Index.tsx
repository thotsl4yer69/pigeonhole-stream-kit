import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { CompatibilityBadges } from "@/components/CompatibilityBadges";
import { TMDBPreview } from "@/components/TMDBPreview";
import { MissionSection } from "@/components/MissionSection";
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
              <h2 className="text-3xl font-bold mb-4">Here's The Damn Point</h2>
              <div className="max-w-4xl mx-auto text-left space-y-4 text-muted-foreground">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What's in the Box?</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• 1 x The Pigeon Device (MZ1312 Custom Build)</li>
                      <li>• 1 x Remote Control</li>
                      <li>• 1 x Power Adapter & HDMI Cable</li>
                      <li>• 12 Months Private MZ1312 Feed Access</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Shipping</h3>
                    <p className="text-sm">Flat rate $15 AUD Express Post, Australia-wide. Shipped from Vic. No messing around.</p>
                    <p className="text-xs mt-2 text-muted-foreground/70">(Renewal optional: $20/year to keep the feed live after 12 months)</p>
                  </div>
                </div>
              </div>
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
        <MissionSection />
        <TelegramSupport />
        <BitcoinPayment />
      </main>

      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container mx-auto px-6">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold gradient-text">MZ1312</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                The Pigeon by MZ1312 - Direct action against digital overlords. 
                Availability of third-party services depends on your region. Use responsibly and comply with all applicable laws.
              </p>
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <span>Privacy First</span>
                <span>•</span>
                <span>Shipped from Vic</span>
                <span>•</span>
                <span>Australia-wide</span>
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
