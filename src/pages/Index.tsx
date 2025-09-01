import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import AboutSection from "@/components/AboutSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectHighlights />
      <AboutSection />
      <FloorPlansSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
