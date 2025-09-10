import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, MapPin, Building, DollarSign, Users, FileText, Handshake, BarChart3 } from "lucide-react";

const ForInvestors = () => {
  const investmentOpportunities = [
    {
      id: 1,
      name: "Ayra Skyline Phase 2",
      location: "MVP Colony",
      investment: "₹35-50 Lakhs",
      expectedROI: "18-22%",
      timeline: "24 months",
      available: "15 units left",
      status: "Pre-launch"
    },
    {
      id: 2,
      name: "Ayra Coastal Heights",
      location: "Rushikonda",
      investment: "₹40-65 Lakhs", 
      expectedROI: "20-25%",
      timeline: "30 months",
      available: "25 units left",
      status: "Early bird"
    }
  ];

  const whyVizag = [
    {
      icon: TrendingUp,
      title: "Rapid Growth Hub",
      description: "IT sector boom with companies like TCS, Infosys setting up major operations"
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Major port city with excellent connectivity to Hyderabad and Chennai"
    },
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Metro rail, international airport expansion, and smart city initiatives"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "30-40% lower property prices compared to Hyderabad and Bangalore"
    }
  ];

  const businessPartners = [
    {
      type: "Material Suppliers",
      description: "Premium construction materials with competitive pricing",
      benefits: "Volume discounts, quality assurance, timely delivery"
    },
    {
      type: "Trade Contractors",
      description: "Skilled contractors for specialized construction work", 
      benefits: "Consistent work flow, fair payments, long-term partnerships"
    },
    {
      type: "Channel Partners",
      description: "Real estate brokers and sales consultants",
      benefits: "Attractive commissions, marketing support, training programs"
    }
  ];

  const aiPredictions = [
    { metric: "Property Value Growth", current: "₹4,500/sqft", predicted: "₹6,200/sqft", timeframe: "3 years", growth: 38 },
    { metric: "Rental Yield", current: "6.5%", predicted: "8.2%", timeframe: "2 years", growth: 26 },
    { metric: "Capital Appreciation", current: "12%", predicted: "18%", timeframe: "5 years", growth: 50 }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            For Investors
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover lucrative investment opportunities in Vizag's fastest-growing real estate market
          </p>
        </div>

        {/* Investment Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Current Investment Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{opportunity.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {opportunity.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{opportunity.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Investment Range</span>
                        <div className="font-semibold text-primary">{opportunity.investment}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Expected ROI</span>
                        <div className="font-semibold text-green-600">{opportunity.expectedROI}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Timeline</span>
                        <div className="font-semibold">{opportunity.timeline}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Available</span>
                        <div className="font-semibold text-orange-600">{opportunity.available}</div>
                      </div>
                    </div>
                    <Button className="w-full">View Investment Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Vizag */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Why Invest in Vizag?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyVizag.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* AI Predictions */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            AI-Powered Market Predictions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiPredictions.map((prediction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    {prediction.metric}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Current: {prediction.current}</span>
                      <span>Predicted: {prediction.predicted}</span>
                    </div>
                    <Progress value={prediction.growth} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{prediction.timeframe}</span>
                      <span className="text-green-600 font-semibold">+{prediction.growth}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Partners */}
        <div className="bg-background rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Business Partnership Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-primary" />
                    {partner.type}
                  </CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{partner.benefits}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Partner With Us
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Download Investment Guide
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Schedule Investor Meet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForInvestors;