import { useState } from "react";
import { Download, ZoomIn, ArrowLeftRight, Maximize } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import floorPlanPink from "@/assets/floor-plan-pink.jpg";

const FloorPlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<"pink" | "green" | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const { toast } = useToast();

  const floorPlans = [
    {
      id: "pink",
      name: "Pink Plan",
      area: "2040 sq.ft.",
      image: floorPlanPink,
      features: ["Master Bedroom with Attached Bath", "2 Additional Bedrooms", "Spacious Living Room", "Modern Kitchen", "Pooja Room", "2 Balconies", "2 Bathrooms", "Store Room"],
      price: "₹85,68,000*",
      color: "from-luxury-pink to-pink-300"
    },
    {
      id: "green",
      name: "Green Plan", 
      area: "1990 sq.ft.",
      image: floorPlanPink, // Using same image as placeholder
      features: ["Master Bedroom with Attached Bath", "2 Additional Bedrooms", "Living & Dining Area", "Modular Kitchen", "Pooja Room", "1 Balcony", "2 Bathrooms", "Utility Area"],
      price: "₹83,58,000*",
      color: "from-secondary to-green-300"
    }
  ];

  const handleDownloadPlans = () => {
    toast({
      title: "Download Started",
      description: "Downloading floor plans PDF...",
    });
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'lakshmi-castle-floor-plans.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomPlan = (planId: string) => {
    setSelectedPlan(planId as "pink" | "green");
  };

  const toggleComparison = () => {
    setShowComparison(!showComparison);
  };

  return (
    <section id="floor-plans" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Floor Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose from our thoughtfully designed 3BHK apartments with premium layouts and optimal space utilization
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDownloadPlans}
              className="btn-hero"
              aria-label="Download floor plans PDF"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Plans
            </Button>
            
          </div>
        </div>

        {/* Floor Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {floorPlans.map((plan) => (
            <Card key={plan.id} className="card-luxury overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary to-primary-glow text-white">
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      {/* Small Plan Badge */}
      <span
        className={`px-2 py-1 rounded text-xs font-semibold ${
          plan.id === "pink" ? "bg-pink-500" : "bg-green-500"
        }`}
      >
        {plan.name}
      </span>
      <CardTitle className="text-2xl font-bold">{plan.area}</CardTitle>
    </div>
    <div className="text-right">
      <p className="text-2xl font-bold">{plan.price}</p>
      <p className="text-sm opacity-90">Starting Price</p>
    </div>
  </div>
</CardHeader>

              
              <CardContent className="p-6">
                {/* Floor Plan Image */}
                <div className="relative mb-6 group">
                  <img
                    src={plan.image}
                    alt={`${plan.name} floor plan`}
                    className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="opacity-70 group-hover:opacity-100 btn-hero"
                          onClick={() => handleZoomPlan(plan.id)}
                          aria-label={`Zoom ${plan.name} floor plan`}
                        >
                          <ZoomIn className="w-5 h-5 mr-2" />
                          Zoom Plan
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{plan.name} - {plan.area}</DialogTitle>
                        </DialogHeader>
                        <div className="p-4">
                          <img
                            src={plan.image}
                            alt={`${plan.name} detailed floor plan`}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="btn-hero flex-1">
                        <Maximize className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{plan.name} Detailed Information</DialogTitle>
                      </DialogHeader>
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold">Area: {plan.area}</h4>
                            <h4 className="font-semibold">Price: {plan.price}</h4>
                          </div>
                          <div>
                            <h4 className="font-semibold">Type: 3BHK</h4>
                            <h4 className="font-semibold">Floor: All Floors Available</h4>
                          </div>
                        </div>
                        <img
                          src={plan.image}
                          alt={`${plan.name} floor plan`}
                          className="w-full rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button
                    variant="outline"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Enquire about this floor plan"
                  >
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <div className="animate-fade-in-up">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Floor Plans Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold text-luxury-pink">Pink Plan</th>
                        <th className="text-center p-4 font-semibold text-secondary">Green Plan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4">Total Area</td>
                        <td className="p-4 text-center">2040 sq.ft.</td>
                        <td className="p-4 text-center">1990 sq.ft.</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Master Bedroom</td>
                        <td className="p-4 text-center">14' × 12'</td>
                        <td className="p-4 text-center">13' × 12'</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Additional Bedrooms</td>
                        <td className="p-4 text-center">2 (12' × 10' each)</td>
                        <td className="p-4 text-center">2 (11' × 10' each)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Balconies</td>
                        <td className="p-4 text-center">2</td>
                        <td className="p-4 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Bathrooms</td>
                        <td className="p-4 text-center">2 + 1 Attached</td>
                        <td className="p-4 text-center">2 + 1 Attached</td>
                      </tr>
                      <tr>
                        <td className="p-4">Starting Price</td>
                        <td className="p-4 text-center font-semibold text-luxury-pink">₹85,68,000*</td>
                        <td className="p-4 text-center font-semibold text-secondary">₹83,58,000*</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  *Prices are subject to change. Additional charges apply for parking, electricity, water, and registration.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default FloorPlansSection;