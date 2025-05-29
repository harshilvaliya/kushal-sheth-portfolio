import type React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";

const AboutSection: React.FC = () => {
  return (
    <motion.section
      className="py-12 bg-gray-900 md:py-16 lg:py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-8 text-2xl font-bold text-center text-white md:text-3xl md:mb-12">
          Red <span className="text-rnb-red">&</span> Black{" "}
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
  );
};

export default AboutSection; 