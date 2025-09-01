import { Building2, Users, Award, Clock, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
      color: "from-secondary to-secondary-glow"
    },
    {
      icon: Award,
      title: "Quality Construction",
      description: "Known for superior build quality and timely delivery",
      color: "from-accent to-accent-soft"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to project completion within schedule",
      color: "from-luxury-pink to-pink-300"
    }
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
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Lakshmi Castle
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A premium residential project by Arya Nirman Pvt. Ltd., strategically located on VIP Road, 
            offering luxury 3BHK apartments with world-class amenities and unmatched connectivity.
          </p>
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
                className="btn-premium w-full"
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
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              About Arya Nirman Pvt. Ltd.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A trusted name in Visakhapatnam's real estate, committed to delivering quality homes with excellence and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {developerHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="card-luxury text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Developer Contact Card */}
          <Card className="card-premium">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Developer Contact</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-foreground">Arya Nirman Pvt. Ltd.</h5>
                      <p className="text-muted-foreground text-sm">
                        Flat No. 403, Hema Heritage Apartments<br />
                        D.No. 7-18-16, Plot No. 46<br />
                        Kirlampudi Layout, Visakhapatnam – 530024
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-primary mr-2" />
                      <span className="text-muted-foreground">99633 79888</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Project Architect</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-foreground">K. Uday Sankar</h5>
                      <p className="text-muted-foreground text-sm">
                        Experienced architect specializing in residential design with 15+ years in the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="btn-premium flex-1">
                      Learn More About Arya Nirman
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Arya Nirman Pvt. Ltd. - Company Profile</DialogTitle>
                    </DialogHeader>
                    <div className="p-4 space-y-4">
                      <p className="text-muted-foreground">
                        Arya Nirman Pvt. Ltd., based in Visakhapatnam, has 10+ years of experience in developing 
                        premium residential projects. The company is known for its commitment to quality construction, 
                        timely delivery, and customer satisfaction.
                      </p>
                      <p className="text-muted-foreground">
                        With a portfolio of successful projects across Visakhapatnam, Arya Nirman has earned the 
                        trust of over 500 families by delivering homes that combine modern amenities with traditional values.
                      </p>
                      <div className="bg-muted p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Our Commitment:</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Quality construction with premium materials</li>
                          <li>• Timely project completion</li>
                          <li>• Transparent pricing and documentation</li>
                          <li>• After-sales support and maintenance</li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button
                  variant="outline"
                  className="btn-outline-luxury flex-1"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Contact developer"
                >
                  Contact Developer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;