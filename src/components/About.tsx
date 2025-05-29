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
        <div className="mx-auto space-y-6 max-w-3xl text-lg text-gray-600">
          <motion.p variants={fadeIn}>
            I'm Kushal Sheth, the founder and creative director of Red & Black
            Studio, a digital marketing powerhouse dedicated to transforming
            brands through strategic creativity and data-driven solutions.
          </motion.p>
          <motion.p variants={fadeIn}>
            With extensive expertise in brand strategy, content creation, and
            performance marketing, I've helped businesses across industries
            establish powerful online presences that drive meaningful engagement
            and measurable growth. My approach seamlessly blends artistic vision
            with analytical precision to deliver campaigns that not only
            captivate audiences but also convert prospects into loyal customers.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
