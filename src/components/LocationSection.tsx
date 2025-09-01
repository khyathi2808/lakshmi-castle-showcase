import { MapPin, Clock, Car, GraduationCap, Hospital, ShoppingBag, Building2, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const nearbyLandmarks = [
    {
      icon: ShoppingBag,
      name: "Vizag Central Mall",
      distance: "2 minutes",
      type: "Shopping",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Car,
      name: "RTC Complex",
      distance: "5 minutes",
      type: "Transportation",
      color: "from-secondary to-secondary-glow"
    },
    {
      icon: GraduationCap,
      name: "Educational Institutions",
      distance: "3-8 minutes",
      type: "Education",
      color: "from-accent to-accent-soft"
    },
    {
      icon: Hospital,
      name: "Healthcare Facilities",
      distance: "5-10 minutes",
      type: "Healthcare",
      color: "from-luxury-pink to-pink-300"
    },
    {
      icon: Building2,
      name: "IT Corridor",
      distance: "15 minutes",
      type: "Business",
      color: "from-emerald-500 to-teal-400"
    },
    {
      icon: Plane,
      name: "Airport & Railway",
      distance: "20-25 minutes",
      type: "Transportation",
      color: "from-blue-500 to-cyan-400"
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

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
                className="btn-premium flex-1"
                aria-label="View location on Google Maps"
              >
                <MapPin className="w-5 h-5 mr-2" />
                View on Google Maps
              </Button>
              <Button
                onClick={handleGetDirections}
                variant="outline"
                className="btn-outline-luxury flex-1"
                aria-label="Get directions to location"
              >
                Get Directions
              </Button>
            </div>

            {/* Address Card */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Project Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Lakshmi Castle</strong><br />
                  VIP Road<br />
                  Visakhapatnam, Andhra Pradesh<br />
                  PIN: 530024
                </p>
              </CardContent>
            </Card>
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center shadow-lg">
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-secondary to-secondary-glow flex items-center justify-center shadow-lg">
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent to-accent-soft flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Business District</h4>
              <p className="text-sm text-muted-foreground">
                Close proximity to IT corridors and major business establishments
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary to-primary-glow text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Experience the Location Advantage
              </h3>
              <p className="text-lg text-gray-200 mb-6">
                Visit Lakshmi Castle and discover how our prime location enhances your lifestyle with convenience and connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="btn-gold px-8 py-3 text-lg"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Schedule site visit"
                >
                  Schedule Site Visit
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
                  onClick={handleViewOnMaps}
                  aria-label="Explore on map"
                >
                  Explore on Map
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;