import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-foreground">SUITESPOTT</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="nav" className="text-sm">Home</Button>
            <Button variant="nav" className="text-sm">About</Button>
            <Button variant="nav" className="text-sm">Properties</Button>
            <Button variant="nav" className="text-sm">Services</Button>
            <Button variant="nav" className="text-sm">Contact</Button>
          </nav>

          {/* CTA Button */}
          <Button variant="hero" size="sm">
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;