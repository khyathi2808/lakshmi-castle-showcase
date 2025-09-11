import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Our Process", href: "#our-process" },
    { name: "Projects", href: "#projects" },
    { name: "HomeOwners", href: "#homeOwner" },
    { name: "Investors", href: "#investor" },
    { name: "Resources", href: "#resource" },
    { name: "Testimonials", href: "#testimonials" }, 
    { name: "Contact", href: "#contact" },
  ];

  const handleEnquireNow = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCallNow = () => {
    window.open("tel:+919963379888", "_self");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border h-20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              aria-label="Navigate to Home"
              className="focus:outline-none"
            >
              <img 
                src="https://res.cloudinary.com/dwzqkft2i/image/upload/v1756901252/generated-image_2_1_k6pmdg.jpg" 
                alt="Ayra Nirman Logo" 
                className="h-16 w-auto object-contain" 
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1 max-w-4xl mx-8">
            <div className="flex items-center justify-center space-x-2 xl:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCallNow}
              className="btn-outline-luxury whitespace-nowrap"
              aria-label="Call developer at 99633 79888"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91-99633 79888
            </Button>
            <Button
              onClick={handleEnquireNow}
              className="bg-amber-600 hover:bg-amber-700 text-white whitespace-nowrap"
              aria-label="Open enquiry form"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <Button
                variant="outline"
                onClick={handleCallNow}
                className="w-full btn-outline-luxury"
                aria-label="Call developer at 99633 79888"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91-99633 79888
              </Button>
              <Button
                onClick={handleEnquireNow}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                aria-label="Open enquiry form"
              >
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;