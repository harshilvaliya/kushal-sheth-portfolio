import type React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";
import KushalShethImg from "../assets/kushal-sheth-img.webp";

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-12 bg-gradient-to-br from-blue-50 to-white sm:pt-32 sm:pb-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-8 items-center md:gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl">
              Founder & Digital Marketing Strategist
            </h1>
            <p className="mb-6 text-lg text-gray-600 sm:mb-8 sm:text-xl">
              Transforming brands through strategic creativity and data-driven
              solutions. Founder of Red & Black Studio, helping businesses
              establish powerful online presences that drive meaningful
              engagement and measurable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
              >
                Let's Connect
                <MdOutlineArrowForward className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/studio";
                }}
                className="inline-flex items-center px-6 py-3 text-white bg-red-600 rounded-lg transition-colors hover:bg-red-700"
              >
                Red & Black Studio
                <MdOutlineArrowForward className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={KushalShethImg}
              alt="Kushal Sheth"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 rounded-2xl bg-blue-600/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
