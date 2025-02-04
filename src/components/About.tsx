import type React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
          <motion.p variants={fadeIn}>
            I'm Kushal Sheth, a B2B growth specialist focused on helping
            companies achieve sustainable growth through strategic digital
            marketing and sales initiatives.
          </motion.p>
          <motion.p variants={fadeIn}>
            My approach combines data-driven insights with creative strategies
            to develop and execute campaigns that generate leads, increase
            conversions, and maximize ROI.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
