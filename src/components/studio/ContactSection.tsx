import type React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowForward, MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../../utils/animations";

const ContactSection: React.FC = () => {
  return (
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
              Peacemaker (શાંતિ નિર્માતા) 🕊️
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default ContactSection;
