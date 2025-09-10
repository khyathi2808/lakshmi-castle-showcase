import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LatestProjects from "@/components/LatestProjects";
import Achievements from "@/components/Achievements";
import QuickLinks from "@/components/QuickLinks";
import AboutSection from "@/components/AboutSection";
import ProcessCraftsmanship from "@/components/ProcessCraftsmanship";
import ProjectHighlights from "@/components/ProjectHighlights";
import ForHomeowners from "@/components/ForHomeowners";
import ForInvestors from "@/components/ForInvestors";
import Resources from "@/components/Resources";
import FloorPlansSection from "@/components/FloorPlansSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import Testimonials from "@/components/testimonials";
import MediaEngagement from "@/components/MediaEngagement";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LatestProjects />
      <Achievements />
      <QuickLinks />
      <AboutSection />
      <ProcessCraftsmanship />
      <ProjectHighlights />
      <ForHomeowners />
      <ForInvestors />
      <Resources />
      <FloorPlansSection />
      <SpecificationsSection />
      <GallerySection />
      <LocationSection />
      <Testimonials />
      <MediaEngagement />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
