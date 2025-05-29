import type React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";

const FounderSection: React.FC = () => {
  return (
    <motion.section
      className="py-12 bg-black md:py-16 lg:py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <motion.div
            variants={fadeIn}
            className="w-full md:w-1/2"
          >
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Meet Our <span className="text-rnb-red">Founder</span>
            </h2>
            <h3 className="mb-6 text-xl font-semibold text-rnb-red">
              Kushal Sheth
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                A visionary filmmaker and creative director, Kushal Sheth founded Red & Black Studio with a passion for storytelling and artistic excellence. With a unique perspective that blends traditional storytelling with modern filmmaking techniques, he leads the studio in creating compelling narratives that resonate with audiences.
              </p>
              <p>
                His creative direction has been instrumental in shaping the studio's distinctive approach to filmmaking, where every project is an opportunity to push boundaries and create meaningful impact through visual storytelling.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="w-full md:w-1/2"
          >
            <div className="relative p-4 border border-rnb-red/30 rounded-lg bg-gray-900">
              <blockquote className="text-lg italic text-gray-300">
                "At Red & Black Studio, we believe in the power of storytelling to transform perspectives and create lasting impact. Every frame we create is a testament to our commitment to artistic excellence and narrative innovation."
              </blockquote>
              <div className="mt-4 text-right text-rnb-red">
                — Kushal Sheth
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FounderSection; 