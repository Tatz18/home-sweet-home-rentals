import { Button } from "@/components/ui/button";
import { User, Search, HandHeart, Key } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "Client Consultation",
      description: "We start with understanding your specific needs, budget, and preferences for the perfect property match."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Property Search & Shortlisting",
      description: "Our team curates a list of verified properties that align with your requirements and schedule viewings."
    },
    {
      icon: <HandHeart className="w-8 h-8 text-primary" />,
      title: "Negotiation & Agreement",
      description: "We handle all negotiations and paperwork to ensure you get the best deal with transparent terms."
    },
    {
      icon: <Key className="w-8 h-8 text-primary" />,
      title: "Handover & Support",
      description: "Smooth property handover with ongoing support for any queries or additional services you might need."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Our Process</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-8">
            Our Workflow
          </h2>
          <Button variant="hero" size="lg">
            📅 Schedule a consultation
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number */}
              <div className="absolute -top-4 left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>
              
              <div className="p-8 pt-12 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;