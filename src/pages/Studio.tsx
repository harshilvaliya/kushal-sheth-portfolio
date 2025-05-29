import type React from "react";
import StudioHeader from "../components/studio/StudioHeader";
import HeroSection from "../components/studio/HeroSection";
import AboutSection from "../components/studio/AboutSection";
import FounderSection from "../components/studio/FounderSection";
import ServicesSection from "../components/studio/ServicesSection";
import ContactSection from "../components/studio/ContactSection";

const Studio: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-black">
      <StudioHeader />
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Studio;