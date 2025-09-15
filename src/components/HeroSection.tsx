import { useState, useEffect, useRef } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Award, 
  Building,
  Heart,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollProgress, SectionNavigation } from "@/components/ui/scroll-progress";
import { useScrollEffects, useIntersectionObserver, useParallax } from "@/hooks/use-scroll-effects";
import "./prohight.css";
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Refs for scroll sections
  const heroRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const whatsappRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLElement>(null);

  // Scroll effects
  const { scrollProgress, activeSection, isScrolling } = useScrollEffects();
  const parallaxSlow = useParallax(0.3);
  const parallaxFast = useParallax(0.6);

  // Intersection observers for scroll animations
  const { hasIntersected: projectsVisible } = useIntersectionObserver(projectsRef);
  const { hasIntersected: achievementsVisible } = useIntersectionObserver(achievementsRef);
  const { hasIntersected: socialVisible } = useIntersectionObserver(socialRef);
const { hasIntersected: contactVisible } = useIntersectionObserver(whatsappRef);
  const sections = ['Hero', 'Projects', 'Achievements', 'Contact', 'Social'];

  const handleEnquireNow = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (index: number) => {
    const refs = [heroRef, projectsRef, achievementsRef, whatsappRef, socialRef];
    const targetRef = refs[index];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop",
      title: "Crafting Timeless Homes with Ayra Nirma",
      subtitle: "Lakshmi Castle - Where Dreams Meet Reality",
      description: "Experience Vastu-compliant luxury living with panoramic views and premium amenities",
      highlight: "10,000 sq ft of Pure Elegance"
    },
    {
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop",
      title: "Vastu-Compliant Premium Living",
      subtitle: "Designed for Prosperity & Peace",
      description: "Airy windows, abundant sunlight, and harmonious layouts following ancient Vastu principles",
      highlight: "100% Vastu Certified"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop",
      title: "Luxury Redefined in Vizag",
      subtitle: "VIP Road's Most Prestigious Address",
      description: "Premium amenities, world-class architecture, and unparalleled lifestyle experiences",
      highlight: "Launching Soon"
    }
  ];

  const latestProjects = [
    {
      id: 1,
      name: "Lakshmi Castle",
      location: "VIP Road, Visakhapatnam",
      area: "10,000 sq ft",
      type: "Luxury Villas",
      price: "₹1.9 Cr onwards",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      features: ["Vastu Compliant", "Premium Finishes", "Gym & Pool", "24/7 Security"],
      status: "Launching Soon",
      description: "Experience luxury living with Vastu-compliant design, airy windows, and abundant sunlight in every corner.",
      detailedInfo: {
        bedrooms: "4-5 BHK",
        amenities: ["Swimming Pool", "Gymnasium", "Clubhouse", "Children's Play Area", "24/7 Security", "Power Backup"],
        specifications: ["Vitrified Tiles", "Modular Kitchen", "Premium Bathroom Fittings", "Air Conditioning Points"]
      }
    }
  ];

  const achievements = [
    {
      title: "Quality Construction Award – Coming Soon",
      year: "2024",
      description: "Recognition for excellence in construction quality and adherence to Vastu principles in residential projects",
      status: "Upcoming"
    },
    {
      title: "Best Real Estate Developer",
      year: "2023",
      description: "Awarded by Andhra Pradesh Real Estate Association for innovative Vastu-compliant designs and customer satisfaction",
      status: "Achieved"
    },
    {
      title: "Green Building Certification",
      year: "2023",
      description: "IGBC certified for sustainable construction practices and eco-friendly building materials",
      status: "Achieved"
    }
  ];

  const socialPosts = [
    {
      platform: "twitter",
      content: "🏠 Exciting news! Lakshmi Castle construction progress is ahead of schedule. Vastu-compliant luxury homes coming to VIP Road, Vizag! #AyraNirma #LakshmiCastle #VastuHomes",
      timestamp: "2 hours ago",
      likes: 45,
      shares: 12
    },
    {
      platform: "instagram",
      content: "✨ Sneak peek into our premium interior designs. Every corner is crafted with attention to detail and Vastu principles. Abundant natural light and airy windows in every room! #LuxuryLiving #VastuHomes",
      timestamp: "5 hours ago",
      likes: 128,
      shares: 23
    },
    {
      platform: "linkedin",
      content: "We're proud to announce our partnership with leading architects to bring world-class Vastu-compliant designs to Visakhapatnam. Building trust, one home at a time. 🏗️",
      timestamp: "1 day ago",
      likes: 89,
      shares: 34
    },
    {
      platform: "twitter",
      content: "🌱 Sustainability meets tradition! Our projects feature rainwater harvesting, solar panels, and green spaces while maintaining Vastu compliance. #SustainableLiving #VastuCompliant",
      timestamp: "2 days ago",
      likes: 67,
      shares: 18
    },
    {
      platform: "instagram",
      content: "Behind the scenes: Our construction team ensuring every beam and pillar follows Vastu guidelines. Quality and tradition go hand in hand at Ayra Nirma! 🔨",
      timestamp: "3 days ago",
      likes: 94,
      shares: 15
    },
    {
      platform: "linkedin",
      content: "Lakshmi Castle floor plans are now available! Experience spacious layouts designed according to Vastu Shastra for prosperity and positive energy. DM for details 📐",
      timestamp: "4 days ago",
      likes: 156,
      shares: 42
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Parallax effect for scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax-slow');
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.setProperty('--parallax-offset-slow', `${parallaxSlow}px`);
      });

      const fastElements = document.querySelectorAll('.parallax-fast');
      fastElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.setProperty('--parallax-offset-fast', `${parallaxFast}px`);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxSlow, parallaxFast]);

  const handleWhatsAppSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      return; // Basic validation
    }
    
    const whatsappMessage = `Hi! I'm ${name}. Phone: ${phone}. Message: ${message || 'Interested in Lakshmi Castle project'}`;
    const whatsappURL = `https://wa.me/919963379888?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappURL, '_blank');
    setIsWhatsAppOpen(false);
    setName('');
    setPhone('');
    setMessage('');
  };

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'twitter': return <Twitter className="h-4 w-4 text-blue-500" />;
      case 'instagram': return <Instagram className="h-4 w-4 text-pink-500" />;
      case 'linkedin': return <Linkedin className="h-4 w-4 text-blue-600" />;
      default: return <MessageCircle className="h-4 w-4" />;
    }
  };

  const toggleProjectExpansion = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div id="home" className="relative">

      {/* Hero Section */}
      <section 
        ref={heroRef}
        
        className="sticky-section relative overflow-hidden"
      >
        {/* Image Carousel with Parallax */}
        <div className="absolute inset-0 parallax-slow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        

        {/* Hero Content with Enhanced Animations */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className={`transition-all duration-1000 ${isScrolling ? 'parallax-fast' : ''}`}>
                <Badge className="mb-4 bg-[#BF9C63] text-white hover:bg-[#bf9c69] animate-pulse">
                  {slides[currentSlide].highlight}
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-[#aaa8a3] mb-6 font-medium">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button 
                    onClick={handleEnquireNow} 
                    className="bg-[#BF9C63] hover:bg-[#BF9C69] text-white text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  >
                    Get a Quote
                  </Button>
                  
                  <Dialog open={isWhatsAppOpen} onOpenChange={setIsWhatsAppOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-2 border-white text-gray-900 text-lg px-8 py-4 rounded-full backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105"
                      >
                        I'm Interested
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Phone className="h-5 w-5 text-green-600" />
                          Connect with Us
                        </DialogTitle>
                        <DialogDescription>
                          Send us your details and we'll connect with you on WhatsApp
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            placeholder="Enter your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="message">Message (Optional)</Label>
                          <Textarea
                            id="message"
                            placeholder="Any specific requirements or questions?"
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>

                        <Button
                          onClick={handleWhatsAppSubmit}
                          disabled={!name.trim() || !phone.trim()}
                          className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Send WhatsApp Message
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Project Highlights */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:bg-white/15">
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Building className="h-6 w-6" />
                    Project Highlights
                  </h3>
                  <div className="bg-white/20 rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                    <h4 className="font-semibold text-white mb-2">Lakshmi Castle</h4>
                    <p className="text-gray-200 text-sm">10,000 sq ft luxury villas with Vastu compliance and airy windows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>

      
    </div>
  );
};

export default HeroSection;