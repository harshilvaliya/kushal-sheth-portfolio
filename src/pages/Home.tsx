import type React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import CampaignPerformance from "../components/CampaignPerformance";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <CampaignPerformance />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
