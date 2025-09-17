import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Privacy-First Streaming Solutions
            </Badge>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Pigeonhole</span><br />
            Streaming Devices
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Preconfigured, privacy-focused streaming devices ready for third-party service integration. 
            Underground efficiency meets premium reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToProducts}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 text-lg premium-glow"
            >
              View Devices
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-border text-foreground hover:bg-card px-8 py-4 text-lg"
            >
              <Shield className="w-5 h-5 mr-2" />
              Get Support
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Privacy First</h3>
              <p className="text-muted-foreground">Built with privacy and security as core principles</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Ready to Use</h3>
              <p className="text-muted-foreground">Preconfigured for immediate compatibility</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Expert Support</h3>
              <p className="text-muted-foreground">24/7 support through our private Telegram channel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};