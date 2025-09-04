import { Home, MapPin, Building, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectHighlights = () => {
  const highlights = [
    {
      icon: Home,
      title: "Spacious 3BHK Flats",
      description: "2040 sq.ft. and 1990 sq.ft. layouts with pooja rooms and balconies",
      action: "View Floor Plans",
      href: "#floor-plans",
      color: "from-primary to-primary-glow"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "On VIP Road, near Vizag Central Mall and RTC Complex",
      action: "Explore Location",
      href: "#location",
      color: "from-secondary to-secondary-glow"
    },
    {
      icon: Building,
      title: "Premium Construction",
      description: "RCC structure, vitrified tiles, UPVC windows",
      action: "See Specifications",
      href: "#specifications",
      color: "from-accent to-accent-soft"
    },
    {
      icon: Star,
      title: "Modern Amenities",
      description: "Lift, intercom, and premium fittings",
      action: "View Gallery",
      href: "#gallery",
      color: "from-luxury-pink to-luxury-pink-foreground"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Ayra Nirman, we craft more than homes—we create lifestyles. With a presence in India and the USA, our expertise lies in delivering luxury apartments that combine modern design with timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card 
                key={index} 
                className="card-luxury group cursor-pointer"
                onClick={() => scrollToSection(highlight.href)}
              >
                <CardContent className="p-6 text-center">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  {/* Action Button */}
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary-glow group-hover:translate-x-1 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(highlight.href);
                    }}
                    aria-label={highlight.action}
                  >
                    {highlight.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Luxury Living?
            </h3>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Schedule a site visit today and discover your dream home at Lakshmi Castle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="btn-gold px-8 py-3 text-lg"
                onClick={() => scrollToSection('#contact')}
                aria-label="Schedule site visit"
              >
                Schedule Site Visit
              </Button>
              <Button
                variant="outline"
                className="border-white text-primary px-8 py-3 text-lg"
                onClick={() => window.open("tel:+919963379888", "_self")}
                aria-label="Call developer"
              >
                Call Now: 99633 79888
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;