import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }: any) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 h-full w-full bg-[rgba(21_,14_,40_,0.93)] flex justify-center items-center z-[999]"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
