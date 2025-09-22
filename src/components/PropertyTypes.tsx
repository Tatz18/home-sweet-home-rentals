import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import officeSpace from "@/assets/office-space.jpg";
import apartment from "@/assets/apartment.jpg";
import commercialSpace from "@/assets/commercial-space.jpg";
import house from "@/assets/house.jpg";

const PropertyTypes = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
              property<br />
              <span className="text-transparent bg-clip-text bg-gradient-orange">exhibitions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Curated spaces that define modern living and working environments.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-end justify-end">
            <Button variant="portfolio" size="lg">
              View All Properties <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Large Feature Card - Offices */}
          <div className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={officeSpace} 
                alt="Premium Office Spaces"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-gradient-orange text-white px-4 py-2 rounded-full text-sm font-medium">
                  Premium
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Business District</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Modern Office Spaces</h3>
              <p className="text-muted-foreground mb-6">
                State-of-the-art office environments designed for productivity and collaboration.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Available Now</span>
                </div>
                <Button variant="outline" size="sm" className="group">
                  Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Grid of Smaller Cards */}
          <div className="grid grid-cols-1 gap-8">
            
            {/* Apartments */}
            <div className="group bg-card rounded-3xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={apartment} 
                    alt="Luxury Apartments"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Luxury Apartments</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Premium residential spaces with modern amenities and stunning city views.
                  </p>
                  <Button variant="link" className="p-0 h-auto group">
                    View Collection <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Commercial Spaces */}
            <div className="group bg-gradient-orange rounded-3xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-white">
              <div className="flex gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={commercialSpace} 
                    alt="Commercial Spaces"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Commercial Spaces</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Prime retail locations perfect for establishing your business presence.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-white hover:text-white/80 group">
                    Discover More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Houses */}
            <div className="group bg-card rounded-3xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={house} 
                    alt="Family Houses"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Family Houses</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Beautiful family homes in desirable neighborhoods with excellent amenities.
                  </p>
                  <Button variant="link" className="p-0 h-auto group">
                    Browse Homes <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Exhibition Banner */}
        <div className="mt-16 bg-foreground rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">property • exhibitions • showcase</h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join us for exclusive property showcases where premium spaces meet discerning clients.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-sm text-white/60">Next Exhibition</p>
              <p className="font-bold">Madrid Gallery, Spain</p>
              <p className="text-sm">27 Nov 2024</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-sm text-white/60">Special Event</p>
              <p className="font-bold">Manchester Premium</p>
              <p className="text-sm">20 Nov 2024</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyTypes;