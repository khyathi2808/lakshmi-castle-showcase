import { Phone, Mail, MapPin, Download, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Floor Plans", href: "#floor-plans" },
    { name: "Specifications", href: "#specifications" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      facebook: 'https://facebook.com/lakshmicastle',
      instagram: 'https://instagram.com/lakshmicastle',
      linkedin: 'https://linkedin.com/company/aryanirman'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Developer Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Developer</h3>
            <div className="space-y-3">
              <h4 className="font-semibold">Arya Nirman Pvt. Ltd.</h4>
              <p className="text-sm text-gray-300">
                Flat No. 403, Hema Heritage Apartments<br />
                D.No. 7-18-16, Plot No. 46<br />
                Kirlampudi Layout<br />
                Visakhapatnam – 530024
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection('#contact')}
                aria-label="Contact developer"
              >
                Contact Developer
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">99633 79888</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@lakshmicastle.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">VIP Road, Visakhapatnam</span>
              </div>
              <div className="pt-2">
                <p className="text-sm font-medium">Project Architect:</p>
                <p className="text-sm text-gray-300">K. Uday Sankar</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-primary w-full"
                onClick={() => window.open("tel:+919963379888", "_self")}
                aria-label="Call developer at 99633 79888"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Downloads */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Connect & Download</h3>
            
            {/* Social Media */}
            <div>
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => handleSocialClick('facebook')}
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => handleSocialClick('instagram')}
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => handleSocialClick('linkedin')}
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Downloads */}
            <div>
              <h4 className="font-medium mb-3">Downloads</h4>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-primary w-full justify-start"
                  onClick={() => {/* Simulate download */}}
                  aria-label="Download project brochure"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-primary w-full justify-start"
                  onClick={() => scrollToSection('#floor-plans')}
                  aria-label="View floor plans"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Floor Plans
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Notes */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="space-y-4">
            <div className="text-center">
              <h4 className="font-semibold mb-3">Important Legal Information</h4>
              <p className="text-sm text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Extra charges for electricity, water, UGD, parking, and registration apply. 
                Promoter reserves the right to modify design or specifications without prior notice. 
                All images and floor plans are for representational purposes only. Prices are subject to change.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 mt-3"
                    aria-label="Read full terms and conditions"
                  >
                    Read Full Terms & Conditions
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Terms & Conditions - Lakshmi Castle</DialogTitle>
                  </DialogHeader>
                  <div className="p-4 space-y-4 text-sm">
                    <div>
                      <h5 className="font-semibold mb-2">1. Pricing & Additional Charges</h5>
                      <p className="text-muted-foreground">
                        The quoted prices are base prices and do not include charges for electricity connection, 
                        water connection, UGD connection, car parking (if applicable), stamp duty, registration charges, 
                        and other statutory charges. These will be charged extra as applicable.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">2. Modifications</h5>
                      <p className="text-muted-foreground">
                        The promoter reserves the right to modify the design, specifications, floor plans, 
                        and amenities without prior notice to comply with legal requirements or for project improvement.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">3. Representations</h5>
                      <p className="text-muted-foreground">
                        All images, floor plans, and artistic impressions are for representational purposes only 
                        and may not reflect the actual appearance of the development.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">4. Completion Timeline</h5>
                      <p className="text-muted-foreground">
                        Project completion timelines are estimates and may be subject to force majeure conditions, 
                        government approvals, and other factors beyond the developer's control.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">5. Booking & Payments</h5>
                      <p className="text-muted-foreground">
                        All bookings are subject to availability and execution of sale agreement. 
                        Payment schedules will be as per the agreed terms in the sale agreement.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Copyright */}
            <div className="text-center pt-4 border-t border-gray-600">
              <p className="text-sm text-gray-400">
                © 2024 Lakshmi Castle by Arya Nirman Pvt. Ltd. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Designed with luxury and precision for modern living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;