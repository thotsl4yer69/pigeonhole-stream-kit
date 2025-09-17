import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Clock, Shield } from "lucide-react";
import { brandData } from "@/lib/products";

export const TelegramSupport = () => {
  return (
    <section id="support" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Premium Support Channel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our private Telegram support channel for instant help, setup guides, and community discussions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="tech-card">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <MessageCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Join {brandData.telegram.handle}</CardTitle>
              <CardDescription>
                Exclusive support channel for Pigeonhole device owners
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Clock className="w-8 h-8 text-uv-green mx-auto" />
                  <h3 className="font-semibold">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Round-the-clock assistance</p>
                </div>
                <div className="text-center space-y-2">
                  <Users className="w-8 h-8 text-uv-cyan mx-auto" />
                  <h3 className="font-semibold">Community</h3>
                  <p className="text-sm text-muted-foreground">Connect with other users</p>
                </div>
                <div className="text-center space-y-2">
                  <Shield className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Private & Secure</h3>
                  <p className="text-sm text-muted-foreground">Encrypted communications</p>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button 
                  size="lg"
                  onClick={() => window.open(brandData.telegram.url, '_blank')}
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 premium-glow"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Support Channel
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Click to open in Telegram app or web browser
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};