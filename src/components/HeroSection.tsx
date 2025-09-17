import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Target } from "lucide-react";

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium">
              <Target className="w-4 h-4 mr-2" />
              MZ1312 Presents
            </Badge>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">THE PIGEON</span><br />
            <span className="text-3xl lg:text-4xl text-muted-foreground font-normal">Stop Renting Your Own TV.</span>
          </h1>
          
          <div className="text-left max-w-4xl mx-auto space-y-6 text-lg lg:text-xl text-muted-foreground mb-12">
            <p className="font-semibold text-foreground">Let's be blunt. Streaming in Australia is a fractured, overpriced scam.</p>
            
            <p>You're paying a fortune to scroll through ten different apps, trying to remember which service has that one show, all while another price hike email lands in your inbox. These digital landlords sell your viewing data, force-feed you ads, and lock you into their "ecosystems."</p>
            
            <p><strong>They own your screen. It's time to take it back.</strong></p>
            
            <p>The Pigeon is the master key. We take a beast of a media player, flash it with a completely custom, Australia-centric build of Kodi, and configure it to work straight out of the box. No tech headaches. No bullshit.</p>
            
            <p>Plug it in, and everything is there. One interface, one search, zero restrictions. This isn't just hardware; it's a statement. It's your media, finally uncaged. And with the included 12-month access to the MZ1312 private feed, your box stays updated with the best tools, maintained by us.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg"
              onClick={scrollToProducts}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 text-lg premium-glow"
            >
              Get Your Kit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-border text-foreground hover:bg-card px-8 py-4 text-lg"
            >
              <Shield className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Zero F*cking Around</h3>
              <p className="text-muted-foreground">Unbox it. Plug in two cables. It works. Ready in minutes.</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Built for Australia</h3>
              <p className="text-muted-foreground">Multicultural nation, multicultural box. Tell us your language needs.</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">Truly Yours. Uncaged.</h3>
              <p className="text-muted-foreground">No spyware. No data selling. Your box, your rules.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};