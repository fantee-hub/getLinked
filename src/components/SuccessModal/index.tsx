import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import sucess from "../../../public/assets/images/success.png";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 55,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const SuccessModal = ({ handleClose, children }: any) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-[clamp(50%_,700px_,90%)]"
      >
        <div className="text-center bg-white bg-opacity-0 rounded border border-fuchsia-500 lg:p-10 p-5 flex flex-col justify-center items-center">
          <div>
            <img src={sucess.src} alt="success" />
          </div>
          <div className="lg:text-[32px] text-base font-semibold leading-10">
            Congratulations
            <br /> you have successfully Registered!
          </div>
          <div className="pt-3 lg:text-base text-xs">
            Yes, it was easy and you did it! 😉
            <br /> check your mail box for next step
          </div>
          <div className="flex justify-center my-8 w-full">
            <button
              className="lg:w-96 w-full h-14 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded flex items-center justify-center"
              onClick={handleClose}
            >
              Back
            </button>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default SuccessModal;
