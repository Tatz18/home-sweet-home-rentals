import { CheckCircle, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              why choose<br />
              <span className="text-transparent bg-clip-text bg-gradient-orange">suitespott</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-base md:text-xl text-muted-foreground">
              India's first smart renting ecosystem platform where tenants, landlords, 
              brokers, and employees connect through role-based dashboards for seamless rental experiences.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1 - One Stop Solution */}
          <div className="group bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-orange rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Smart Ecosystem Platform</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Revolutionary single app with role-based dashboards for tenants, landlords, brokers, 
              and employees. Everyone connected, everyone benefited through our intelligent system.
            </p>
            <Button variant="outline" size="sm" className="group w-full sm:w-auto">
              Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Card 2 - Verified Listings (Featured) */}
          <div className="group bg-gradient-orange rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 text-white">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Legal Compliance & Transparency</h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              RERA registered, legally compliant platform with complete transparency for tenants. 
              Service facilitation agreements ensure fair dealing for all parties involved.
            </p>
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary group w-full sm:w-auto">
              Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Card 3 - Fast Turnaround */}
          <div className="group bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-foreground rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-background" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Recurring Revenue Model</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Innovative recurring brokerage model ensures stable monthly income flow versus 
              traditional one-time brokerage. Sustainable growth for all ecosystem partners.
            </p>
            <Button variant="outline" size="sm" className="group w-full sm:w-auto">
              Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-foreground mb-2">Multi-Role</div>
            <p className="text-sm md:text-base text-muted-foreground">Single App Platform</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-foreground mb-2">RERA</div>
            <p className="text-sm md:text-base text-muted-foreground">Legally Compliant</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-foreground mb-2">24/7</div>
            <p className="text-sm md:text-base text-muted-foreground">Dashboard Access</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-foreground mb-2">100%</div>
            <p className="text-sm md:text-base text-muted-foreground">Transparent Process</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;