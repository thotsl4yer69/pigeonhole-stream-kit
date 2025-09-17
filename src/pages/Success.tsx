import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";
import { brandData } from "@/lib/products";

const Success = () => {
  useEffect(() => {
    // Track successful purchase
    console.log('Payment successful');
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="tech-card max-w-2xl w-full">
        <CardHeader className="text-center pb-6">
          <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
          </div>
          <CardTitle className="text-3xl gradient-text">Payment Successful!</CardTitle>
          <CardDescription className="text-lg">
            Thank you for your purchase. Your order is being processed.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="p-6 rounded-lg bg-card border border-border space-y-4">
            <h3 className="font-semibold text-lg">What happens next?</h3>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
              <li>We'll prepare your device with the latest configurations</li>
              <li>Your order will be shipped within 24-48 hours</li>
              <li>You'll receive tracking information via email</li>
              <li>Join our Telegram channel for setup support</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <Button 
              onClick={() => window.open(brandData.telegram.url, '_blank')}
              className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Support Channel
            </Button>
          </div>

          <div className="text-center pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Order confirmation and tracking details will be sent to your email address.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;