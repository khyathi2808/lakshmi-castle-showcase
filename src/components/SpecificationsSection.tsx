import { useState } from "react";
import { ChevronDown, ChevronUp, Download, Building, Lightbulb, Droplets, DoorOpen, ChefHat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";

const SpecificationsSection = () => {
  const [openSections, setOpenSections] = useState<string[]>(["civil"]);
  const { toast } = useToast();

  const specifications = [
    {
      id: "civil",
      title: "Civil Works",
      icon: Building,
      color: "from-primary to-primary-glow",
      details: [
        "RCC framed structure with earthquake resistant design",
        "6″ external walls with 4″ internal walls using solid blocks",
        "Foundation: RCC isolated footings with tie beams",
        "Columns and beams as per structural design",
        "Slab thickness: 5″ RCC slab with proper reinforcement",
        "Waterproofing: Chemical waterproofing for terrace",
        "External walls: Weather resistant paint with primer",
        "Internal walls: Oil bound distemper finish"
      ]
    },
    {
      id: "plumbing",
      title: "Sanitary & Plumbing", 
      icon: Droplets,
      color: "from-primary to-primary-glow",
      details: [
        "Sanitary fittings: Parryware or equivalent brand",
        "CP fittings: Jaguar or equivalent brand",
        "Hot & cold water supply lines with CPVC pipes",
        "Underground & overhead water tanks with proper capacity",
        "Individual water meters for each apartment",
        "Drainage: PVC pipes with proper slope and venting",
        "Bathroom tiles: Vitrified tiles up to 7 feet height",
        "Kitchen sink: Stainless steel with CP fittings"
      ]
    },
    {
      id: "electrical",
      title: "Electrical Works",
      icon: Lightbulb,
      color: "from-primary to-primary-glow",
      details: [
        "Individual EB meters for each apartment",
        "MCB and ELCB protection for safety",
        "Sufficient power points as per modern requirements",
        "Concealed copper wiring with quality cables",
        "Switches & sockets: Anchor or equivalent brand",
        "Generator backup for common areas and lifts",
        "LED light fittings in common areas",
        "Cable TV and internet provision in all rooms"
      ]
    },
    {
      id: "doors",
      title: "Doors & Windows",
      icon: DoorOpen,
      color: "from-primary to-primary-glow",
      details: [
        "Main door: Teak wood frame with solid panel door",
        "Internal doors: Sal wood frame with flush doors",
        "Door hardware: SS mortice locks and hinges",
        "Windows: UPVC frames with clear glass",
        "Mosquito mesh for all windows",
        "Ventilators with glass louvers",
        "Safety grills for ground floor windows",
        "Door frames treated against termite and borer"
      ]
    },
    {
      id: "kitchen",
      title: "Kitchen & Flooring",
      icon: ChefHat,
      color: "from-primary to-primary-glow",
      details: [
        "Kitchen: Granite platform with SS sink",
        "Wall tiles: Ceramic tiles up to 2 feet above platform",
        "Provision for exhaust fan and chimney",
        "Electrical points for refrigerator and microwave",
        "Flooring: Vitrified tiles (2' x 2') in all rooms",
        "Bathroom flooring: Anti-skid ceramic tiles",
        "Balcony: Anti-skid tiles with proper waterproofing",
        "Skirting: Matching vitrified tiles in all rooms"
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleDownloadSpecs = () => {
    toast({
      title: "Download Started",
      description: "Downloading detailed specifications PDF...",
    });
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'https://res.cloudinary.com/dwzqkft2i/image/upload/v1756992750/WhatsApp_Image_2025-08-29_at_11.50.54_PM_1_1_ongnup.jpg';
    link.download = 'lakshmi-castle-specifications.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="specifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Construction Specifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Premium quality construction with finest materials and modern techniques ensuring durability and luxury living experience.
          </p>
          
          <Button
            onClick={handleDownloadSpecs}
            className="btn-hero"
            aria-label="Download detailed specifications PDF"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Specifications
          </Button>
        </div>

        {/* Specifications Accordion */}
        <div className="space-y-4">
          {specifications.map((spec) => {
            const IconComponent = spec.icon;
            const isOpen = openSections.includes(spec.id);
            
            return (
              <Card key={spec.id} className="card-luxury overflow-hidden">
                <Collapsible 
                  open={isOpen} 
                  onOpenChange={() => toggleSection(spec.id)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className={`cursor-pointer bg-gradient-to-r ${spec.color} text-white hover:opacity-90 transition-opacity`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold">{spec.title}</CardTitle>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {spec.details.map((detail, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </div>

        {/* Quality Assurance */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-primary-glow text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Quality Assurance Guarantee
              </h3>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                All construction work follows ISI standards and local building codes. 
                Regular quality inspections ensure superior build quality and timely completion.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">ISI</div>
                  <div className="text-sm">Standard Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Support Service</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;