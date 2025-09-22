import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle, FileCheck, Key } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Initial Consultation",
      description: "We begin with understanding your vision, requirements, and aspirations for the perfect property.",
      featured: true
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Curated Selection",
      description: "Our experts handpick properties that align with your criteria and schedule private viewings.",
      featured: false
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Seamless Documentation", 
      description: "We handle all paperwork and negotiations to ensure transparency and the best possible terms.",
      featured: false
    },
    {
      icon: <Key className="w-8 h-8 text-white" />,
      title: "Smooth Handover",
      description: "Professional property handover with ongoing support for your complete satisfaction.",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
            our<br />
            <span className="text-transparent bg-clip-text bg-gradient-orange">workflow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A refined process that transforms property discovery into an exceptional experience.
          </p>
          <Button variant="portfolio" size="lg">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a consultation
          </Button>
        </div>

        {/* Process Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mt-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              
              {/* Step Card */}
              <div className={`
                rounded-3xl p-8 h-full shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2
                ${step.featured ? 'bg-gradient-orange text-white' : 'bg-card'}
              `}>
                
                {/* Step Number */}
                <div className={`
                  absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10
                  ${step.featured ? 'bg-white text-primary' : 'bg-primary text-white'}
                `}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform
                  ${step.featured ? 'bg-white/20' : 'bg-gradient-orange'}
                `}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className={`
                  text-xl font-bold mb-4
                  ${step.featured ? 'text-white' : 'text-foreground'}
                `}>
                  {step.title}
                </h3>
                
                <p className={`
                  text-sm leading-relaxed mb-6
                  ${step.featured ? 'text-white/90' : 'text-muted-foreground'}
                `}>
                  {step.description}
                </p>
                
                {/* Action Button */}
                <Button 
                  variant={step.featured ? "outline" : "ghost"} 
                  size="sm" 
                  className={`
                    group/btn w-full
                    ${step.featured ? 'border-white text-white hover:bg-white hover:text-primary' : 'hover:bg-secondary'}
                  `}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-secondary/50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Begin Your Property Journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have found their perfect spaces through our expertly curated process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="portfolio" size="lg">
              Start Your Search
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;