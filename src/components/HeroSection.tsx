import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building, Store } from "lucide-react";
import heroCharacter from "@/assets/hero-character.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-24 md:pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 min-h-[80vh]">
          
          {/* Main Title Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-foreground leading-none">
                commercial<br />
                <span className="text-transparent bg-clip-text bg-gradient-orange">real estate</span>
              </h1>
              
              <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-card max-w-lg">
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Kolkata's trusted commercial real estate partner. We connect businesses with prime office spaces, 
                  retail locations, and industrial properties across Kolkata and West Bengal.
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

              <Button variant="portfolio" size="lg" className="w-full sm:w-fit">
                Explore Properties <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Stats & Image Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6">
            
            {/* Stats Card 1 */}
            <div className="bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card">
              <div className="text-2xl md:text-4xl font-bold text-foreground mb-2">300+</div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Properties across Salt Lake, 
                Park Street, Rajarhat & more
              </p>
            </div>

            {/* Main Image Card */}
            <div className="row-span-2 bg-gradient-orange rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card relative overflow-hidden">
              <img 
                src={heroCharacter} 
                alt="Property specialist" 
                className="w-full h-full object-cover rounded-xl md:rounded-2xl"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Home className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Stats Card 2 */}
            <div className="bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card">
              <div className="text-2xl md:text-4xl font-bold text-foreground mb-2">98%</div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Corporate client satisfaction 
                with our professional service
              </p>
            </div>

            {/* Icons Card */}
            <div className="bg-gradient-orange rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/20 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center justify-center">
                  <Building className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="bg-white/20 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center justify-center">
                  <Store className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="bg-white/20 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center justify-center">
                  <Home className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="bg-white/20 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/40"></div>
                </div>
              </div>
            </div>

            {/* About Text Card */}
            <div className="col-span-2 bg-foreground rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-card text-white">
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Based in Kolkata • Serving West Bengal</h3>
              <p className="text-white/80 text-sm md:text-lg">
                Your local commercial real estate experts helping businesses find the perfect office, 
                retail, or industrial space in Kolkata's prime business districts.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;