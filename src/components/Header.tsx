import { brandData } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Zap } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">MZ1312</h1>
              <p className="text-xs text-muted-foreground">Pigeonhole Streaming</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Devices
            </a>
            <a href="#compatibility" className="text-foreground hover:text-primary transition-colors">
              Compatibility
            </a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">
              Support
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open(brandData.telegram.url, '_blank')}
              className="hidden sm:flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Support</span>
            </Button>
            <div className="flex items-center space-x-1 text-uv-green">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-medium">Privacy First</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};