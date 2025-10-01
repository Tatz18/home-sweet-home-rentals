import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, FileText, Zap, Shield } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Employee Onboarding",
      description: "Our trained employees onboard tenants and landlords directly or through channel partners into the ecosystem.",
      featured: true
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Smart Dashboard Access",
      description: "Role-based dashboards for tenants, landlords, brokers, and employees with personalized features.",
      featured: false
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Legal Facilitation", 
      description: "RERA compliant service facilitation with transparent agreements ensuring fair dealings for all.",
      featured: false
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Ecosystem Benefits",
      description: "Ongoing revenue sharing, rewards system, and sustainable commission structure for all participants.",
      featured: true
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4 md:mb-6">
            ecosystem<br />
            <span className="text-transparent bg-clip-text bg-gradient-orange">workflow</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
            Experience our revolutionary role-based dashboard system where every participant benefits through our intelligent ecosystem platform.
          </p>
          <Button variant="portfolio" size="lg" className="w-full sm:w-auto">
            <Users className="w-5 h-5 mr-2" />
            Join Ecosystem
          </Button>
        </div>

        {/* Process Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              
              {/* Step Card */}
              <div className={`
                rounded-2xl md:rounded-3xl p-6 md:p-8 h-full shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2
                ${step.featured ? 'bg-gradient-orange text-white' : 'bg-card'}
              `}>
                
                {/* Step Number */}
                <div className={`
                  absolute -top-3 md:-top-4 left-6 md:left-8 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold z-10
                  ${step.featured ? 'bg-white text-primary' : 'bg-primary text-white'}
                `}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Icon */}
                <div className={`
                  w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform
                  ${step.featured ? 'bg-white/20' : 'bg-gradient-orange'}
                `}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className={`
                  text-lg md:text-xl font-bold mb-3 md:mb-4
                  ${step.featured ? 'text-white' : 'text-foreground'}
                `}>
                  {step.title}
                </h3>
                
                <p className={`
                  text-xs md:text-sm leading-relaxed mb-4 md:mb-6
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

              {/* Connector Line (hidden on mobile and tablet, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 md:mt-20 bg-secondary/50 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            Ready to Join Our Smart Renting Ecosystem?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Be part of India's first role-based rental platform where transparency meets efficiency in property dealings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="portfolio" size="lg" className="w-full sm:w-auto">
              Join as Tenant
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Become Partner
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;