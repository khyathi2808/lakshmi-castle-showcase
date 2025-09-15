import React, { useState, useRef, useEffect } from 'react';
import { Building2, Users, Award, Clock, Eye, Target, Heart, Shield, CheckCircle, Star, UserCheck, Lightbulb, Globe, Phone, Mail, MapPin, Leaf, TreePine, Recycle, Hammer, Wrench, HardHat, Trophy, Calendar, Users2, BookOpen, Handshake, Factory, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import "./prohight.css";
const ProjectHighlights = () => {

  const [activeTimelineItem, setActiveTimelineItem] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Refs for scroll sections
  const aboutHeroRef = useRef(null);
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const advantageRef = useRef(null);
  const sustainabilityRef = useRef(null);
  const csrRef = useRef(null);
  const qualityRef = useRef(null);
  const leadershipRef = useRef(null);
  const historyRef = useRef(null);
  const awardsRef = useRef(null);
  const familyRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  // Intersection observer for scroll animations
  const useIntersectionObserver = (ref, threshold = 0.1) => {
    const [hasIntersected, setHasIntersected] = useState(false);
    
    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasIntersected) {
            setHasIntersected(true);
          }
        },
        { threshold }
      );

      observer.observe(element);
      return () => observer.unobserve(element);
    }, [ref, threshold, hasIntersected]);

    return { hasIntersected };
  };

  // Parallax hook
  const useParallax = (speed = 0.5) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setOffset(window.pageYOffset * speed);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return offset;
  };

  // Intersection observers
  const { hasIntersected: storyVisible } = useIntersectionObserver(storyRef);
  const { hasIntersected: missionVisible } = useIntersectionObserver(missionRef);
  const { hasIntersected: advantageVisible } = useIntersectionObserver(advantageRef);
  const { hasIntersected: sustainabilityVisible } = useIntersectionObserver(sustainabilityRef);
  const { hasIntersected: csrVisible } = useIntersectionObserver(csrRef);
  const { hasIntersected: qualityVisible } = useIntersectionObserver(qualityRef);
  const { hasIntersected: leadershipVisible } = useIntersectionObserver(leadershipRef);
  const { hasIntersected: historyVisible } = useIntersectionObserver(historyRef);
  const { hasIntersected: awardsVisible } = useIntersectionObserver(awardsRef);
  const { hasIntersected: familyVisible } = useIntersectionObserver(familyRef);
  const { hasIntersected: processVisible } = useIntersectionObserver(processRef);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const progress = (currentScroll / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section
      const sections = [aboutHeroRef, storyRef, missionRef, advantageRef, sustainabilityRef, csrRef, qualityRef, leadershipRef, historyRef, awardsRef, familyRef, processRef, ctaRef];
      const viewportHeight = window.innerHeight;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]?.current;
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportHeight * 0.5) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonial = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face";

  // Timeline data
  const timeline = [
    {
      year: "2005",
      title: "Foundation",
      description: "Ayra Nirma was established with a vision to transform Visakhapatnam's skyline"
    },
    {
      year: "2010",
      title: "First Major Project",
      description: "Completed our first residential complex with 100 units"
    },
    {
      year: "2015",
      title: "Expansion Phase",
      description: "Expanded operations and launched multiple premium projects"
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description: "Pioneered green building practices in the region"
    },
    {
      year: "2025",
      title: "Lakshmi Castle",
      description: "Launched our flagship project - Lakshmi Castle on VIP Road"
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

  // Leadership team
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

  // Sustainability initiatives
  const sustainabilityFeatures = [
    {
      icon: TreePine,
      title: "Green Building Materials",
      description: "Using eco-friendly, sustainable materials in all our constructions",
      impact: "40% reduction in carbon footprint"
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Comprehensive waste reduction and recycling programs",
      impact: "85% waste recycling rate"
    },
    {
      icon: Leaf,
      title: "Energy Efficiency",
      description: "Solar panels and energy-efficient systems in all projects",
      impact: "60% energy savings"
    }
  ];

  // CSR Activities
  const csrActivities = [
    {
      title: "Education Support",
      description: "Supporting local schools with infrastructure and educational resources",
      beneficiaries: "500+ students",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop"
    },
    {
      title: "Healthcare Initiative",
      description: "Free medical camps and healthcare facilities for underprivileged communities",
      beneficiaries: "1000+ families",
      image: "https://res.cloudinary.com/dwzqkft2i/image/upload/v1757918286/Screenshot_2025-09-15_120731_gguego.jpg"
    },
    {
      title: "Environmental Conservation",
      description: "Tree plantation drives and environmental awareness programs",
      beneficiaries: "5000+ trees planted",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    }
  ];

  // Awards and achievements
  const awards = [
    {
      year: "2024",
      title: "Best Residential Developer",
      organization: "Andhra Pradesh Real Estate Awards",
      description: "Recognized for excellence in residential development"
    },
    {
      year: "2023",
      title: "Sustainability Champion",
      organization: "Green Building Council",
      description: "Awarded for commitment to sustainable construction practices"
    },
    {
      year: "2022",
      title: "Customer Choice Award",
      organization: "Property Buyers Association",
      description: "Highest customer satisfaction ratings in the region"
    },
    {
      year: "2021",
      title: "Innovation in Construction",
      organization: "Construction Industry Association",
      description: "Recognition for innovative construction techniques and technology"
    }
  ];

  // Our Family (Team structure)
  const teamStructure = [
    {
      category: "Builders & Architects",
      count: "25+",
      description: "Experienced professionals designing and planning every project",
      icon: Building2,
      members: [
        "Senior Architects", "Structural Engineers", "Interior Designers", "Project Planners"
      ]
    },
    {
      category: "Construction Team",
      count: "150+",
      description: "Skilled craftsmen and supervisors ensuring quality construction",
      icon: HardHat,
      members: [
        "Site Engineers", "Supervisors", "Skilled Workers", "Quality Controllers"
      ]
    },
    {
      category: "Support Staff",
      count: "50+",
      description: "Administrative and customer service professionals",
      icon: Users2,
      members: [
        "Customer Relations", "Finance Team", "Legal Advisors", "Marketing Team"
      ]
    }
  ];

  // Construction Process
  const constructionProcess = [
    {
      step: "01",
      title: "Site Analysis & Planning",
      description: "Comprehensive site study, soil testing, and architectural planning",
      duration: "2-3 months",
      icon: Target
    },
    {
      step: "02",
      title: "Design & Approvals",
      description: "Detailed design development and regulatory approvals",
      duration: "3-4 months",
      icon: Building2
    },
    {
      step: "03",
      title: "Foundation & Structure",
      description: "Foundation laying and structural construction with quality checks",
      duration: "8-12 months",
      icon: Settings
    },
    {
      step: "04",
      title: "Finishing & Handover",
      description: "Interior finishing, quality inspection, and project handover",
      duration: "4-6 months",
      icon: CheckCircle
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

  const sections = ['About Hero', 'Our Story', 'Mission & Values', 'Ayra Advantage', 'Sustainability', 'CSR', 'Quality', 'Leadership', 'History', 'Awards', 'Our Family', 'Process', 'Contact'];

  const scrollToSection = (index) => {
    const refs = [aboutHeroRef, storyRef, missionRef, advantageRef, sustainabilityRef, csrRef, qualityRef, leadershipRef, historyRef, awardsRef, familyRef, processRef, ctaRef];
    const targetRef = refs[index];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquireNow = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative" id="about">
      

      {/* Section Navigation */}
     

      {/* Hero Section */}
      <section 
        ref={aboutHeroRef}
        className="sticky-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="Black">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                Ayra Nirma
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-500 max-w-5xl mx-auto font-light leading-relaxed">
              Building homes with trust, crafting dreams with precision
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm md:text-base text-slate-500 uppercase tracking-wider">Happy Families</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-sm md:text-base text-slate-500 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm md:text-base text-slate-500 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm md:text-base text-slate-500 uppercase tracking-wider">Customer Satisfaction</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
            <Button 
              onClick={handleEnquireNow}
              className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 px-10 py-4 text-lg font-semibold rounded-none transform hover:scale-105 transition-all duration-300 shadow-2xl border-0"
            >
              <UserCheck className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection(1)}
              className="border-2 border-amber-400  hover:bg-amber-400 text-slate-900 px-10 py-4 text-lg font-semibold rounded-none transform hover:scale-105 transition-all duration-300"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className="sticky-section1 h-screen"
      >
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${storyVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in Visakhapatnam's real estate landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={`scroll-reveal ${storyVisible ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Ayra Nirma Building"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className={`space-y-6 scroll-reveal ${storyVisible ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-2xl font-bold text-slate-900">Ayra Nirman</h3>
              <p className="text-slate-600 leading-relaxed">
                Here, we craft more than homes—we create lifestyles. With a presence in India, our expertise lies in delivering luxury apartments that combine modern design with timeless elegance.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our journey began with a small team of passionate individuals who believed in the power of honest 
                construction practices. Today, we are proud to have delivered over 500 homes to happy families, 
                each project reflecting our unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section 
        ref={missionRef}
        className="sticky-section bg-slate-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${missionVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mission, Vision & Values</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our guiding principles that shape everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className={`bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-500 scroll-reveal ${missionVisible ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
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

            <Card className={`bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-500 scroll-reveal ${missionVisible ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
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

            <Card className={`bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-500 scroll-reveal ${missionVisible ? 'revealed' : ''}`} style={{ transitionDelay: '600ms' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index} 
                  className={`bg-white shadow-lg border-0 transform hover:scale-105 transition-all duration-500 scroll-reveal ${missionVisible ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
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

      {/* Ayra Advantage */}
      <section 
        ref={advantageRef}
        className=" sticky-section1 h-screen py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${advantageVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Ayra Advantage</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover what sets us apart in the competitive real estate landscape
            </p>
          </div>

          <Tabs defaultValue="quality" className={`max-w-5xl mx-auto scroll-reveal ${advantageVisible ? 'revealed' : ''}`} style={{ transitionDelay: '300ms' }}>
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="quality" className="text-sm md:text-base">Quality</TabsTrigger>
              <TabsTrigger value="craftsmanship" className="text-sm md:text-base">Craftsmanship</TabsTrigger>
              <TabsTrigger value="community" className="text-sm md:text-base">Community Impact</TabsTrigger>
            </TabsList>

            {Object.entries(advantages).map(([key, advantage]) => (
              <TabsContent key={key} value={key}>
                <Card className="bg-slate-50 border-0 shadow-xl transform hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {advantage.items.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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

      {/* Sustainability Section */}
      <section 
        ref={sustainabilityRef}
        className="sticky-section bg-green-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${sustainabilityVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sustainability Commitment</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Building for today while preserving tomorrow - our sustainable approach to construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className={`bg-white shadow-lg border-0 transform hover:scale-105 transition-all duration-500 scroll-reveal ${sustainabilityVisible ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 mb-4">{feature.description}</p>
                    <div className="bg-green-100 rounded-lg p-3">
                      <p className="text-green-700 font-semibold text-sm">{feature.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section 
        ref={csrRef}
        className="sticky-section1 h-screen py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${csrVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Corporate Social Responsibility</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Giving back to the community that has supported our growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {csrActivities.map((activity, index) => (
              <Card 
                key={index} 
                className={`bg-white shadow-xl border-0 overflow-hidden transform hover:scale-105 transition-all duration-500 scroll-reveal ${csrVisible ? 'revealed' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{activity.title}</h3>
                  <p className="text-slate-600 mb-4">{activity.description}</p>
                  <div className="bg-amber-100 rounded-lg p-3">
                    <p className="text-amber-700 font-semibold text-sm">{activity.beneficiaries}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Commitment Section */}
      <section 
        ref={qualityRef}
        className="sticky-section bg-slate-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${qualityVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Commitment to Quality</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every project reflects our unwavering dedication to excellence and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`scroll-reveal ${qualityVisible ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="Quality Construction"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className={`space-y-8 scroll-reveal ${qualityVisible ? 'revealed' : ''}`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Materials</h3>
                  <p className="text-slate-600">We source only the highest quality materials from certified suppliers to ensure durability and excellence.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Control</h3>
                  <p className="text-slate-600">Multiple quality checkpoints ensure that every aspect of construction meets our stringent standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-slate-600">Our 100% customer satisfaction rate speaks to our commitment to exceeding expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section 
        ref={leadershipRef}
        className="sticky-section1 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${leadershipVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the visionaries driving our success and shaping the future of real estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card 
                key={index} 
                className={`bg-white shadow-xl border-0 overflow-hidden transform hover:scale-105 transition-all duration-500 scroll-reveal ${leadershipVisible ? 'revealed' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
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

      {/* History & Timeline */}
      <section 
        ref={historyRef}
        className="bg-slate-50 sticky-section py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${historyVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey Through Time</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Two decades of growth, innovation, and excellence in real estate development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible>
              {timeline.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className={`scroll-reveal ${historyVisible ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline group">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-700 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        {item.year}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold group-hover:text-amber-600 transition-colors">{item.title}</h4>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-20 animate-fade-in">
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section 
        ref={awardsRef}
        className="sticky-section1 py-16 sticky-section "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${awardsVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Awards & Achievements</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Recognition for our commitment to excellence and industry leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card 
                key={index} 
                className={`bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-500 scroll-reveal ${awardsVisible ? 'revealed' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">{award.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{award.title}</h3>
                      <p className="text-blue-600 font-semibold mb-3">{award.organization}</p>
                      <p className="text-slate-600">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Family Section */}
      <section 
        ref={familyRef}
        className="sticky-section bg-slate-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${familyVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Family</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The dedicated professionals who make every project a success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamStructure.map((team, index) => {
              const IconComponent = team.icon;
              return (
                <Card 
                  key={index} 
                  className={`bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-500 scroll-reveal ${familyVisible ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{team.category}</CardTitle>
                    <div className="text-3xl font-bold text-amber-600">{team.count}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center mb-6">{team.description}</p>
                    <div className="space-y-2">
                      {team.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{member}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process/Approach Section */}
      <section 
        ref={processRef}
        className="sticky-section1 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-reveal ${processVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Construction Process</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A systematic approach ensuring quality, timeline adherence, and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionProcess.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <Card 
                  key={index} 
                  className={`bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-500 scroll-reveal ${processVisible ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-amber-600 mb-4">{process.step}</div>
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{process.title}</h3>
                    <p className="text-slate-600 mb-4">{process.description}</p>
                    <div className="bg-amber-100 rounded-lg p-3">
                      <p className="text-amber-700 font-semibold text-sm">Duration: {process.duration}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      
    </div>
  );
};

export default ProjectHighlights;