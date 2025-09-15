import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Hospital, ShoppingBag, Building2, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./prohight.css";
import { ZoomIn} from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import heroBuilding1 from "@/assets/hero-building-1.jpeg";
import heroBuilding2 from "@/assets/hero-building-2.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import floorPlanPink from "@/assets/floor-plan-pink.jpg";
import "./prohight.css";
import { 
  Play, 
  MapPin, 
  Calendar, 
  Award, 
  Leaf, 
  Users, 
  Home, 
  Camera, 
  ChevronLeft, 
  ChevronRight,
  Car,
  Dumbbell,
  Waves,
  Trees,
  Building,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Download,
  Eye,
  Zap,
  Shield,
  Crown,
  Wifi,
  Lock,
  Video,
  Navigation,
  IndianRupee,
  Map,
  TrendingUp,
  Hammer,
  Sparkles,
  PlayCircle,
  Maximize2,
  Bell,
  Menu,
  X,
  ChevronDown,
  Send,
  Clock,
  Target,
  Heart,
  Search,
  ChevronUp
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  area: string;
  status: 'ongoing' | 'upcoming' | 'completed';
  features: string[];
  image: string;
  gallery?: string[];
  location: string;
  launchYear?: string;
  connectivity?: {
    nearbyPlaces: Array<{
      name: string;
      distance: string;
      type: 'school' | 'hospital' | 'mall' | 'airport' | 'railway' | 'bus';
    }>;
    roadAccess: string[];
  };
  craftsmanship?: {
    materials: string[];
    techniques: string[];
    quality: string;
  };
  security?: {
    features: string[];
    rating: number;
  };
  pricing?: {
    priceRange: string;
    bookingAmount: string;
    emi: string;
  };
  videos?: Array<{
    title: string;
    thumbnail: string;
    duration: string;
    type: 'walkthrough' | 'construction' | 'amenities' | 'testimonial';
  }>;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const Projects: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState('lakshmi-castle');
  const [activeTab, setActiveTab] = useState('overview');
  const [currentEcoSlide, setCurrentEcoSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Hero slider images
  const heroImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&h=1080&fit=crop'
  ];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  const galleryImages = [
    {
      id: 1,
      src: heroBuilding1,
      title: "Building Exterior - Front View",
      category: "exterior",
      description: "Modern architectural design with premium glass facades and landscaped entrance"
    },
    {
      id: 2,
      src: heroBuilding2,
      title: "Residential Complex Overview",
      category: "exterior", 
      description: "Complete residential complex with amenities and green spaces"
    },
    {
      id: 3,
      src: interiorLiving,
      title: "3BHK Living Room",
      category: "interior",
      description: "Spacious living area with modern furniture and elegant interiors"
    },
    
    
  ];

  const categories = [
    { id: "all", name: "All Images", count: galleryImages.length },
    { id: "exterior", name: "Exterior Views", count: galleryImages.filter(img => img.category === "exterior").length },
    { id: "interior", name: "Interior Design", count: galleryImages.filter(img => img.category === "interior").length },
    
    { id: "amenities", name: "Amenities", count: galleryImages.filter(img => img.category === "amenities").length }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    const imageIndex = filteredImages.findIndex(img => img.id === imageId);
    setSelectedImage(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleDownloadImage = () => {
    if (selectedImage !== null) {
      const currentImage = filteredImages[selectedImage];
      toast({
        title: "Download Started",
        description: `Downloading ${currentImage.title}...`,
      });
      // Simulate download
      const link = document.createElement('a');
      link.href = currentImage.src;
      link.download = `lakshmi-castle-${currentImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  // Projects data
  const projects: Project[] = [
    {
      id: 'lakshmi-castle',
      name: 'Lakshmi Castle',
      description: 'Premium luxury residences with Vastu-compliant design and world-class amenities',
      area: '10,000 sq ft',
      status: 'ongoing',
      features: ['Vastu-Compliant', 'Premium Amenities', 'Prime Location', 'Luxury Living'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop'
      ],
      location: 'VIP Road, Visakhapatnam',
      launchYear: '2025',
      coordinates: { lat: 17.7231, lng: 83.3012 },
      connectivity: {
        nearbyPlaces: [
          { name: 'Visakhapatnam Airport', distance: '8 km', type: 'airport' },
          { name: 'Central Railway Station', distance: '12 km', type: 'railway' },
          { name: 'CMR Central Mall', distance: '3 km', type: 'mall' },
          { name: 'KIMS Hospital', distance: '2 km', type: 'hospital' },
          { name: 'Delhi Public School', distance: '1.5 km', type: 'school' },
          { name: 'RTC Bus Complex', distance: '4 km', type: 'bus' }
        ],
        roadAccess: ['NH16 - 2 km', '4-Lane Road Access', 'Metro Connectivity (Planned)']
      },
      craftsmanship: {
        materials: ['Premium Italian Marble', 'Imported Tiles', 'Teak Wood Doors', 'German Fittings'],
        techniques: ['Earthquake Resistant Design', 'Thermal Insulation', 'Waterproofing', 'Advanced Concrete Technology'],
        quality: 'Premium Grade A+ Construction with 10-year structural warranty'
      },
      security: {
        features: ['24/7 CCTV Surveillance', '3-Tier Security', 'Biometric Access', 'Video Door Phones', 'Security Guards', 'Emergency Response System'],
        rating: 5
      },
      pricing: {
        priceRange: '₹85 L - ₹2.5 Cr',
        bookingAmount: '₹2,00,000',
        emi: 'Starting ₹45,000/month'
      },
      videos: [
        {
          title: 'Lakshmi Castle Walkthrough',
          thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
          duration: '5:32',
          type: 'walkthrough'
        },
        {
          title: 'Construction Progress',
          thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop',
          duration: '3:45',
          type: 'construction'
        }
      ]
    },
    {
      id: 'coastal-heights',
      name: 'Coastal Heights',
      description: 'Luxurious beachfront apartments with panoramic sea views',
      area: '12,500 sq ft',
      status: 'upcoming',
      features: ['Sea View', 'Beach Access', 'Modern Design', 'Eco-Friendly'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      location: 'Beach Road, Vizag',
      launchYear: '2026',
      coordinates: { lat: 17.7069, lng: 83.3249 }
    },
    {
      id: 'garden-valley',
      name: 'Garden Valley',
      description: 'Completed luxury residential complex with lush green landscapes',
      area: '8,500 sq ft',
      status: 'completed',
      features: ['Completed 2022', '150 Units', '100% Satisfaction', 'Green Living'],
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop',
      location: 'Madhurawada, Vizag',
      launchYear: '2020',
      coordinates: { lat: 17.7644, lng: 83.3782 }
    }
  ];
  const nearbyLandmarks = [
    {
      icon: ShoppingBag,
      name: "Vizag Central Mall",
      distance: "2 minutes",
      type: "Shopping",
      color: "from-amber-400 to-amber-700"
    },
    {
      icon: Car,
      name: "RTC Complex",
      distance: "5 minutes",
      type: "Transportation",
      color: "from-amber-400 to-amber-700"
    },
    {
      icon: GraduationCap,
      name: "Educational Institutions",
      distance: "3-8 minutes",
      type: "Education",
      color: "from-amber-400 to-amber-700"
    },
    {
      icon: Hospital,
      name: "Healthcare Facilities",
      distance: "5-10 minutes",
      type: "Healthcare",
      color: "from-amber-400 to-amber-700"
    },
    {
      icon: Building2,
      name: "IT Corridor",
      distance: "15 minutes",
      type: "Business",
      color: "from-amber-400 to-amber-700"
    },
    {
      icon: Plane,
      name: "Airport & Railway",
      distance: "20-25 minutes",
      type: "Transportation",
      color: "from-amber-400 to-amber-700"
    }
  ];

  const connectivityFeatures = [
    "Direct access to VIP Road - main arterial road",
    "Well-connected to Beach Road and RK Beach",
    "Easy access to Rushikonda and surrounding beaches",
    "Close to Vizag Port and Steel Plant",
    "Near upcoming metro rail connectivity",
    "Excellent public transportation network"
  ];

  const handleViewOnMaps = () => {
    // Coordinates for VIP Road, Visakhapatnam (approximate)
    const lat = 17.7261;
    const lng = 83.3161;
    const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=16&t=m`;
    window.open(mapsUrl, '_blank');
  };

  const handleGetDirections = () => {
    const destination = "VIP Road, Visakhapatnam, Andhra Pradesh";
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(directionsUrl, '_blank');
  };

  // Amenities data
  const amenities = [
    {
      icon: Dumbbell,
      name: 'State-of-the-art Gym',
      description: 'Fully equipped fitness center with modern equipment',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      icon: Waves,
      name: 'Swimming Pool',
      description: 'Olympic-sized pool with kids section',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    },
    {
      icon: Building,
      name: 'Clubhouse',
      description: 'Premium clubhouse with recreational facilities',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop'
    },
    {
      icon: Trees,
      name: 'Landscaped Gardens',
      description: 'Beautiful green spaces and children\'s play area',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop'
    }
  ];

  // Future projects
  const futureProjects = [
    {
      name: 'Lakshmi Heights Phase 2',
      location: 'Gajuwaka, Vizag',
      timeline: 'Q2 2026',
      type: 'Residential Towers',
      status: 'Planning'
    },
    {
      name: 'Commercial Complex',
      location: 'MVP Colony, Vizag',
      timeline: 'Q4 2026',
      type: 'Mixed-Use Development',
      status: 'Approved'
    }
  ];

  // Eco measures
  const ecoMeasures = [
    {
      title: 'Rainwater Harvesting',
      description: 'Complete rainwater collection and recycling system',
      beforeImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      impact: '100% rainwater collection & reuse',
      progress: 90
    },
    {
      title: 'Solar Energy Integration',
      description: 'Renewable energy solutions for sustainable living',
      beforeImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
      impact: '40% solar powered common areas',
      progress: 75
    }
  ];

  // 3D Tours
  const tourImages = [
    {
      title: '360° Living Room',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
      type: '360°'
    },
    {
      title: '3D Master Bedroom',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop',
      type: '3D'
    }
  ];

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'location', label: 'Location' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  // Hero slider auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Eco slider auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEcoSlide((prev) => (prev + 1) % ecoMeasures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ecoMeasures.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject) || projects[0];

  const renderConnectivityIcon = (type: string) => {
    const iconMap = {
      school: Building,
      hospital: Building,
      mall: Building,
      airport: Navigation,
      railway: Navigation,
      bus: Navigation
    };
    const Icon = iconMap[type as keyof typeof iconMap] || MapPin;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      

      {/* Hero Section */}
      <section id="home" className="sticky-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Hero Slider */}
        <div className="relative h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-black px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
                Lakshmi Castle
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Premium luxury residences with world-class amenities in the heart of Visakhapatnam
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-amber-400 to-amber-700 text-white px-8 py-4 rounded-lg text-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Projects
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-black transition-all duration-300">
                <Play className="w-5 h-5 mr-2 inline" />
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={setSectionRef('projects')}
        className={`sticky-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
              Our Premium Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover luxury living with our carefully crafted residential projects featuring world-class amenities and premium locations
            </p>
          </div>

          {/* Project Selection */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-lg shadow-lg p-1">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className={`px-6 py-3 rounded-md transition-all duration-300 ${
                    selectedProject === project.id
                      ? 'bg-gradient-to-r from-amber-400 to-amber-700 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>

          {/* Project Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['overview', 'connectivity', 'amenities', 'craftsmanship', 'security', 'pricing', 'videos', '3d-tours'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-amber-400 to-amber-700 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-gray-800 shadow-md'
                  }`}
                >
                  {tab.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <img
                      src={selectedProjectData.image}
                      alt={selectedProjectData.name}
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{selectedProjectData.name}</h3>
                    <p className="text-gray-600 text-lg mb-6">{selectedProjectData.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-amber-600">{selectedProjectData.area}</div>
                        <div className="text-gray-600">Project Area</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-amber-600">{selectedProjectData.launchYear}</div>
                        <div className="text-gray-600">Launch Year</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProjectData.features.map((feature, idx) => (
                        <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-amber-400 to-amber-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                        Schedule Visit
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Connectivity Tab */}
            {activeTab === 'connectivity' && selectedProjectData.connectivity && (
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-center">Location & Connectivity</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center">
                      <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Interactive Map</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-6">Nearby Places</h4>
                    <div className="space-y-4">
                      {selectedProjectData.connectivity.nearbyPlaces.map((place, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          {renderConnectivityIcon(place.type)}
                          <div className="flex-1">
                            <div className="font-semibold">{place.name}</div>
                            <div className="text-sm text-gray-600">{place.distance}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Amenities Tab */}
            {activeTab === 'amenities' && (
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-center">World-Class Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="group hover:shadow-xl transform hover:scale-105 transition-all duration-500 bg-white rounded-lg overflow-hidden shadow-md">
                      <div className="relative">
                        <img
                          src={amenity.image}
                          alt={amenity.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-4 left-4">
                            <amenity.icon className="w-8 h-8 text-white mb-2" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-2">{amenity.name}</h4>
                        <p className="text-gray-600 text-sm">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Craftsmanship Tab */}
            {activeTab === 'craftsmanship' && selectedProjectData.craftsmanship && (
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-center">Premium Craftsmanship</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                    <Hammer className="w-12 h-12 text-amber-600 mb-4" />
                    <h4 className="text-xl font-bold mb-4">Premium Materials</h4>
                    <ul className="space-y-2">
                      {selectedProjectData.craftsmanship.materials.map((material, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <Zap className="w-12 h-12 text-blue-600 mb-4" />
                    <h4 className="text-xl font-bold mb-4">Advanced Techniques</h4>
                    <ul className="space-y-2">
                      {selectedProjectData.craftsmanship.techniques.map((technique, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">{technique}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <Award className="w-12 h-12 text-green-600 mb-4" />
                    <h4 className="text-xl font-bold mb-4">Quality Assurance</h4>
                    <p className="text-gray-700">{selectedProjectData.craftsmanship.quality}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && selectedProjectData.security && (
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-center">Advanced Security Features</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < selectedProjectData.security!.rating
                                ? 'text-yellow-500 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-lg font-semibold">Security Rating: {selectedProjectData.security.rating}/5</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProjectData.security.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                          <Shield className="w-6 h-6 text-green-600" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
                    <Lock className="w-16 h-16 text-red-600 mb-6 mx-auto" />
                    <h4 className="text-2xl font-bold text-center mb-4">Multi-Layer Security</h4>
                    <p className="text-gray-700 text-center leading-relaxed">
                      Our comprehensive security system ensures the safety and peace of mind for all residents with 
                      round-the-clock surveillance, trained security personnel, and advanced access control systems.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Tab */}
            {activeTab === 'pricing' && selectedProjectData.pricing && (
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-center">Property Rates & Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center">
                    <IndianRupee className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Price Range</h4>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {selectedProjectData.pricing.priceRange}
                    </div>
                    <p className="text-gray-600">Complete Unit Pricing</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                    <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Booking Amount</h4>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {selectedProjectData.pricing.bookingAmount}
                    </div>
                    <p className="text-gray-600">Initial Booking</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg text-center">
                    <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">EMI Options</h4>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {selectedProjectData.pricing.emi}
                    </div>
                    <p className="text-gray-600">Monthly EMI</p>
                  </div>
                </div>
              </div>
            )}

            {/* Videos Tab */}
            {activeTab === 'videos' && selectedProjectData.videos && (
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-center">Property Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedProjectData.videos.map((video, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <PlayCircle className="w-16 h-16 text-white" />
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">{video.title}</h4>
                        <button className="w-full bg-gradient-to-r from-amber-400 to-amber-700 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                          <Play className="w-4 h-4 inline mr-2" />
                          Watch Video
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3D Tours Tab */}
            {activeTab === '3d-tours' && (
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-center">3D Tours & 360° Views</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tourImages.map((tour, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transform hover:scale-105 transition-all duration-500">
                      <div className="relative">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100">
                            <Maximize2 className="w-6 h-6 mr-2 inline" />
                            View {tour.type}
                          </button>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                            {tour.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">{tour.title}</h4>
                        <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                          <Eye className="w-4 h-4 inline mr-2" />
                          Take Tour
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section 
        id="amenities" 
        ref={setSectionRef('amenities')}
        className="sticky-section1 relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
              Premium Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience luxury living with our carefully curated amenities designed for your comfort and convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="group hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <amenity.icon className="w-10 h-10 text-white mb-2" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{amenity.name}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section-stack py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className=" section-stack text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prime Location & Connectivity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically located on VIP Road, Lakshmi Castle offers unparalleled connectivity to all major destinations in Visakhapatnam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map Container */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Project Location</h3>
            
            {/* Embedded Map */}
            <div className="relative rounded-xl overflow-hidden shadow-luxury">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15262.923456789012!2d83.3161!3d17.7261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzM0LjAiTiA4M8KwMTgnNTguMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lakshmi Castle Location Map"
                className="rounded-xl"
              ></iframe>
              
              {/* Map Overlay Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-md">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <div>
                    <h4 className="font-semibold text-sm">Lakshmi Castle</h4>
                    <p className="text-xs text-muted-foreground">VIP Road, Visakhapatnam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleViewOnMaps}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                aria-label="View location on Google Maps"
              >
                <MapPin className="w-5 h-5 mr-2" />
                View on Google Maps
              </Button>
              <Button
                onClick={handleGetDirections}
                variant="outline"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                aria-label="Get directions to location"
              >
                Get Directions
              </Button>
            </div>

            {/* Address Card */}
            
          </div>

          {/* Connectivity Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Nearby Landmarks</h3>
            
            {/* Landmarks Grid */}
            <div className="grid grid-cols-1 gap-4">
              {nearbyLandmarks.map((landmark, index) => {
                const IconComponent = landmark.icon;
                return (
                  <Card key={index} className="card-luxury">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${landmark.color} flex items-center justify-center mr-4 shadow-md`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{landmark.name}</h4>
                          <p className="text-sm text-muted-foreground">{landmark.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-primary">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="font-medium text-sm">{landmark.distance}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Connectivity Features */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Connectivity Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {connectivityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="card-luxury text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Shopping & Entertainment</h4>
              <p className="text-sm text-muted-foreground">
                Walking distance to Vizag Central Mall, restaurants, and entertainment centers
              </p>
            </CardContent>
          </Card>

          <Card className="card-luxury text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Excellent Connectivity</h4>
              <p className="text-sm text-muted-foreground">
                Direct access to major roads and upcoming metro connectivity
              </p>
            </CardContent>
          </Card>

          <Card className="card-luxury text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-700 flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Business District</h4>
              <p className="text-sm text-muted-foreground">
                Close proximity to IT corridors and major business establishments
              </p>
            </CardContent>
          </Card>
        </div>

     
        
      </div>
    </section>

      {/* Gallery Section */}
     <section id="gallery" className="h-screen sticky-section1 py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Image Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore high-resolution images showcasing the architecture, interiors, and amenities of Lakshmi Castle.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`${
                selectedCategory === category.id 
                  ? "btn-hero" 
                  : "btn-outline-luxury"
              } transition-all duration-300`}
              onClick={() => setSelectedCategory(category.id)}
              aria-label={`Filter by ${category.name}`}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <Card key={image.id} className="card-luxury overflow-hidden group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Button
                    className="opacity-100 btn-hero transform scale-105 transition-all duration-300"
                    onClick={() => openLightbox(image.id)}
                    aria-label={`View ${image.title} in lightbox`}
                  >
                    <ZoomIn className="w-5 h-5 mr-2" />
                    View Image
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-6xl p-0 bg-black/95">
            {selectedImage !== null && (
              <div className="relative">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white bg-white/20"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Arrows */}
                {filteredImages.length > 1 && (
                  <>
                    <Button
                    
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white bg-white/20"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </Button>
                    <Button
                      
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white bg-white/20"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </Button>
                  </>
                )}

                {/* Download Button */}
                <Button
                  
                  size="icon"
                  className="absolute top-4 right-16 z-50 text-white bg-white/20"
                  onClick={handleDownloadImage}
                  aria-label="Download current image"
                >
                  <Download className="w-5 h-5" />
                </Button>

                {/* Image */}
                <div className="flex items-center justify-center min-h-[70vh] p-4">
                  <img
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {filteredImages[selectedImage].description}
                  </p>
                  <div className="mt-2 text-xs text-gray-400">
                    {selectedImage + 1} of {filteredImages.length}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-premium max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to See More?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a site visit to experience Lakshmi Castle in person and explore all the premium features and amenities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="btn-hero"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Schedule site visit"
                >
                  Schedule Site Visit
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline-luxury"
                  onClick={() => window.open("tel:+919963379888", "_self")}
                  aria-label="Call for more information"
                >
                  Call for More Info
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

      {/* Future Expansion Section */}
      <section 
        id="future" 
        ref={setSectionRef('future')}
        className={`sticky-section py-20 bg-gray-50 transition-all duration-800 ${
          visibleSections.has('future') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
              Future Expansion Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of our growing community with exciting upcoming projects across Visakhapatnam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureProjects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Sparkles className="w-8 h-8 text-amber-600" />
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.timeline}</span>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">Project Type</div>
                    <div className="font-semibold text-amber-700">{project.type}</div>
                  </div>
                </div>
                <div className="p-6">
                  <button className="w-full bg-gradient-to-r from-amber-400 to-amber-700 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    <Bell className="w-4 h-4 mr-2 inline" />
                    Get Notified
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
     
</div>
  )}
export default Projects;
