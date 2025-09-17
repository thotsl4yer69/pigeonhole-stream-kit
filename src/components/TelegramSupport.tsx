import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Shield, Clock } from "lucide-react";
import { brandData } from "@/lib/products";

export const TelegramSupport = () => {
  return (
    <section id="support" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact & Support</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For sales, questions, and custom language setups. Your anonymity is our priority.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="tech-card">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Telegram Support</CardTitle>
              <CardDescription>
                Join {brandData.telegram.handle} for instant support
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="space-y-1">
                  <Clock className="w-6 h-6 text-uv-green mx-auto" />
                  <p className="text-sm font-semibold">24/7 Support</p>
                </div>
                <div className="space-y-1">
                  <Shield className="w-6 h-6 text-primary mx-auto" />
                  <p className="text-sm font-semibold">Private & Secure</p>
                </div>
              </div>

              <Button 
                size="lg"
                onClick={() => window.open(brandData.telegram.url, '_blank')}
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold premium-glow"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Support Channel
              </Button>
            </CardContent>
          </Card>

          <Card className="tech-card">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Direct Contact</CardTitle>
              <CardDescription>
                For sales inquiries and custom setups
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">General Sales:</p>
                  <p className="text-sm text-muted-foreground font-mono">{brandData.contact.email}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Secure Communications:</p>
                  <p className="text-sm text-muted-foreground font-mono">{brandData.contact.protonmail}</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-muted/50 border border-border">
                <p className="text-xs text-muted-foreground">
                  <Shield className="w-3 h-3 inline mr-1" />
                  We don't log, track, or sell your data. All transactions handled with absolute discretion.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};