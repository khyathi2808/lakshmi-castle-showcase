import React, { useState, useEffect, useRef } from 'react';
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
  Crown
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import "./prohight.css";
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
}

interface Amenity {
  icon: React.ElementType;
  name: string;
  description: string;
  image: string;
}

interface InteriorPackage {
  name: string;
  price: string;
  features: string[];
  image: string;
  popular?: boolean;
}

interface EcoMeasure {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  impact: string;
  progress: number;
}

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const [currentEcoSlide, setCurrentEcoSlide] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Projects Data
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
      launchYear: '2025'
    },
    {
      id: 'future-residences',
      name: 'Future Residences',
      description: 'Upcoming luxury developments in prime Vizag locations',
      area: 'TBA',
      status: 'upcoming',
      features: ['Coming Soon', 'Premium Location', 'Modern Design'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      location: 'Vizag'
    },
    {
      id: 'coastal-villa',
      name: 'Coastal Villa',
      description: 'Completed luxury beachfront residences with exceptional quality',
      area: '8,500 sq ft',
      status: 'completed',
      features: ['Completed 2022', '25 Units', '100% Satisfaction'],
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop',
      location: 'Beach Road, Vizag',
      launchYear: '2020'
    }
  ];

  // Amenities Data
  const amenities: Amenity[] = [
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
      description: 'Premium clubhouse for social gatherings',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop'
    },
    {
      icon: Trees,
      name: 'Landscaped Gardens',
      description: 'Beautiful green spaces and walking paths',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop'
    },
    {
      icon: Car,
      name: 'Covered Parking',
      description: 'Secure covered parking for residents',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      icon: Users,
      name: 'Community Hall',
      description: 'Multi-purpose hall for events and gatherings',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop'
    }
  ];

  // Interior Packages Data
  const interiorPackages: InteriorPackage[] = [
    {
      name: 'Luxury Package',
      price: '₹50,00,000',
      features: [
        'Premium Italian marble flooring',
        'Designer LED lighting systems',
        'Modular kitchen with premium appliances',
        'Premium bathroom fittings',
        'Walk-in wardrobes with mirrors',
        'Home automation system',
        '5-year warranty'
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
      popular: true
    },
    {
      name: 'Standard Package',
      price: '₹35,00,000',
      features: [
        'Vitrified tiles flooring',
        'Standard LED lighting',
        'Basic modular kitchen',
        'Standard bathroom fittings',
        'Built-in storage solutions',
        'Basic electrical fittings',
        '3-year warranty'
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop'
    }
  ];

  // Eco Measures Data
  const ecoMeasures: EcoMeasure[] = [
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
    },
    {
      title: 'Green Landscaping',
      description: 'Native tree plantation and organic gardening',
      beforeImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
      impact: '100+ native trees planted',
      progress: 85
    }
  ];

  // 3D Tour mockup data
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
    },
    {
      title: 'Virtual Kitchen Tour',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
      type: 'Virtual'
    },
    {
      title: '360° Bathroom',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=400&fit=crop',
      type: '360°'
    }
  ];

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

  // Eco measures slider auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEcoSlide((prev) => (prev + 1) % ecoMeasures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ecoMeasures.length]);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const renderProjectCard = (project: Project) => (
    <Card key={project.id} className="overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={project.status === 'ongoing' ? 'default' : project.status === 'completed' ? 'secondary' : 'outline'}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </Badge>
        </div>
        {project.status === 'ongoing' && (
          <div className="absolute top-4 right-4">
            <Badge variant="destructive" className="animate-pulse">
              Live
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-2xl">{project.name}</CardTitle>
          <div className="text-lg font-bold text-blue-600">{project.area}</div>
        </div>
        
        <CardDescription className="text-gray-600 mb-4">
          {project.description}
        </CardDescription>
        
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{project.location}</span>
          {project.launchYear && (
            <>
              <Calendar className="w-4 h-4 ml-2" />
              <span>Launched {project.launchYear}</span>
            </>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.features.map((feature, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1" variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
          {project.status === 'ongoing' && (
            
            <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-primary w-full justify-start"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://whatsapp-image-2025-08-29-at-11-50-54-pm-1.tiiny.site/';
                    link.download = 'Lakshmi-Castle-Brochure.pdf';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  aria-label="Download project brochure"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Brochure
                </Button>
          )}
          {project.status === 'completed' && (
            <Button className="flex-1">
              <Phone className="w-4 h-4 mr-2" />
              Enquire Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
     <div  className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Lakshmi Castle */}
      

      {/* Projects Tabs Section */}
      <section 
        id="projects" 
        ref={setSectionRef('projects')} 
        className={`sticky-section py-20 transition-all duration-800 ${
          visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of premium residential projects across Visakhapatnam
            </p>
          </div>
          
          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-14">
              <TabsTrigger value="ongoing" className="text-lg py-4">
                Ongoing Projects
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="text-lg py-4">
                Upcoming Projects
              </TabsTrigger>
              <TabsTrigger value="completed" className="text-lg py-4">
                Completed Projects
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ongoing">
              <div className="grid grid-cols-1 gap-8">
                {projects.filter(p => p.status === 'ongoing').map(renderProjectCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 gap-8">
                {projects.filter(p => p.status === 'upcoming').map(renderProjectCard)}
                
              </div>
            </TabsContent>
            
            <TabsContent value="completed">
              <div className="grid grid-cols-1 gap-8">
                {projects.filter(p => p.status === 'completed').map(renderProjectCard)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>


      {/* 3D Modeling / 360° Views Section */}
      <section 
        id="3d-tours" 
        ref={setSectionRef('3d-tours')} 
        className={`sticky-section py-20 bg-gray-50 transition-all duration-800 ${
          visibleSections.has('3d-tours') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
              3D Tours & 360° Views
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our properties virtually with immersive 3D tours and 360-degree views
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourImages.map((tour, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transform hover:scale-105 transition-all duration-500">
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                      <Play className="w-6 h-6 mr-2" />
                      View {tour.type}
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600">
                      {tour.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{tour.title}</h3>
                  <Button variant="outline" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    Take Tour
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-amber-400 to-amber-700 hover:from-blue-700 hover:to-purple-700">
              <Camera className="w-5 h-5 mr-2" />
              View All Virtual Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section 
        id="amenities" 
        ref={setSectionRef('amenities')} 
        className={`section-stack py-20 transition-all duration-800 ${
          visibleSections.has('amenities') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
              World-Class Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience luxury living with our comprehensive range of premium amenities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <Card 
                key={index}
                className="overflow-hidden group hover:shadow-xl transform hover:scale-105 transition-all duration-500"
              >
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{amenity.name}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Packages Section */}
      <section 
        id="interior-packages" 
        ref={setSectionRef('interior-packages')} 
        className={` py-20 sticky-section bg-gray-50 transition-all duration-800 ${
          visibleSections.has('interior-packages') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
              Interior Packages & Partner Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our curated interior packages designed to suit every lifestyle
            </p>
          </div>
          
          <Tabs defaultValue="luxury" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-14">
              <TabsTrigger value="luxury" className="text-lg py-4">
                Luxury Package
              </TabsTrigger>
              <TabsTrigger value="standard" className="text-lg py-4">
                Standard Package
              </TabsTrigger>
            </TabsList>
            
            {interiorPackages.map((pkg, index) => (
              <TabsContent key={index} value={index === 0 ? 'luxury' : 'standard'}>
                <Card className="overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover min-h-96"
                      />
                      {pkg.popular && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
                            <Crown className="w-4 h-4 mr-1" />
                            Most Popular
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-3xl font-bold">{pkg.name}</h3>
                        <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <Button className="flex-1 bg-gradient-to-r from-amber-400 to-amber-700 hover:from-blue-700 hover:to-purple-700">
                          Choose Package
                        </Button>
                        <Button variant="outline" className="flex-1">
                          View Samples
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Before/After Eco Measures Slider */}
      <section 
        id="eco-measures" 
        ref={setSectionRef('eco-measures')} 
        className={`py-20 sticky-section transition-all duration-800 ${
          visibleSections.has('eco-measures') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
              Eco-Friendly Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to sustainable and eco-friendly living practices
            </p>
          </div>

          {/* Eco Measures Slider */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={ecoMeasures[currentEcoSlide].beforeImage}
                    alt="Before"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={ecoMeasures[currentEcoSlide].afterImage}
                    alt="After"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                    After
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {ecoMeasures[currentEcoSlide].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {ecoMeasures[currentEcoSlide].description}
                </p>
                <div className="mb-4">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-3 bg-gradient-to-r from-amber-400 to-amber-700"
                      style={{ width: `${ecoMeasures[currentEcoSlide].progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {ecoMeasures[currentEcoSlide].impact}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentEcoSlide(
                        (currentEcoSlide - 1 + ecoMeasures.length) % ecoMeasures.length
                      )
                    }
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" /> Prev
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentEcoSlide((currentEcoSlide + 1) % ecoMeasures.length)
                    }
                  >
                    Next <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      
    </div>
  );
};

export default Projects;
