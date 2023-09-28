import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
      className="text-gray-200 z-30 text-xs mt-4 opacity-80"
    >
      &copy; All rights reserved
    </motion.div>
  );
};

export default Footer;
