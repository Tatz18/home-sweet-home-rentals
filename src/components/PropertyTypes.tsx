import officeSpace from "@/assets/office-space.jpg";
import apartment from "@/assets/apartment.jpg";
import commercialSpace from "@/assets/commercial-space.jpg";
import house from "@/assets/house.jpg";

const PropertyTypes = () => {
  const properties = [
    {
      title: "Offices",
      image: officeSpace,
      description: "Modern office spaces for businesses of all sizes"
    },
    {
      title: "Flats",
      image: apartment,
      description: "Comfortable residential apartments for individuals and families"
    },
    {
      title: "Commercial Spaces",
      image: commercialSpace,
      description: "Prime retail and commercial locations for your business"
    },
    {
      title: "Houses",
      image: house,
      description: "Beautiful family homes in desirable neighborhoods"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Selected Properties we work in</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We work with
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {property.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;