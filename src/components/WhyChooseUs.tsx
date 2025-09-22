import { CheckCircle, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground leading-tight">
              why choose<br />
              <span className="text-transparent bg-clip-text bg-gradient-orange">suitespott</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-xl text-muted-foreground">
              Experience the difference of working with property specialists who understand 
              your vision and deliver exceptional results.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1 - One Stop Solution */}
          <div className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">One-Stop Property Solution</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether it's an office, flat, house, or commercial space — Suitespott simplifies 
              your search by offering everything under one roof.
            </p>
            <Button variant="outline" size="sm" className="group">
              Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Card 2 - Verified Listings (Featured) */}
          <div className="group bg-gradient-orange rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Verified Listings & Transparent Deals</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              We ensure all our properties are thoroughly verified, and our dealings are clear, 
              honest, and fair — so you get exactly what you expect.
            </p>
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary group">
              Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Card 3 - Fast Turnaround */}
          <div className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Tailored Matchmaking</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We don't just show listings — we match clients with spaces that fit their goals 
              and budget. Smart process, faster closure.
            </p>
            <Button variant="outline" size="sm" className="group">
              Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">500+</div>
            <p className="text-muted-foreground">Properties Listed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">98%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">24h</div>
            <p className="text-muted-foreground">Average Response</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">15+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;