import type React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";
import KushalShethImg from "../assets/kushal-sheth-img.jpg";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Driving B2B Growth Through Strategic Digital Marketing
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              Helping businesses achieve sustainable growth through data-driven
              marketing strategies and targeted outreach.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Let's Connect
              <MdOutlineArrowForward className="w-5 h-5 ml-2" />
            </motion.a>
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
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
