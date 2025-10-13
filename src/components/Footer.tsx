import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-orange flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SS</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-foreground">SUITESPOTT</span>
            </div>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Your trusted partner for finding the perfect office, residential, or commercial property. We make property rental simple and transparent.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <Button variant="ghost" size="icon" className="h-7 w-7 md:h-8 md:w-8">
                <Facebook className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 md:h-8 md:w-8">
                <Twitter className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 md:h-8 md:w-8">
                <Instagram className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 md:h-8 md:w-8">
                <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Quick Links</h3>
            <div className="space-y-2 flex flex-col items-start">
              <Button variant="link" className="p-0 h-auto text-xs md:text-sm text-muted-foreground hover:text-primary" onClick={() => navigate('/about')}>
                About Us
              </Button>
              <Button variant="link" className="p-0 h-auto text-xs md:text-sm text-muted-foreground hover:text-primary" onClick={() => navigate('/portfolio')}>
                Properties
              </Button>
              <Button variant="link" className="p-0 h-auto text-xs md:text-sm text-muted-foreground hover:text-primary" onClick={() => navigate('/portfolio')}>
                Services
              </Button>
              <Button variant="link" className="p-0 h-auto text-xs md:text-sm text-muted-foreground hover:text-primary" onClick={() => navigate('/contact')}>
                Contact
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Services</h3>
            <div className="space-y-2 flex flex-col items-start">
              <Button variant="link" className="p-0 h-auto text-xs md:text-sm text-muted-foreground hover:text-primary" onClick={() => navigate('/portfolio')}>
                Office Renovation
              </Button>
              <Button variant="link" className="p-0 h-auto text-xs md:text-sm text-muted-foreground hover:text-primary" onClick={() => navigate('/portfolio')}>
                House Renovation
              </Button>
              <Button variant="link" className="p-0 h-auto text-xs md:text-sm text-muted-foreground hover:text-primary" onClick={() => navigate('/portfolio')}>
                Interior Design
              </Button>
              <Button variant="link" className="p-0 h-auto text-xs md:text-sm text-muted-foreground hover:text-primary" onClick={() => navigate('/contact')}>
                Consultation
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 md:gap-3">
                <Phone className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm text-muted-foreground">+91 9123673530 / +91 8207080940</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm text-muted-foreground break-all">hello@suitespott.com</span>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-muted-foreground">Regus, Globsyn Crystal, Saltlake, 700091</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2024 Suitespott. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;