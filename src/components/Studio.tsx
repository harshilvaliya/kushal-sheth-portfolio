import type React from "react";
import { motion } from "framer-motion";
import {
  MdOutlineArrowForward,
  MdDesignServices,
  MdCampaign,
  MdBrush,
  MdEmail,
} from "react-icons/md";
import { FaPhotoVideo, FaLaptopCode, FaLinkedin } from "react-icons/fa";
import { fadeIn, staggerContainer } from "../utils/animations";
import RnBLogo from "../assets/RnBStudio/RnBLogo.jpg";
import RnBTextLogo from "../assets/RnBStudio/RnBTextLogo.jpg";
import type { ServiceItem } from "../types/index";

const studioServices: ServiceItem[] = [
  {
    icon: MdDesignServices,
    title: "Brand Strategy",
    description:
      "Creating powerful brand identities that connect with your audience and stand out in the market.",
  },
  {
    icon: FaPhotoVideo,
    title: "Content Creation",
    description:
      "Producing high-quality visual content that tells your brand story and engages your audience.",
  },
  {
    icon: MdCampaign,
    title: "Social Media Management",
    description:
      "Strategic social media campaigns that build community and drive meaningful engagement.",
  },
  {
    icon: MdBrush,
    title: "Creative Design",
    description:
      "Eye-catching designs that communicate your brand message effectively across all platforms.",
  },
  {
    icon: FaLaptopCode,
    title: "SEO Optimization",
    description:
      "Improving your online visibility and driving organic traffic through search engine optimization.",
  },
];

const Studio: React.FC<{ onNavigate: (page: string) => void }> = ({
  onNavigate,
}) => {
  return (
    <div className="min-h-screen text-white bg-black">
      {/* Header - Improved for mobile */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 z-50 w-full border-b backdrop-blur-sm border-rnb-red/30 bg-black/90"
      >
        <div className="container px-4 py-3 mx-auto md:px-6 md:py-4">
          <div className="flex justify-between items-center">
            <a href="/">
              <div className="flex items-center space-x-2 md:space-x-4">
                <img
                  src={RnBLogo}
                  alt="Red and Black Studio Logo"
                  className="w-auto h-8 md:h-10"
                />
                <h1 className="text-base font-bold text-rnb-red md:text-xl">
                  Red & Black Studio
                </h1>
              </div>
            </a>
            <div className="flex items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("home")}
                className="px-3 py-1.5 text-sm text-white border border-rnb-red rounded-lg hover:bg-rnb-red/20 transition-colors md:px-4 md:py-2 md:text-base"
              >
                Back to Portfolio
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section - Mobile first approach */}
      <section className="pt-24 pb-10 bg-gradient-to-br from-black to-gray-900 md:pt-28 lg:pt-32 md:pb-12 lg:pb-20">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h1 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl md:mb-4 lg:mb-6">
                Crafting Impactful Brands Through{" "}
                <span className="text-rnb-red">
                  Strategy, Creativity, and Results
                </span>
              </h1>
              <p className="mb-4 text-base text-gray-300 sm:text-lg md:text-xl md:mb-6 lg:mb-8">
                At Red and Black Studios, we don't just build visual identities
                — we create powerful brand experiences that connect, convert,
                and endure.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#studio-services"
                className="inline-flex items-center px-4 py-2 text-sm text-white rounded-lg transition-colors bg-rnb-red hover:bg-red-700 outline outline-2 outline-rnb-red md:px-6 md:py-3 md:text-base"
              >
                Our Services
                <MdOutlineArrowForward className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 md:order-2"
            >
              <img
                src={RnBTextLogo}
                alt="Red N Black Studio"
                loading="lazy"
                className="object-cover w-full rounded-xl shadow-xl md:rounded-2xl"
              />
              <div className="absolute inset-0 rounded-xl bg-rnb-red/10 md:rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Studio Section - Improved spacing for mobile */}
      <motion.section
        className="py-12 bg-gray-900 md:py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container px-4 mx-auto md:px-6">
          <h2 className="mb-8 text-2xl font-bold text-center text-white md:text-3xl md:mb-12">
            Red <span className="text-rnb-red">N</span> Black{" "}
            <span className="text-rnb-red">Studio</span>
          </h2>
          <div className="mx-auto space-y-4 max-w-3xl text-base text-gray-300 md:space-y-6 md:text-lg">
            <motion.p variants={fadeIn}>
              Backed by strong digital marketing expertise, we offer a full
              spectrum of services including content creation, brand strategy,
              social media management, SEO, and performance marketing.
            </motion.p>
            <motion.p variants={fadeIn}>
              Whether you're a startup looking to make a bold first impression
              or an established brand aiming to scale online, our approach
              blends artistic vision with data-driven tactics to drive
              measurable growth.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Section - Mobile optimized grid */}
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-8">
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

      {/* Contact Section - Better mobile spacing */}
      <motion.footer
        className="py-12 text-white bg-gray-900 border-t border-rnb-red/20 md:py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn}
            className="mb-4 text-xl font-bold md:text-2xl md:mb-6"
          >
            Ready to <span className="text-rnb-red">Transform</span> Your Brand?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="mx-auto mb-6 max-w-2xl text-sm text-gray-400 md:text-base md:mb-8"
          >
            Let's discuss how Red & Black Studio can help elevate your brand
            through strategic design and digital marketing excellence.
          </motion.p>
          <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:redandblackofficial18@gmail.com"
              className="inline-flex justify-center items-center px-4 py-2 w-full text-sm text-white rounded-lg transition-colors bg-rnb-red hover:bg-red-700 outline outline-2 outline-rnb-red md:px-6 md:py-3 md:text-base md:w-auto"
            >
              <MdEmail className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Get In Touch
              <MdOutlineArrowForward className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/company/red-n-black123/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm text-white rounded-lg transition-colors bg-[#0077b5] hover:bg-[#0066a1] outline outline-2 outline-[#0077b5] md:px-6 md:py-3 md:text-base w-full md:w-auto justify-center"
            >
              <FaLinkedin className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Connect on LinkedIn
            </motion.a>
          </div>
          <div className="pt-8 mt-12 text-xs text-center text-gray-500 border-t border-gray-800 md:pt-10 md:mt-16 md:text-sm">
            <p className="mb-4">
              &copy; {new Date().getFullYear()} Red & Black Studio. All rights
              reserved.
            </p>
            <div className="flex flex-col justify-center items-center mb-6 space-y-3 md:flex-row md:space-y-0 md:space-x-6 md:mb-8">
              <a
                href="mailto:redandblackofficial18@gmail.com"
                className="flex items-center text-gray-400 transition-colors hover:text-rnb-red"
              >
                <MdEmail className="mr-2 w-3 h-3 md:w-4 md:h-4" />
                redandblackofficial18@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/company/red-n-black123/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors flex items-center"
              >
                <FaLinkedin className="mr-2 w-3 h-3 md:w-4 md:h-4" />
                LinkedIn
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Under the wings of peace, built by{" "}
              <a
                href="https://www.linkedin.com/in/harshilvaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-[#ff0000] font-medium"
              >
                શાંતિ નિર્માતા (Peacemaker) 🕊️
              </a>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Studio;
