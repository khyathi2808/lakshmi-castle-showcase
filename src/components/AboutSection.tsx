import { Building2, Users, Award, Clock, MapPin, Phone, Download, Car, ShoppingBag, Heart, Waves, Building, Utensils, CreditCard, Hospital } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Import beach and shopping images
import lawsonsBayImage from "../assets/lawsons-bay-beach.jpg";
import ramakrishnaBeachImage from "../assets/ramakrishna-beach.jpg";
import vizagCentralImage from "../assets/vizag-central.jpg";
import westsideStoreImage from "../assets/westside-store.jpg";
import cmrCentralImage from "../assets/cmr-central.jpg";
import floorPlanPink from "@/assets/floor-plan-pink.jpg";
const AboutSection = () => {
  const developerHighlights = [
    {
      icon: Building2,
      title: "10+ Years Experience",
      description: "Established presence in Visakhapatnam real estate",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Users,
      title: "500+ Happy Families",
      description: "Successfully delivered premium residential projects",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Award,
      title: "Quality Construction",
      description: "Known for superior build quality and timely delivery",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to project completion within schedule",
      color: "from-primary to-primary-glow"
    }
  ];

  const locationConnectivity = [
    { name: "RTC Complex", distance: "2.5 km", icon: Building },
    { name: "Siripuram Junction", distance: "1.8 km", icon: MapPin },
    { name: "VIP Road", distance: "0.5 km", icon: Car },
    { name: "International Airport", distance: "12 km", icon: Building2 }
  ];

  const shoppingDestinations = [
    { name: "Vizag Central", description: "Premium shopping mall", image: vizagCentralImage },
    { name: "Westside", description: "Fashion & lifestyle store", image: westsideStoreImage },
    { name: "CMR Central", description: "Multi-brand retail hub", image: cmrCentralImage }
  ];

  const beachesRecreation = [
    { name: "Ramakrishna Beach", description: "Popular city beach with promenade", image: ramakrishnaBeachImage },
    { name: "Lawson's Bay Beach", description: "Serene beach perfect for relaxation", image: lawsonsBayImage }
  ];

  const urbanAmenities = [
    { icon: CreditCard, title: "Banks & ATMs", description: "Multiple banking options nearby" },
    { icon: Utensils, title: "Restaurants", description: "Fine dining and local cuisine" },
    { icon: ShoppingBag, title: "Supermarkets", description: "Premium grocery and retail stores" },
    { icon: Hospital, title: "Healthcare", description: "Top-rated hospitals and clinics" }
  ];

  const locationAdvantages = [
    "2 minutes from Vizag Central Mall",
    "5 minutes from RTC Complex",
    "Near Educational Institutions",
    "Close to Healthcare Facilities",
    "Easy Access to IT Corridor",
    "Well-connected to Airport & Railway Station"
  ];

  return (
    <section id="properties" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Prestigious Property
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">Lakshmi Castle</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Located on VIP Road, Visakhapatnam, Lakshmi Castle combines prime location, world-class connectivity, 
              shopping, beaches, and cultural hubs. It is designed for modern living with effortless convenience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Prime location on VIP Road</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">World-class connectivity</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Premium shopping nearby</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <Waves className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Close to beaches</p>
              </div>
            </div>
            <Button className="w-full btn-hero">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Location & Connectivity */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Location & Connectivity
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategically positioned for unparalleled connectivity to major landmarks and transportation hubs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationConnectivity.map((location, index) => {
              const IconComponent = location.icon;
              return (
                <Card key={index} className="card-luxury text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {location.name}
                    </h4>
                    <p className="text-xl font-bold text-primary">
                      {location.distance}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Lifestyle & Shopping */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Lifestyle & Shopping
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium shopping destinations and lifestyle experiences at your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shoppingDestinations.map((destination, index) => (
              <Card key={index} className="card-premium overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 relative">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center mb-2">
                        <ShoppingBag className="w-6 h-6 mr-2" />
                        <h4 className="text-xl font-bold">{destination.name}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">{destination.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cultural & Spiritual Hub */}
        <div className="mb-16">
          <Card className="card-luxury bg-gradient-to-r from-accent/10 to-accent-soft/10">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Cultural & Spiritual Hub
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience the rich cultural heritage of Visakhapatnam with easy access to the revered 
                Sri Sampath Vinayaka Temple and other spiritual landmarks that define the city's soul.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Beaches & Recreation */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Beaches & Recreation
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unwind at pristine beaches and recreational parks just minutes from your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beachesRecreation.map((beach, index) => (
              <Card key={index} className="card-luxury overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 relative">
                    <img 
                      src={beach.image} 
                      alt={beach.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center mb-2">
                        <Waves className="w-6 h-6 mr-2" />
                        <h4 className="text-xl font-bold">{beach.name}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground">{beach.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Convenience & Urban Living */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Convenience & Urban Living
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for modern urban living is just a stone's throw away
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {urbanAmenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <Card key={index} className="card-luxury text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {amenity.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Project Overview</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Lakshmi Castle represents the epitome of luxury living in Visakhapatnam. Located on the prestigious 
                VIP Road, this exclusive residential project offers thoughtfully designed 3BHK apartments that blend 
                modern architecture with premium amenities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With two distinct floor plan options - 2040 sq.ft. and 1990 sq.ft. - each apartment is crafted to 
                provide spacious living with optimal natural light and ventilation. The project features premium 
                construction quality with RCC structure, vitrified tiles, and UPVC windows.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Floor Plan Options</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-secondary">3</div>
                  <div className="text-sm text-muted-foreground">BHK Apartments</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Location Advantages</h3>
            <div className="space-y-3">
              {locationAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{advantage}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button
                className="w-full btn-hero"
                onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="View detailed location information"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Explore Location
              </Button>
            </div>
          </div>
        </div>

        {/* Developer Information */}
        
      </div>
    </section>
  );
};

export default AboutSection;