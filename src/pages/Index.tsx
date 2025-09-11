import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import AboutSection from "@/components/AboutSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Testimonials from "@/components/testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectHighlights />
      <AboutSection />
      <FloorPlansSection />
      
      <GallerySection />
      <LocationSection />
      
      <SpecificationsSection />
      <Testimonials/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
