import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, TrendingUp, Phone, MessageCircle, Calculator, FileText } from "lucide-react";

const QuickLinks = () => {
  const quickLinks = [
    {
      icon: TrendingUp,
      title: "For Investors",
      description: "Explore investment opportunities with high ROI",
      buttonText: "View Opportunities",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Home,
      title: "For Homeowners",
      description: "Find your dream home with premium amenities",
      buttonText: "Explore Homes", 
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Phone,
      title: "Get in Touch",
      description: "Speak with our property experts today",
      buttonText: "Contact Now",
      color: "bg-accent/10 text-accent-foreground"
    }
  ];

  const tools = [
    {
      icon: Calculator,
      title: "EMI Calculator",
      description: "Calculate your home loan EMI instantly"
    },
    {
      icon: FileText,
      title: "Get Quote",
      description: "Get personalized property quotes"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick support via WhatsApp"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Quick Links & Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fast access to our most popular services and resources
          </p>
        </div>

        {/* Main Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${link.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{link.title}</CardTitle>
                  <CardDescription className="text-base">
                    {link.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    {link.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Tools */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Quick Tools & Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{tool.title}</h4>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;