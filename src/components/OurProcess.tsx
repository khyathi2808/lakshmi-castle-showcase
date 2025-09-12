import { useState } from "react";
import { Building2, Users, Award, Clock, MapPin, Phone, Download, Car, ShoppingBag, Heart, Waves, Building, Utensils, CreditCard, Hospital, TreePine, Droplets, Recycle, Hammer, Shield, CheckCircle, Star, Calendar, Target, Lightbulb, Settings, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import "./prohight.css";
const OurProcess = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const constructionSteps = [
    {
      id: "planning",
      title: "Planning & Design",
      icon: PenTool,
      description: "Comprehensive planning with Vastu compliance and modern architectural design",
      phases: [
        "Site analysis and soil testing",
        "Vastu-compliant architectural planning",
        "3D visualization and client approval",
        "Government approvals and permits"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop"
    },
    {
      id: "engineering",
      title: "Engineering & Foundation",
      icon: Settings,
      description: "Robust engineering with premium materials and advanced construction techniques",
      phases: [
        "Deep foundation with RCC structure",
        "Earthquake-resistant design implementation",
        "Premium concrete mixing and pouring",
        "Quality testing at every stage"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
    },
    {
      id: "execution",
      title: "Execution & Finishing",
      icon: Hammer,
      description: "Meticulous execution with premium finishes and timely delivery",
      phases: [
        "Structural construction and MEP installation",
        "Premium vitrified tiles and UPVC windows",
        "Interior finishing with luxury fittings",
        "Quality checks and handover"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
    }
  ];

  const projectStories = [
    {
      title: "Lakshmi Castle: Vizag's Future",
      subtitle: "Where Luxury Meets Convenience",
      description: "Located on the prestigious VIP Road, Lakshmi Castle represents the future of luxury living in Visakhapatnam. This 10,000 sq ft development combines traditional Vastu principles with modern architectural excellence.",
      highlights: [
        "Prime location with 2-minute access to Vizag Central Mall",
        "Vastu-compliant design ensuring positive energy flow",
        "Premium amenities including gym, pool, and clubhouse",
        "Two distinct floor plans: 2040 sq.ft. and 1990 sq.ft."
      ],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop"
    }
  ];

  const craftsmanshipFeatures = [
    {
      icon: Shield,
      title: "Vastu Compliance",
      description: "Traditional principles ensuring positive energy and harmony in every home",
      details: "Expert Vastu consultants guide every aspect of construction"
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "Eco-friendly concrete, sustainable wood, and premium fittings throughout",
      details: "Sourced from certified suppliers with quality guarantees"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Multi-stage quality checks ensuring superior construction standards",
      details: "Independent quality audits at every construction phase"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to project completion within schedule without compromising quality",
      details: "Proven track record of on-time project delivery"
    }
  ];

  const teamCredentials = [
    {
      role: "Certified Architects",
      count: "15+",
      description: "Licensed professionals with 10+ years experience",
      icon: Building2
    },
    {
      role: "Engineering Experts",
      count: "20+",
      description: "Structural and MEP engineering specialists",
      icon: Settings
    },
    {
      role: "Project Managers",
      count: "8+",
      description: "PMP certified project management professionals",
      icon: Target
    },
    {
      role: "Quality Controllers",
      count: "12+",
      description: "Certified quality assurance specialists",
      icon: Shield
    }
  ];

  const materials = [
    {
      category: "Structural Materials",
      items: [
        {
          name: "Eco-friendly Concrete",
          grade: "M30 Grade",
          description: "High-strength concrete with 20% recycled content for environmental sustainability"
        },
        {
          name: "TMT Steel Bars",
          grade: "Fe 550D",
          description: "Earthquake-resistant steel with superior bendability and strength"
        }
      ]
    },
    {
      category: "Finishing Materials",
      items: [
        {
          name: "Sustainable Wood",
          grade: "FSC Certified",
          description: "Premium hardwood from responsibly managed forests"
        },
        {
          name: "Vitrified Tiles",
          grade: "Premium Grade",
          description: "Slip-resistant, stain-proof tiles with 10-year warranty"
        },
        {
          name: "UPVC Windows",
          grade: "German Technology",
          description: "Energy-efficient windows with multi-point locking system"
        }
      ]
    },
    {
      category: "MEP Systems",
      items: [
        {
          name: "Copper Plumbing",
          grade: "ISI Marked",
          description: "Corrosion-resistant plumbing with 25-year guarantee"
        },
        {
          name: "Electrical Wiring",
          grade: "Fire Retardant",
          description: "Premium cables with advanced safety features"
        }
      ]
    }
  ];

  const sustainabilityPractices = [
    {
      icon: TreePine,
      title: "100 Trees Planted",
      description: "Environmental offset program with native tree plantation",
      impact: "Offsets 50 tons of CO2 annually"
    },
    {
      icon: Droplets,
      title: "Rainwater Harvesting",
      description: "Integrated water conservation system in every project",
      impact: "Saves 50,000 liters annually per unit"
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Construction waste recycling and sustainable disposal",
      impact: "95% waste diverted from landfills"
    },
    {
      icon: Lightbulb,
      title: "Energy Efficiency",
      description: "LED lighting and energy-efficient appliances throughout",
      impact: "30% reduction in energy consumption"
    }
  ];

  return (
    <section id="our-process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center sticky-section mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Process & Craftsmanship
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, we follow a meticulous process that ensures quality, 
            sustainability, and timely delivery of your dream home.
          </p>
        </div>

        {/* Step-by-Step Construction Process */}
        <div className="mb-20 section-stack">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Construction Process
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven three-phase approach ensures exceptional quality and customer satisfaction
            </p>
          </div>

          <Tabs defaultValue="planning" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {constructionSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <TabsTrigger key={step.id} value={step.id} className="flex items-center space-x-2">
                    <IconComponent className="w-5 h-5" />
                    <span className="hidden sm:inline">{step.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {constructionSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <TabsContent key={step.id} value={step.id}>
                  <Card className="card-luxury">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="p-8">
                          <div className="flex items-center mb-6">
                            <div className="w-16 h-16 mr-4 rounded-full bg-gradient-to-r  from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-foreground">{step.title}</h4>
                              <p className="text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            {step.phases.map((phase, index) => (
                              <div key={index} className="flex items-start">
                                <div className="w-6 h-6 mr-3 mt-1 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                  <span className="text-xs font-bold text-primary">{index + 1}</span>
                                </div>
                                <p className="text-muted-foreground">{phase}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="relative h-64 lg:h-auto">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover rounded-r-lg"
                          />
                          <div className="absolute inset-0 bg-black/10 rounded-r-lg"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        {/* Stories Behind the Projects */}
        <div className="mb-20 section-stack">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stories Behind Our Projects
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project tells a unique story of vision, dedication, and craftsmanship
            </p>
          </div>

          {projectStories.map((story, index) => (
            <Card key={index} className="card-luxury overflow-hidden mb-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <div className="mb-6">
                      <h4 className="text-3xl font-bold text-foreground mb-2">{story.title}</h4>
                      <p className="text-xl text-primary font-semibold">{story.subtitle}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {story.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {story.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start">
                          <Star className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-700"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Craftsmanship & Robust Construction */}
        <div className="mb-20 sticky-section">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Craftsmanship & Robust Construction
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uncompromising attention to detail and superior construction standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftsmanshipFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="card-luxury text-center group hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r  from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {feature.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {feature.details}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Qualifications */}
        <div className="mb-20 sticky-section">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Expert Team
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified professionals with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamCredentials.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card key={index} className="card-luxury text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r  from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{member.count}</div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {member.role}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Materials & Quality Standards */}
        <div className="mb-20 section-stack">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Premium Materials & Quality Standards
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Only the finest materials meeting international quality standards
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {materials.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg mb-4 px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center">
                    <Building className="w-6 h-6 text-primary mr-3" />
                    <span className="text-xl font-semibold">{category.category}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {category.items.map((item, idx) => (
                      <Card key={idx} className="bg-muted/30">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-foreground">{item.name}</h5>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {item.grade}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Sustainability Practices */}
        <div className="section-stack">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sustainability Practices
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building a better tomorrow through responsible construction practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityPractices.map((practice, index) => {
              const IconComponent = practice.icon;
              return (
                <Card key={index} className="card-luxury text-center group hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {practice.title}
                    </h4>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {practice.description}
                    </p>
                    <p className="text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                      {practice.impact}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Card className="card-luxury bg-gradient-to-r from-green-50 to-blue-50 inline-block">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <TreePine className="w-8 h-8 text-green-600 mr-3" />
                  <h4 className="text-2xl font-bold text-foreground">Committed to Sustainability</h4>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  Our environmental initiatives have resulted in carbon-neutral construction 
                  and contribute to a greener future for Visakhapatnam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;