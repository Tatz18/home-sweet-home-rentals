import { Button } from "@/components/ui/button";
import heroCharacter from "@/assets/hero-character.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              GET YOUR DREAMS OFFICE OR HOUSE
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              SUITE<br />
              <span className="text-transparent bg-clip-text bg-gradient-brand">SPOTT</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg">
              We blend expertise with cutting-edge technology to deliver property solutions that not only look stunning but also drive results.
            </p>
            
            <Button variant="hero" size="xl" className="text-lg">
              📅 Schedule a consultation
            </Button>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroCharacter} 
                alt="3D character holding a house model" 
                className="w-80 lg:w-96 h-auto animate-float"
              />
              <div className="absolute -inset-10 bg-gradient-brand opacity-20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;