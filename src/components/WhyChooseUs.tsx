import { CheckCircle, Shield, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "One-Stop Property Solution",
      description: "Whether it's an office, flat, house, or commercial space — Suitespott simplifies your search by offering everything under one roof. No more dealing with multiple brokers for different needs."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Verified Listings & Transparent Deals",
      description: "We ensure all our properties are thoroughly verified, and our dealings are clear, honest, and fair — so clients can trust what they see and get exactly what they expect."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Tailored Matchmaking & Fast Turnaround",
      description: "We don't just show listings — we match clients with spaces that fit their goals and budget. Our smart process means less hassle, faster closure."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Why Choose us</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
            Why Work with Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6 group-hover:animate-bounce">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;