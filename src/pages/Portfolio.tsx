import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Star } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredProperties = [
    {
      id: 1,
      title: "Executive Office Complete Renovation",
      location: "Salt Lake Sector V, Kolkata",
      price: "₹1.2 Crore",
      type: "Office Renovation",
      beds: 0,
      baths: 3,
      sqft: 12000,
      rating: 4.9,
      image: "/src/assets/office-space.jpg",
      featured: true,
      description: "Complete transformation of traditional office into modern collaborative workspace"
    },
    {
      id: 2,
      title: "Luxury Villa Interior Design",
      location: "Alipore, Kolkata",
      price: "₹85 Lakhs",
      type: "House Interior Design",
      beds: 4,
      baths: 4,
      sqft: 4500,
      rating: 4.9,
      image: "/src/assets/house.jpg",
      featured: true,
      description: "Contemporary luxury home interiors with custom furniture and smart home features"
    },
    {
      id: 3,
      title: "Heritage House Restoration",
      location: "Ballygunge, Kolkata",
      price: "₹2.5 Crore",
      type: "House Renovation",
      beds: 5,
      baths: 5,
      sqft: 6000,
      rating: 4.8,
      image: "/src/assets/house.jpg",
      featured: false,
      description: "Careful restoration of 100-year heritage home with modern amenities"
    },
    {
      id: 4,
      title: "Modern Apartment Interiors",
      location: "New Town, Rajarhat",
      price: "₹18 Lakhs",
      type: "Interior Design",
      beds: 3,
      baths: 2,
      sqft: 1800,
      rating: 4.7,
      image: "/src/assets/apartment.jpg",
      featured: false,
      description: "Minimalist modern interiors with space optimization and modular design"
    },
    {
      id: 5,
      title: "Co-Working Space Interior",
      location: "Park Street, Kolkata",
      price: "₹65 Lakhs",
      type: "Office Interior Design",
      beds: 0,
      baths: 4,
      sqft: 8000,
      rating: 4.8,
      image: "/src/assets/office-space.jpg",
      featured: false,
      description: "Vibrant co-working space with flexible zones and modern aesthetics"
    },
    {
      id: 6,
      title: "Premium Villa Makeover",
      location: "EM Bypass, Kolkata",
      price: "₹3.2 Crore",
      type: "House Renovation & Interior",
      beds: 5,
      baths: 6,
      sqft: 7500,
      rating: 4.9,
      image: "/src/assets/house.jpg",
      featured: false,
      description: "Complete villa transformation with luxury interiors and smart home integration"
    },
    {
      id: 7,
      title: "Boutique Office Design",
      location: "Camac Street, Kolkata",
      price: "₹45 Lakhs",
      type: "Office Interior Design",
      beds: 0,
      baths: 2,
      sqft: 5000,
      rating: 4.7,
      image: "/src/assets/office-space.jpg",
      featured: false,
      description: "Elegant office interiors with luxury finishes for professional services firm"
    },
    {
      id: 8,
      title: "Duplex Home Interior",
      location: "South City, Kolkata",
      price: "₹42 Lakhs",
      type: "House Interior Design",
      beds: 4,
      baths: 3,
      sqft: 3200,
      rating: 4.8,
      image: "/src/assets/house.jpg",
      featured: false,
      description: "Contemporary duplex interiors with open staircase and modern kitchen"
    },
  ];

  const categories = ["All", "Office Renovation", "House Renovation", "Interior Design", "Office Interior", "House Interior"];

  const filteredProperties = selectedCategory === "All" 
    ? featuredProperties 
    : featuredProperties.filter(property => {
        if (selectedCategory === "Office Interior") {
          return property.type.includes("Office Interior");
        }
        if (selectedCategory === "House Interior") {
          return property.type.includes("House Interior");
        }
        return property.type.includes(selectedCategory);
      });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Showcasing our expertise in office renovations, house transformations, and luxury interior design. 
              From heritage restorations to contemporary makeovers across Kolkata.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`px-6 py-2 text-sm font-medium cursor-pointer transition-colors ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary hover:text-primary-foreground"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exceptional renovation and interior design projects that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {filteredProperties.filter(p => p.featured).map((property) => (
              <div key={property.id} className="group bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{property.type}</Badge>
                    <span className="text-2xl font-bold text-primary">{property.price}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    {property.beds > 0 && (
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{property.beds} beds</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Properties Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">All Projects</h3>
            <p className="text-lg text-muted-foreground">
              Browse our complete collection of renovation and interior design projects across Kolkata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <div key={`all-${property.id}`} className="group bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{property.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">{property.type}</Badge>
                    <span className="font-bold text-primary">{property.price}</span>
                  </div>
                  
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {property.title}
                  </h4>
                  
                  <div className="flex items-center text-muted-foreground mb-3 text-sm">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    {property.beds > 0 && (
                      <div className="flex items-center">
                        <Bed className="h-3 w-3 mr-1" />
                        <span>{property.beds}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Bath className="h-3 w-3 mr-1" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-3 w-3 mr-1" />
                      <span>{property.sqft}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;