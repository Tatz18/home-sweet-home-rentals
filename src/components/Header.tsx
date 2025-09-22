import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-orange flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-foreground">suitespott</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="nav" className="text-base">Home</Button>
            <Button variant="nav" className="text-base">About</Button>
            <Button variant="nav" className="text-base">Portfolio</Button>
            <Button variant="nav" className="text-base">Exhibitions</Button>
            <Button variant="nav" className="text-base">Contact</Button>
          </nav>

          {/* CTA Button */}
          <Button variant="dark" size="default" className="font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;