import { useState } from "react";
import { ChevronLeft, ChevronRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import heroBuilding1 from "@/assets/hero-building-1.jpg";
import heroBuilding2 from "@/assets/hero-building-2.jpg";
import interiorLiving from "@/assets/interior-living.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const slides = [
    {
      image: heroBuilding1,
      title: "Ayra Nirman – Luxury Residences for Global Living",
      subtitle: "Designed for Elegance. Built for Life.",
      description: "Premium 3BHK Residences on VIP Road, Visakhapatnam"
    },
    {
      image: heroBuilding2,
      title: "Modern Architecture",
      subtitle: "Contemporary Design Meets Luxury Living",
      description: "Experience the perfect blend of modern amenities and timeless elegance."
    },
    {
      image: interiorLiving,
      title: "Premium Interiors",
      subtitle: "Thoughtfully Designed 3BHK Apartments",
      description: "Spacious layouts with premium finishes and luxury fittings."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleEnquireNow = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = 'https://ayranirman.com/wp-content/uploads/2025/09/Lakshmi-Castle-Ayra-Nirma.pdf';
    link.download = 'Lakshmi-Castle-Brochure.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "Lakshmi Castle brochure is being downloaded...",
    });
  };

  const handleExploreFloorPlans = () => {
    const element = document.querySelector('#floor-plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Lakshmi Castle ${slide.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm text-white hover:bg-background/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm text-white hover:bg-background/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleEnquireNow}
                className="btn-hero text-lg px-8 py-4"
                aria-label="Open enquiry form for Lakshmi Castle"
              >
                Enquire Now
              </Button>
              
              <Button
                onClick={handleExploreFloorPlans}
                variant="outline"
                className="btn-outline-luxury text-lg px-8 py-4 border-white text-primary"
                aria-label="View floor plans section"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Explore Floor Plans
              </Button>
              
              <Button
                onClick={handleDownloadBrochure}
                variant="ghost"
                className="text-white hover:bg-white/10 text-lg px-8 py-4"
                aria-label="Download Lakshmi Castle brochure"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;