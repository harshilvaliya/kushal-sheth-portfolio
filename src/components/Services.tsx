import type React from "react";
import { motion } from "framer-motion";
import { MdTrendingUp, MdBarChart, MdCampaign } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { fadeIn, staggerContainer } from "../utils/animations";
import type { ServiceItem } from "../types/index";

const serviceItems: ServiceItem[] = [
  {
    icon: MdTrendingUp,
    title: "Growth Marketing",
    description:
      "Accelerating business growth through innovative strategies, customer acquisition, and retention optimization.",
  },
  {
    icon: MdCampaign,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing solutions including SEO, social media, content marketing, and paid advertising.",
  },
  {
    icon: MdBarChart,
    title: "Performance Marketing",
    description:
      "Data-driven campaigns focused on measurable results and ROI optimization across digital channels.",
  },
  {
    icon: BiTargetLock,
    title: "LinkedIn Sales Navigator",
    description:
      "Leveraging advanced LinkedIn tools for precise B2B prospecting, lead generation, and relationship building.",
  },
  {
    icon: BsBuilding,
    title: "B2B Marketing",
    description:
      "Specialized marketing strategies focused on business-to-business relationships, lead nurturing, and enterprise solutions.",
  },
];

const Services: React.FC = () => {
  return (
    <motion.section
      id="services"
      className="py-20 bg-gray-50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container px-6 mx-auto">
        <motion.h2
          variants={fadeIn}
          className="mb-12 text-3xl font-bold text-center text-gray-900"
        >
          Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-lg shadow-sm"
            >
              <item.icon className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
