import type React from "react";
import { motion } from "framer-motion";
import { MdMovie, MdBrush, MdVideocam } from "react-icons/md";
import { FaFilm } from "react-icons/fa";
import { fadeIn, staggerContainer } from "../../utils/animations";
import type { ServiceItem } from "../../types/index";

const studioServices: ServiceItem[] = [
  {
    icon: MdMovie,
    title: "Short Films",
    description:
      "Creating compelling short films that tell powerful stories and showcase creative excellence in filmmaking.",
  },
  {
    icon: FaFilm,
    title: "Feature Films",
    description:
      "Producing high-quality feature films with strong narratives, exceptional cinematography, and professional direction.",
  },
  {
    icon: MdBrush,
    title: "Creative Direction",
    description:
      "Expert creative direction that brings your vision to life, from concept development to final execution.",
  },
  {
    icon: MdVideocam,
    title: "Content Production",
    description:
      "Professional video production services for commercials, music videos, and digital content that captivates audiences.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      id="studio-services"
      className="py-12 bg-black md:py-16 lg:py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container px-4 mx-auto md:px-6">
        <motion.h2
          variants={fadeIn}
          className="mb-8 text-2xl font-bold text-center text-white md:text-3xl md:mb-12"
        >
          Our <span className="text-rnb-red">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 sm:gap-6 md:gap-8">
          {studioServices.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="p-5 bg-gray-900 rounded-lg border border-rnb-red/20 md:p-8"
            >
              <item.icon className="mb-3 w-10 h-10 text-rnb-red md:w-12 md:h-12 md:mb-4" />
              <h3 className="mb-2 text-lg font-semibold text-white md:text-xl md:mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection; 