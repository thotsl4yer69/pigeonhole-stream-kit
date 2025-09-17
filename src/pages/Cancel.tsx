import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { brandData } from "@/lib/products";

const Cancel = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="tech-card max-w-2xl w-full">
        <CardHeader className="text-center pb-6">
          <div className="w-20 h-20 bg-muted rounded-full mx-auto flex items-center justify-center mb-4">
            <XCircle className="w-10 h-10 text-muted-foreground" />
          </div>
          <CardTitle className="text-3xl">Payment Cancelled</CardTitle>
          <CardDescription className="text-lg">
            Your payment was cancelled. No charges were made to your account.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="p-6 rounded-lg bg-muted/50 border border-border space-y-4">
            <h3 className="font-semibold text-lg">Need help with your order?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Contact us on Telegram for payment assistance</li>
              <li>• Consider Bitcoin payment for maximum privacy</li>
              <li>• Browse our device catalog again</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => window.location.href = '/'}
              className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Devices
            </Button>
            
            <Button 
              onClick={() => window.open(brandData.telegram.url, '_blank')}
              variant="outline"
              className="flex-1"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Get Help
            </Button>
          </div>

          <div className="text-center pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Questions? Join our Telegram support channel for instant assistance.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cancel;