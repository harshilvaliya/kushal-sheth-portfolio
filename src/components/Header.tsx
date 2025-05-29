import type React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 z-50 w-full border-b backdrop-blur-sm bg-white/80"
    >
      <div className="container px-4 py-3 mx-auto sm:px-6 sm:py-4">
        <div className="flex justify-between items-center">
          <a href="/">
            <h1 className="text-lg font-bold text-blue-600 sm:text-xl">
              Kushal Sheth
            </h1>
          </a>
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden space-x-4 md:flex lg:space-x-8">
              {[
                "About",
                "Services",
                "Performance",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-3 py-1.5 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors sm:px-4 sm:py-2 sm:text-base"
              onClick={() => window.location.href = '/studio'}
            >
              Red & Black Studio
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="p-1 ml-4 text-gray-600 md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="py-4 mt-2 border-t md:hidden"
          >
            <nav className="flex flex-col space-y-3">
              {[
                "About",
                "Services",
                "Performance",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-2 py-1 text-gray-600 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
