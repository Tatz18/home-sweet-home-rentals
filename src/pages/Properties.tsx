import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Bed, Bath, Square, Heart, Share2 } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Downtown Loft",
      location: "SoHo, Manhattan",
      price: "$4,500/month",
      type: "Apartment",
      beds: 2,
      baths: 2,
      sqft: 1400,
      image: "/src/assets/apartment.jpg",
      available: "Available Now",
      amenities: ["Gym", "Rooftop", "Concierge"],
    },
    {
      id: 2,
      title: "Modern Office Suite",
      location: "Midtown, NYC",
      price: "$6,800/month",
      type: "Office",
      beds: 0,
      baths: 2,
      sqft: 2000,
      image: "/src/assets/office-space.jpg",
      available: "Dec 1, 2024",
      amenities: ["Parking", "Security", "Meeting Rooms"],
    },
    {
      id: 3,
      title: "Charming Brooklyn Townhouse",
      location: "Park Slope, Brooklyn",
      price: "$5,200/month",
      type: "House",
      beds: 4,
      baths: 3,
      sqft: 2200,
      image: "/src/assets/house.jpg",
      available: "Available Now",
      amenities: ["Garden", "Garage", "Fireplace"],
    },
    {
      id: 4,
      title: "Prime Retail Space",
      location: "Times Square, NYC",
      price: "$15,000/month",
      type: "Commercial",
      beds: 0,
      baths: 2,
      sqft: 4000,
      image: "/src/assets/commercial-space.jpg",
      available: "Jan 15, 2025",
      amenities: ["High Traffic", "Street Level", "Signage"],
    },
    {
      id: 5,
      title: "Penthouse with City Views",
      location: "Upper East Side",
      price: "$8,900/month",
      type: "Apartment",
      beds: 3,
      baths: 3,
      sqft: 2800,
      image: "/src/assets/apartment.jpg",
      available: "Available Now",
      amenities: ["Terrace", "Doorman", "City Views"],
    },
    {
      id: 6,
      title: "Creative Workspace",
      location: "DUMBO, Brooklyn",
      price: "$4,200/month",
      type: "Office",
      beds: 0,
      baths: 1,
      sqft: 1500,
      image: "/src/assets/office-space.jpg",
      available: "Dec 15, 2024",
      amenities: ["High Ceilings", "Natural Light", "Exposed Brick"],
    },
  ];

  const filters = ["All", "Apartments", "Houses", "Offices", "Commercial"];
  const priceRanges = ["All Prices", "Under $3K", "$3K - $6K", "$6K - $10K", "Above $10K"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Find Your Perfect Space
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Browse through our extensive collection of premium properties. From cozy apartments to spacious offices.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search by location, property type, or keywords..." 
                  className="pl-12 h-12 bg-background border-2 border-border focus:border-primary"
                />
              </div>
              <Button variant="default" size="lg" className="h-12 px-8">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filters:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <Badge
                    key={filter}
                    variant={filter === "All" ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {filter}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <Badge
                    key={range}
                    variant={range === "All Prices" ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {range}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Available Properties</h2>
            <p className="text-muted-foreground">{properties.length} properties found</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="group bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={property.available === "Available Now" ? "bg-green-500" : "bg-orange-500"}>
                      {property.available}
                    </Badge>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="icon" variant="secondary" className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Property Type */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                      {property.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                      {property.title}
                    </h3>
                    <span className="text-2xl font-bold text-primary">{property.price}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>
                  
                  {/* Property Details */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
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
                  
                  {/* Amenities */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.slice(0, 3).map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1">
                      Schedule Tour
                    </Button>
                    <Button variant="default" className="flex-1">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;