import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, TrendingUp, Gift, Package, Shield, Calculator, Users, Phone } from "lucide-react";

const ForHomeowners = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Early Investment Benefits",
      description: "Up to 15% discount on pre-launch bookings with flexible payment plans",
      highlight: "Save ₹5-10 Lakhs"
    },
    {
      icon: Home,
      title: "Resale Value Growth",
      description: "Properties appreciate 12-15% annually in prime Vizag locations",
      highlight: "High ROI Guaranteed"
    },
    {
      icon: Gift,
      title: "Loyalty & Referral Program",
      description: "Earn rewards for referrals and get loyalty benefits on future purchases",
      highlight: "Earn up to ₹50,000"
    },
    {
      icon: Shield,
      title: "Old Home Assistance",
      description: "We help you sell or rent your existing property seamlessly",
      highlight: "Free Service"
    }
  ];

  const packages = [
    {
      title: "Basic Package",
      description: "Apartment without interior fittings",
      features: [
        "Premium flooring",
        "Modular kitchen platform",
        "Basic electrical fittings",
        "Bathroom fixtures"
      ],
      priceRange: "₹45-65 Lakhs",
      popular: false
    },
    {
      title: "Premium Package", 
      description: "Fully furnished apartment with premium interiors",
      features: [
        "Complete modular kitchen",
        "Premium interior design",
        "Branded electrical fittings",
        "Luxury bathroom fixtures",
        "Built-in wardrobes",
        "False ceiling & lighting"
      ],
      priceRange: "₹55-80 Lakhs",
      popular: true
    },
    {
      title: "Luxury Package",
      description: "Ultra-premium with designer interiors",
      features: [
        "Designer modular kitchen",
        "Premium marble flooring",
        "Smart home automation",
        "Luxury interior design",
        "Premium branded fittings",
        "Complete furnishing"
      ],
      priceRange: "₹70-95 Lakhs",
      popular: false
    }
  ];

  const securityFeatures = [
    "24/7 Security with CCTV surveillance",
    "MyGate app for visitor management",
    "Gated community with controlled access",
    "Intercom facility in every apartment",
    "Emergency response system",
    "Fire safety and disaster management"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            For Homeowners
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive benefits and packages designed to make your dream home journey seamless and rewarding
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Exclusive Homeowner Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {benefit.highlight}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Choose Your Perfect Package
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary' : ''} hover:shadow-lg transition-shadow`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary">{pkg.priceRange}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    Get Personalized Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Security & Safety Features
            </h3>
            <p className="text-muted-foreground">
              Your safety and security are our top priorities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculate EMI
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Book Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForHomeowners;