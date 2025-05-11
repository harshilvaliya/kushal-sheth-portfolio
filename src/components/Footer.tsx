import type React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../utils/animations";

const Footer: React.FC = () => {
  return (
    <motion.footer
      id="contact"
      className="py-20 text-white bg-gray-900"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2">
          <div>
            <motion.h2 variants={fadeIn} className="mb-6 text-2xl font-bold">
              Let's Connect
            </motion.h2>
            <motion.p variants={fadeIn} className="mb-8 text-gray-400">
              Ready to take your business to the next level? Let's discuss how I
              can help you achieve your growth goals.
            </motion.p>
            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 10 }}
                href="mailto:k.m.sheth5138@gmail.com"
                className="flex items-center text-gray-300 hover:text-blue-400"
              >
                <MdEmail className="w-5 h-5 mr-3" />
                k.m.sheth5138@gmail.com
              </motion.a>
              <motion.a
                whileHover={{ x: 10 }}
                href="https://www.linkedin.com/in/kushal-sheth/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400"
              >
                <FaLinkedin className="w-5 h-5 mr-3" />
                kushal-sheth
              </motion.a>
            </div>
          </div>
          <div>
            <motion.h3 variants={fadeIn} className="mb-6 text-xl font-semibold">
              Quick Links
            </motion.h3>
            <nav className="space-y-4">
              {["About", "Services", "Testimonials"].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ x: 10 }}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
        <div className="pt-8 mt-16 text-center text-gray-400 border-t border-gray-800">
          <p>
            &copy; {new Date().getFullYear()} Kushal Sheth. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
