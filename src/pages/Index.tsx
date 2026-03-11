import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import MentorshipSection from "@/components/sections/MentorshipSection";
import InsightsSection from "@/components/sections/InsightsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <MentorshipSection />
    <InsightsSection />
    <TechStackSection />
    <CTASection />
    <ContactSection />
    <FooterSection />
  </div>
);

export default Index;
