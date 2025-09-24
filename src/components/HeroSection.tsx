import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building, Store } from "lucide-react";
import heroCharacter from "@/assets/hero-character.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 min-h-[80vh]">
          
          {/* Main Title Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-8xl font-black text-foreground leading-none">
                property<br />
                <span className="text-transparent bg-clip-text bg-gradient-orange">portfolio</span>
              </h1>
              
              <div className="bg-card rounded-3xl p-8 shadow-card max-w-lg">
                <p className="text-lg text-muted-foreground mb-6">
                  India's smartest renting ecosystem platform connecting tenants, landlords, 
                  and brokers in one seamless app with transparent processes and hidden monetization.
                </p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                    ))}
                  </div>
                  <span className="text-muted-foreground">5.0 Rating</span>
                </div>
              </div>

              <Button variant="portfolio" size="lg" className="w-fit">
                Explore Properties <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Stats & Image Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            
            {/* Stats Card 1 */}
            <div className="bg-card rounded-3xl p-6 shadow-card">
              <div className="text-4xl font-bold text-foreground mb-2">500+</div>
              <p className="text-sm text-muted-foreground">
                Verified properties with transparent 
                rental processes nationwide
              </p>
            </div>

            {/* Main Image Card */}
            <div className="row-span-2 bg-gradient-orange rounded-3xl p-6 shadow-card relative overflow-hidden">
              <img 
                src={heroCharacter} 
                alt="Property specialist" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-6 left-6">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Stats Card 2 */}
            <div className="bg-card rounded-3xl p-6 shadow-card">
              <div className="text-4xl font-bold text-foreground mb-2">98%</div>
              <p className="text-sm text-muted-foreground">
                Client satisfaction with our 
                role-based dashboard system
              </p>
            </div>

            {/* Icons Card */}
            <div className="bg-gradient-orange rounded-3xl p-6 shadow-card">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-2xl p-4 flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="bg-white/20 rounded-2xl p-4 flex items-center justify-center">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <div className="bg-white/20 rounded-2xl p-4 flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div className="bg-white/20 rounded-2xl p-4 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/40"></div>
                </div>
              </div>
            </div>

            {/* About Text Card */}
            <div className="col-span-2 bg-foreground rounded-3xl p-8 shadow-card text-white">
              <h3 className="text-2xl font-bold mb-4">ecosystem • platform • smart • renting</h3>
              <p className="text-white/80 text-lg">
                Revolutionary rental ecosystem where transparency meets efficiency. One app, 
                multiple roles, endless possibilities for property connections.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;