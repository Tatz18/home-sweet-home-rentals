import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-foreground">SUITESPOTT</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for finding the perfect office, residential, or commercial property. We make property rental simple and transparent.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                About Us
              </Button>
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Properties
              </Button>
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Services
              </Button>
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Contact
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <div className="space-y-2">
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Office Rentals
              </Button>
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Residential Rentals
              </Button>
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Commercial Spaces
              </Button>
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Property Management
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">hello@suitespott.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Suitespott. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;