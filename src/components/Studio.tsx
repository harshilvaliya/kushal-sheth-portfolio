import type React from "react";
import StudioHeader from "./studio/StudioHeader";
import HeroSection from "./studio/HeroSection";
import AboutSection from "./studio/AboutSection";
import FounderSection from "./studio/FounderSection";
import ServicesSection from "./studio/ServicesSection";
import ContactSection from "./studio/ContactSection";

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
