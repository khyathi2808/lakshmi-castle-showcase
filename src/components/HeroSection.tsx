import { useState, useEffect } from "react";
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
import interiorliving from "@/assets/interior-living.jpg";
import herohero from "@/assets/hero-building-1.jpeg";
import house1 from "@/assets/hero-building-1.jpg";
import house2 from "@/assets/hero-building-2.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleEnquireNow = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const slides = [
    {
      image: house1,
      title: "Crafting Timeless Homes with Ayra Nirma",
      subtitle: "Lakshmi Castle - Where Dreams Meet Reality",
      description: "Experience Vastu-compliant luxury living with panoramic views and premium amenities",
      highlight: "10,000 sq ft of Pure Elegance"
    },
    {
      image: house2,
      title: "Vastu-Compliant Premium Living",
      subtitle: "Designed for Prosperity & Peace",
      description: "Airy windows, abundant sunlight, and harmonious layouts following ancient Vastu principles",
      highlight: "100% Vastu Certified"
    },
    {
      image: interiorliving,
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
      image: herohero,
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
    <div id="home" className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Image Carousel */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
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
          className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="animate-fade-in-up">
                <Badge className="mb-4 bg-amber-600/90 text-white hover:bg-amber-700">
                  {slides[currentSlide].highlight}
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-amber-200 mb-6 font-medium">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button 
                    onClick={handleEnquireNow} 
                    className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Get a Quote
                  </Button>
                  
                  <Dialog open={isWhatsAppOpen} onOpenChange={setIsWhatsAppOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-2 border-white text-white hover:text-gray-900 text-lg px-8 py-4 rounded-full backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
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

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium developments designed with Vastu principles and modern luxury
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {latestProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className={`absolute top-4 left-4 ${
                    project.status === 'Launching Soon' ? 'bg-amber-600' : 'bg-blue-600'
                  }`}>
                    {project.status}
                  </Badge>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                      <p className="text-gray-600 flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-amber-600">{project.price}</p>
                      <p className="text-sm text-gray-500">{project.area}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Expandable Content */}
                  {expandedProject === project.id && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Configuration</h4>
                          <p className="text-gray-600">{project.detailedInfo.bedrooms}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Specifications</h4>
                          <ul className="text-gray-600 text-sm space-y-1">
                            {project.detailedInfo.specifications.slice(0, 2).map((spec, index) => (
                              <li key={index}>• {spec}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Premium Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.detailedInfo.amenities.map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => toggleProjectExpansion(project.id)}
                      className="flex-1 bg-amber-600 hover:bg-amber-700"
                    >
                      {expandedProject === project.id ? 'Show Less' : 'View Details'}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Schedule Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating milestones and awards that reflect our commitment to excellence
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {achievements.map((achievement, index) => (
              <AccordionItem 
                key={index} 
                value={`achievement-${index}`} 
                className="bg-white rounded-lg border shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                      <Award className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-gray-500">{achievement.year}</span>
                        <Badge variant={achievement.status === 'Achieved' ? 'default' : 'secondary'}>
                          {achievement.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-600 ml-16">{achievement.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* WhatsApp Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Connect with our experts on WhatsApp for personalized assistance and instant responses
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919963379888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
            >
              <Phone className="h-6 w-6" />
              Chat on WhatsApp
              <Badge className="bg-green-100 text-green-800 ml-2">
                +91-99633 79888
              </Badge>
            </a>
            
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full text-lg transition-all duration-300"
              onClick={() => setIsWhatsAppOpen(true)}
            >
              Send Details
            </Button>
          </div>
          
          <p className="text-green-100 text-sm mt-6">
            Available 24/7 • Response within 5 minutes • Expert Guidance
          </p>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-600">
              Follow our journey and latest updates across social media
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-3">
                <div className="bg-blue-500 p-2 rounded-full">
                  <Twitter className="h-5 w-5 text-white" />
                </div>
                <div className="bg-pink-500 p-2 rounded-full">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <div className="bg-blue-600 p-2 rounded-full">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Live Social Feed</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {socialPosts.map((post, index) => (
                <Card key={index} className="border-l-4 border-l-amber-600 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {getPlatformIcon(post.platform)}
                      <span className="text-sm text-gray-500 capitalize font-medium">{post.platform}</span>
                      <span className="text-sm text-gray-400 ml-auto">{post.timestamp}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {post.shares}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4">Follow us for more updates!</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  <Twitter className="h-4 w-4 mr-2" />
                  Follow on Twitter
                </Button>
                <Button variant="outline" size="sm" className="text-pink-500 border-pink-500 hover:bg-pink-50">
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow on Instagram
                </Button>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Follow on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;