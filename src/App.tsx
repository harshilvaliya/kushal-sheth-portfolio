import { useState } from "react";
import type React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CampaignPerformance from "./components/CampaignPerformance";
import Studio from "./components/Studio";
import type { PageType } from "./types/index";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === "studio") {
    return <Studio onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Services />
      <CampaignPerformance />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
