
import React, { useState } from 'react';
import { Building2, Users, Award, Clock, Eye, Target, Heart, Shield, CheckCircle, Star, UserCheck, Lightbulb, Globe, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import testimonial from "@/assets/testimonial-9.jpg"
const ProjectHighlights = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(null);

  // Mock timeline data
  const timeline = [
    {
      year: "2010",
      title: "Foundation",
      description: "Ayra Nirma was established with a vision to transform urban living in Visakhapatnam"
    },
    {
      year: "2015",
      title: "First Milestone",
      description: "Completed our first residential project - Green Valley Apartments"
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Expanded operations and launched premium housing segment"
    },
    {
      year: "2020",
      title: "Innovation",
      description: "Introduced smart home technology and sustainable building practices"
    },
    {
      year: "2023",
      title: "Lakshmi Castle",
      description: "Launched our flagship project - Lakshmi Castle on VIP Road"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Planning next phase of luxury developments across the region"
    }
  ];

  // Mission, Vision & Values
  const coreValues = [
    {
      icon: Shield,
      title: "Quality",
      description: "Uncompromising commitment to superior construction standards and materials",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Open communication and honest dealings with all stakeholders",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building homes that foster community connections and relationships",
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Leadership team mock data
  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "Managing Director",
      experience: "20+ years",
      description: "Visionary leader with extensive experience in real estate development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      position: "Lead Architect",
      experience: "15+ years",
      description: "Award-winning architect specializing in sustainable residential design",
      image: testimonial
    },
    {
      name: "Arun Patel",
      position: "Construction Head",
      experience: "18+ years",
      description: "Expert in construction management and quality assurance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sunita Reddy",
      position: "Sales Director",
      experience: "12+ years",
      description: "Customer-focused leader driving sales excellence and client satisfaction",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];
const handleEnquireNow = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Code of Conduct items
  const codeOfConduct = [
    {
      title: "Transparency",
      content: "We maintain complete transparency in all our dealings, from pricing to project timelines. Our customers are always informed about every aspect of their investment."
    },
    {
      title: "Honesty",
      content: "Integrity is at the core of our business. We provide accurate information, deliver on our promises, and maintain ethical standards in all interactions."
    },
    {
      title: "Fast Response",
      content: "We value your time and ensure prompt responses to all inquiries. Our dedicated customer service team is available to assist you within 24 hours."
    },
    {
      title: "Quality Assurance",
      content: "Every project undergoes rigorous quality checks at multiple stages. We use only premium materials and work with certified contractors to ensure excellence."
    },
    {
      title: "Customer First",
      content: "Our customers are our priority. We go above and beyond to exceed expectations and create lasting relationships built on trust and satisfaction."
    }
  ];

  // Ayra Advantage tabs data
  const advantages = {
    quality: {
      title: "Superior Quality",
      items: [
        "Premium construction materials sourced from trusted suppliers",
        "Rigorous quality control at every construction phase",
        "Certified contractors and skilled craftsmen",
        "Advanced construction techniques and modern equipment",
        "Regular third-party quality audits"
      ]
    },
    craftsmanship: {
      title: "Expert Craftsmanship",
      items: [
        "Skilled artisans with decades of experience",
        "Attention to detail in every aspect of construction",
        "Traditional techniques combined with modern innovation",
        "Custom solutions tailored to individual preferences",
        "Continuous training and skill development programs"
      ]
    },
    community: {
      title: "Community Impact",
      items: [
        "Creating sustainable and eco-friendly developments",
        "Supporting local employment and businesses",
        "Contributing to urban infrastructure development",
        "Promoting community welfare initiatives",
        "Building long-term relationships with residents"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section id="about" className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700">Ayra Nirma</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
            Building homes with trust, crafting dreams with precision
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in Visakhapatnam's real estate landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Ayra Nirma Building"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Ayra Nirman</h3>
              <p className="text-slate-600 leading-relaxed">
               Here, we craft more than homes—we create lifestyles. With a presence in India , our expertise lies in delivering luxury apartments that combine modern design with timeless elegance.   </p>
              <p className="text-slate-600 leading-relaxed">
                Our journey began with a small team of passionate individuals who believed in the power of honest 
                construction practices. Today, we are proud to have delivered over 500 homes to happy families, 
                each project reflecting our unwavering commitment to excellence.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Our Journey</h3>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r  from-amber-400 to-amber-700 rounded-full flex items-center justify-center text-white font-bold">
                        {item.year}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-20">
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mission, Vision & Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our guiding principles that shape everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r  from-amber-400 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  To create exceptional living spaces that enhance the quality of life for our residents 
                  while contributing positively to the urban landscape of Visakhapatnam.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r  from-amber-400 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  To be the most trusted and respected real estate developer in the region, 
                  known for innovation, sustainability, and customer-centric approach.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r  from-amber-400 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-xl">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Integrity, Quality, Transparency, and Community - these core values guide every decision 
                  we make and every project we undertake.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white shadow-lg border-0 transform transition-transform duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r  from-amber-400 to-amber-700 flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us - Ayra Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Ayra Advantage</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover what sets us apart in the competitive real estate landscape
            </p>
          </div>

          <Tabs defaultValue="quality" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="quality" className="text-sm md:text-base">Quality</TabsTrigger>
              <TabsTrigger value="craftsmanship" className="text-sm md:text-base">Craftsmanship</TabsTrigger>
              <TabsTrigger value="community" className="text-sm md:text-base">Community Impact</TabsTrigger>
            </TabsList>

            {Object.entries(advantages).map(([key, advantage]) => (
              <TabsContent key={key} value={key}>
                <Card className="bg-slate-50 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {advantage.items.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the visionaries driving our success and shaping the future of real estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="bg-white shadow-xl border-0 overflow-hidden">
                <div className="h-64 relative">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{leader.position}</p>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-slate-500">{leader.experience}</span>
                  </div>
                  <p className="text-sm text-slate-600">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Code of Conduct</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our commitment to ethical practices and customer excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible>
              {codeOfConduct.map((item, index) => (
                <AccordionItem key={index} value={`conduct-${index}`} className="border-b border-slate-200">
                  <AccordionTrigger className="text-left py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r  from-amber-400 to-amber-700 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-semibold">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-16 pb-4">
                      <p className="text-slate-600 leading-relaxed">{item.content}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Dream Home?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join the Ayra Nirma family and experience the difference of working with a trusted developer
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button  onClick={handleEnquireNow} className="bg-gradient-to-r  from-amber-400 to-amber-700 text-white px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us Today
            </Button>
           
          </div>
        </div>
      </section>
    </div>
  );
};



export default ProjectHighlights;