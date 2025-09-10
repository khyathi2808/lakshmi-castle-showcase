import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Droplets, Recycle, TreePine, Shield, Hammer, Users, Award } from "lucide-react";

const ProcessCraftsmanship = () => {
  const constructionSteps = [
    {
      step: 1,
      title: "Site Analysis & Planning",
      description: "Comprehensive soil testing, architectural planning, and regulatory approvals",
      duration: "1-2 months"
    },
    {
      step: 2, 
      title: "Foundation & Structure",
      description: "Deep foundation work, RCC structure with high-grade materials",
      duration: "4-6 months"
    },
    {
      step: 3,
      title: "Construction & Quality Checks",
      description: "Floor-by-floor construction with regular quality audits",
      duration: "12-18 months"
    },
    {
      step: 4,
      title: "Interiors & Finishing",
      description: "Premium interiors, electrical, plumbing, and final touches",
      duration: "3-4 months"
    },
    {
      step: 5,
      title: "Quality Assurance & Handover",
      description: "Final inspection, compliance check, and key handover",
      duration: "1 month"
    }
  ];

  const qualityStandards = [
    {
      icon: Hammer,
      title: "Premium Materials",
      description: "ISI certified steel, high-grade cement, and quality fittings"
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Certified engineers and experienced construction teams"
    },
    {
      icon: Award,
      title: "Quality Certifications",
      description: "ISO certified processes and industry-standard compliance"
    },
    {
      icon: Shield,
      title: "Safety Standards", 
      description: "Strict safety protocols and disaster-preparedness measures"
    }
  ];

  const sustainability = [
    {
      icon: Droplets,
      title: "Rainwater Harvesting",
      description: "Efficient water collection and storage systems",
      impact: "30% water conservation"
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Construction waste recycling and concrete reuse",
      impact: "80% waste reduction"
    },
    {
      icon: TreePine,
      title: "Green Initiatives",
      description: "Tree plantation, terrace gardening, and green spaces",
      impact: "25% green coverage"
    },
    {
      icon: Shield,
      title: "Eco-Friendly Materials",
      description: "Sustainable and environment-friendly construction materials",
      impact: "Low carbon footprint"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Process & Craftsmanship
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Transparent construction process with uncompromising quality standards and sustainable practices
          </p>
        </div>

        <Tabs defaultValue="process" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="process">Construction Process</TabsTrigger>
            <TabsTrigger value="quality">Quality & Standards</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          </TabsList>

          <TabsContent value="process" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {constructionSteps.map((step) => (
                <Card key={step.step} className="relative overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <Badge variant="outline" className="mt-2">{step.duration}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                  <div className="absolute top-0 right-0 w-1 h-full bg-primary opacity-20"></div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quality" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {qualityStandards.map((standard, index) => {
                const IconComponent = standard.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{standard.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{standard.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="sustainability" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sustainability.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <IconComponent className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1 bg-green-100 text-green-700">
                            {item.impact}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProcessCraftsmanship;