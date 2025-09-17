import { useState } from "react";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import product images
import firestickImg from "@/assets/firestick.jpg";
import firestick4kImg from "@/assets/firestick4k.jpg";
import firecubeImg from "@/assets/firecube.jpg";
import raspberryPiImg from "@/assets/raspberry-pi.jpg";

const imageMap = {
  firestick: firestickImg,
  firestick4k: firestick4kImg,
  firecube: firecubeImg,
  pi: raspberryPiImg,
};

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePurchase = async () => {
    setIsLoading(true);
    
    try {
      // Call Netlify function for Stripe checkout
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          deviceType: product.sku,
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: "Unable to process checkout. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="tech-card group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      <CardHeader className="pb-4">
        <div className="aspect-video relative overflow-hidden rounded-lg bg-secondary/20">
          <img
            src={imageMap[product.sku as keyof typeof imageMap]}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <CardTitle className="text-xl font-bold text-foreground">{product.name}</CardTitle>
          <CardDescription className="text-muted-foreground">{product.model}</CardDescription>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              <Check className="w-3 h-3 mr-1" />
              {feature}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold gradient-text">{product.price}</span>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Ready to ship</p>
            <p className="text-xs text-uv-green">✓ In stock</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handlePurchase}
          disabled={isLoading}
          className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3 premium-glow"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy Now
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};