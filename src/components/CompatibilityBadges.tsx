import { Badge } from "@/components/ui/badge";
import { Shield, Download, Globe } from "lucide-react";

export const CompatibilityBadges = () => {
  const compatibilityItems = [
    {
      name: "Real-Debrid",
      description: "Premium streaming service integration",
      icon: Download,
      color: "text-uv-green",
    },
    {
      name: "Surfshark VPN",
      description: "Privacy & security ready",
      icon: Shield,
      color: "text-uv-cyan",
    },
    {
      name: "Global Access",
      description: "Worldwide content compatibility",
      icon: Globe,
      color: "text-primary",
    },
  ];

  return (
    <section id="compatibility" className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Third-Party Service Compatibility</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our devices come preconfigured for seamless integration with popular third-party services.
            Availability of third-party services depends on your region. Use responsibly and comply with all applicable laws.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {compatibilityItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className={`w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center ${item.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                <Badge variant="outline" className="border-current">
                  Compatible
                </Badge>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Legal Notice:</strong> Availability of third-party services depends on your region. 
            Use responsibly and comply with all applicable laws. We do not facilitate copyright infringement.
          </p>
        </div>
      </div>
    </section>
  );
};