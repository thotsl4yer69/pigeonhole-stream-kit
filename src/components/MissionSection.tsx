import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap } from "lucide-react";

export const MissionSection = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="tech-card">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h2 className="text-3xl font-bold gradient-text">The Mission</h2>
                
                <div className="text-left space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">MZ1312 is about direct action.</strong> We believe you should have control over the hardware you buy and the media you consume without being bled dry by a dozen different digital overlords.
                  </p>
                  
                  <p>
                    We're not a faceless corporation. We're tech enthusiasts building a better, freer media experience for people who are sick of the game.
                  </p>
                  
                  <p className="text-center">
                    <Zap className="w-4 h-4 inline mr-2" />
                    <em>The pigeon delivers the message directly, bypassing the system. That's what this box does.</em>
                  </p>
                  
                  <p className="text-center font-semibold text-foreground text-lg">
                    Get yours. Reclaim your screen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};