import type React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm"
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <a href="/">
            <h1 className="text-xl font-bold text-blue-600">Kushal Sheth</h1>
          </a>
          <nav className="hidden space-x-8 md:flex">
            {["About", "Services", "Performance", "Testimonials", "Contact"].map((item) => (
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
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
