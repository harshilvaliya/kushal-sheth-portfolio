import type React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";
import RnBTextLogo from "../../assets/RnBStudio/RnBTextLogo.jpg";

const HeroSection: React.FC = () => {
  return (
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
  );
};

export default HeroSection; 