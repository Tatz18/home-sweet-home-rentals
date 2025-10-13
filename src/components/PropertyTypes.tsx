import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import officeSpace from "@/assets/office-space.jpg";
import apartment from "@/assets/apartment.jpg";
import commercialSpace from "@/assets/commercial-space.jpg";
import house from "@/assets/house.jpg";
import { useNavigate } from "react-router-dom";

const PropertyTypes = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4 md:mb-6">
              our<br />
              <span className="text-transparent bg-clip-text bg-gradient-orange">services</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Comprehensive renovation and interior design solutions tailored to your vision.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end">
            <Button variant="portfolio" size="lg" className="w-full sm:w-auto" onClick={() => navigate('/portfolio')}>
              View All Projects <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Large Feature Card - Office Renovation */}
          <div className="group bg-card rounded-2xl md:rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={officeSpace} 
                alt="Office Renovation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="bg-gradient-orange text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Commercial
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">All Locations</span>
                </div>
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">Office Renovation</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                Transform your workspace with modern office renovations. From co-working spaces to corporate offices, we create productive environments.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">Quick Turnaround</span>
                </div>
                <Button variant="outline" size="sm" className="group w-full sm:w-auto" onClick={() => navigate('/portfolio')}>
                  Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Grid of Smaller Cards */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            
            {/* House Renovation */}
            <div className="group bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <div className="w-full sm:w-24 md:w-32 h-24 md:h-32 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={house} 
                    alt="House Renovation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">House Renovation</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                    Heritage restorations, villa makeovers, and complete home transformations with modern amenities.
                  </p>
                  <Button variant="link" className="p-0 h-auto group" onClick={() => navigate('/portfolio')}>
                    View Projects <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Interior Design */}
            <div className="group bg-gradient-orange rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-white">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <div className="w-full sm:w-24 md:w-32 h-24 md:h-32 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={apartment} 
                    alt="Interior Design"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Interior Design</h3>
                  <p className="text-white/90 text-xs md:text-sm mb-3 md:mb-4">
                    Luxury home interiors, apartment design, and custom furniture for contemporary living spaces.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-white hover:text-white/80 group" onClick={() => navigate('/portfolio')}>
                    Discover More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Office Interior Design */}
            <div className="group bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <div className="w-full sm:w-24 md:w-32 h-24 md:h-32 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={commercialSpace} 
                    alt="Office Interior Design"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Office Interior Design</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                    Modern office interiors, co-working spaces with flexible zones and biophilic design elements.
                  </p>
                  <Button variant="link" className="p-0 h-auto group" onClick={() => navigate('/portfolio')}>
                    Browse Projects <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Exhibition Banner */}
        <div className="mt-12 md:mt-16 bg-foreground rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Kolkata's Premier Renovation & Design Studio</h3>
          <p className="text-white/80 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            From office renovations to luxury home interiors, we bring your vision to life with expert craftsmanship 
            and innovative design solutions across Kolkata.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4">
              <p className="text-xs md:text-sm text-white/60">Specialty</p>
              <p className="font-bold text-sm md:text-base">Office Renovation</p>
              <p className="text-xs md:text-sm">Modern Workspaces</p>
            </div>
            <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4">
              <p className="text-xs md:text-sm text-white/60">Expertise</p>
              <p className="font-bold text-sm md:text-base">House Renovation</p>
              <p className="text-xs md:text-sm">Heritage & Modern</p>
            </div>
            <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4">
              <p className="text-xs md:text-sm text-white/60">Design</p>
              <p className="font-bold text-sm md:text-base">Interior Design</p>
              <p className="text-xs md:text-sm">Luxury Interiors</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyTypes;