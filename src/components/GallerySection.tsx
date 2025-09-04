import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import heroBuilding1 from "@/assets/hero-building-1.jpg";
import heroBuilding2 from "@/assets/hero-building-2.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import floorPlanPink from "@/assets/floor-plan-pink.jpg";

const GallerySection = () => {
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
    
    {
      id: 5,
      src: heroBuilding1,
      title: "Entrance Lobby",
      category: "interior",
      description: "Premium entrance lobby with modern fittings and marble flooring"
    },
    {
      id: 6,
      src: heroBuilding2,
      title: "Amenities Area",
      category: "amenities",
      description: "Common amenities including landscaped gardens and recreational facilities"
    }
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

  return (
    <section id="gallery" className="py-20 bg-background">
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
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Button
                    className="group-hover:opacity-100 btn-hero transform scale-100 group-hover:scale-105 transition-all duration-300"
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
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Arrows */}
                {filteredImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </Button>
                  </>
                )}

                {/* Download Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-16 z-50 text-white hover:bg-white/20"
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
  );
};

export default GallerySection;