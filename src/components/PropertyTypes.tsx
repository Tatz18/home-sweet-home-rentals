import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import officeSpace from "@/assets/office-space.jpg";
import apartment from "@/assets/apartment.jpg";
import commercialSpace from "@/assets/commercial-space.jpg";
import house from "@/assets/house.jpg";

const PropertyTypes = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4 md:mb-6">
              commercial<br />
              <span className="text-transparent bg-clip-text bg-gradient-orange">properties</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Premium commercial spaces strategically located for business success.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end">
            <Button variant="portfolio" size="lg" className="w-full sm:w-auto">
              View All Properties <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Large Feature Card - Offices */}
          <div className="group bg-card rounded-2xl md:rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={officeSpace} 
                alt="Premium Office Spaces"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="bg-gradient-orange text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Premium
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">Business District</span>
                </div>
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">Modern Office Spaces</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                State-of-the-art office environments designed for productivity and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">Available Now</span>
                </div>
                <Button variant="outline" size="sm" className="group w-full sm:w-auto">
                  Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Grid of Smaller Cards */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            
            {/* Retail Spaces */}
            <div className="group bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <div className="w-full sm:w-24 md:w-32 h-24 md:h-32 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={apartment} 
                    alt="Retail Spaces"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Retail Spaces</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                    High-footfall retail locations perfect for establishing your brand presence.
                  </p>
                  <Button variant="link" className="p-0 h-auto group">
                    View Collection <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Warehouses */}
            <div className="group bg-gradient-orange rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-white">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <div className="w-full sm:w-24 md:w-32 h-24 md:h-32 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={commercialSpace} 
                    alt="Warehouse Spaces"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Warehouse & Industrial</h3>
                  <p className="text-white/90 text-xs md:text-sm mb-3 md:mb-4">
                    Large-scale industrial spaces with logistics connectivity and modern facilities.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-white hover:text-white/80 group">
                    Discover More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Business Centers */}
            <div className="group bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <div className="w-full sm:w-24 md:w-32 h-24 md:h-32 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={house} 
                    alt="Business Centers"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Business Centers</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                    Serviced offices and coworking spaces in premium locations with full amenities.
                  </p>
                  <Button variant="link" className="p-0 h-auto group">
                    Browse Centers <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Exhibition Banner */}
        <div className="mt-12 md:mt-16 bg-foreground rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">commercial • property • showcase</h3>
          <p className="text-white/80 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Join us for exclusive commercial property tours where prime business spaces meet forward-thinking companies.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
            <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4">
              <p className="text-xs md:text-sm text-white/60">Next Exhibition</p>
              <p className="font-bold text-sm md:text-base">Madrid Gallery, Spain</p>
              <p className="text-xs md:text-sm">27 Nov 2024</p>
            </div>
            <div className="bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4">
              <p className="text-xs md:text-sm text-white/60">Special Event</p>
              <p className="font-bold text-sm md:text-base">Manchester Premium</p>
              <p className="text-xs md:text-sm">20 Nov 2024</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyTypes;