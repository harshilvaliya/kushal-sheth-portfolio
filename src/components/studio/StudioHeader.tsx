import type React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RnBLogo from "../../assets/RnBStudio/RnBLogo.jpg";

const StudioHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 z-50 w-full border-b backdrop-blur-sm border-rnb-red/30 bg-black/90"
    >
      <div className="container px-4 py-3 mx-auto md:px-6 md:py-4">
        <div className="flex justify-between items-center">
          <a href="/">
            <div className="flex items-center space-x-2 md:space-x-4">
              <img
                src={RnBLogo}
                alt="Red and Black Studio Logo"
                className="w-auto h-8 md:h-10"
              />
              <h1 className="text-base font-bold text-rnb-red md:text-xl">
                Red & Black Studio
              </h1>
            </div>
          </a>
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="px-3 py-1.5 text-sm text-white border border-rnb-red rounded-lg hover:bg-rnb-red/20 transition-colors md:px-4 md:py-2 md:text-base"
            >
              Back to Portfolio
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default StudioHeader; 