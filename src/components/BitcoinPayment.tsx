import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bitcoin, Copy, Check } from "lucide-react";
import { brandData } from "@/lib/products";
import { useToast } from "@/hooks/use-toast";

export const BitcoinPayment = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(brandData.crypto.btc_address);
      setCopied(true);
      toast({
        title: "Address Copied",
        description: "Bitcoin address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Please copy the address manually",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="tech-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <Bitcoin className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Maximum Privacy Payment</CardTitle>
              <CardDescription>
                Skip the banks. Pay direct with Bitcoin for true anonymity.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  BTC Address
                </label>
                <div className="flex space-x-2">
                  <Input
                    value={brandData.crypto.btc_address}
                    readOnly
                    className="font-mono text-xs bg-secondary/50"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyToClipboard}
                    className="shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-uv-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h4 className="font-semibold text-sm mb-2">Instructions:</h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Send Bitcoin to the address above</li>
                  <li>Include your order details in the transaction memo</li>
                  <li>Contact us on Telegram with transaction ID</li>
                  <li>We'll confirm payment and ship your device</li>
                </ol>
              </div>

              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => window.open(brandData.telegram.url, '_blank')}
                  className="border-uv-green text-uv-green hover:bg-uv-green hover:text-primary-foreground"
                >
                  Contact for Bitcoin Orders
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};