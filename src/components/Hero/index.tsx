"use client";
import React, { useState, useEffect } from "react";
import homehero from "../../../public/assets/images/home-hero.png";
import flare from "../../../public/assets/images/flare.png";
import flare2 from "../../../public/assets/images/flare-2.png";
import star from "../../../public/assets/icons/star.svg";
import fadeStar from "../../../public/assets/icons/star-faded.svg";
import chain from "../../../public/assets/icons/chain.svg";
import bang from "../../../public/assets/icons/bang.svg";
import idea from "../../../public/assets/icons/Creative 1.svg";
import { motion } from "framer-motion";
import { heroBanner, letterAnimation, fadeInAnimation } from "@/src/utils";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const words = "Igniting a Revolution in HR Innovation";

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + words[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 90);

      return () => clearTimeout(timeout);
    }
    setIsTyping(true);
  }, [currentIndex]);

  return (
    <div className="max-w-[1456px] mx-auto px-10 relative">
      <div className="font-bold text-[36px] italic text-right  relative pt-8">
        {currentText}
        <div className="absolute bottom-[-16px] right-10">
          {isTyping && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="255"
              height="17"
              viewBox="0 0 255 17"
              fill="none"
              className="animated-line"
            >
              <path
                d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                stroke="#FF26B9"
                stroke-width="3"
              />
            </svg>
          )}
        </div>
      </div>

      <div>
        <motion.div variants={heroBanner} initial="initial" animate="animate">
          <img
            src={flare.src}
            alt="flare"
            className="absolute top-[-250px] left-[-50px] opacity-30 -z-30"
          />
          <motion.img
            variants={fadeInAnimation}
            custom={3}
            src={star.src}
            alt="star"
            className="absolute top-0 left-10"
          />
          <motion.img
            variants={fadeInAnimation}
            custom={2}
            src={fadeStar.src}
            alt="star"
            className="absolute left-[60%] top-[50px]"
          />
        </motion.div>
      </div>
      {isTyping && (
        <motion.div
          variants={heroBanner}
          initial="initial"
          animate="animate"
          className="mt-10 flex items-center justify-between lg:flex-row flex-col"
        >
          <motion.div className="overflow-hidden">
            <motion.div className="text-[80px] font-bold font-tt-clashDisplay leading-none flex flex-col gap-1 overflow-hidden pt-[70px]">
              <motion.div variants={letterAnimation} className="relative">
                <motion.div>getlinked Tech</motion.div>
                <div>
                  <img
                    src={idea.src}
                    alt="idea"
                    className="absolute top-[-140px] right-[30px] z-50"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 relative"
                variants={letterAnimation}
              >
                <motion.div>
                  Hackathon <span className="text-[#D434FE]">1.0</span>
                </motion.div>
                <div className="flex items-center ">
                  <span>
                    <img src={chain.src} alt="chain" />
                  </span>
                  <span>
                    <img src={bang.src} alt="bang" />
                  </span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="text-xl leading-8 mt-2"
              variants={letterAnimation}
            >
              Participate in getlinked tech Hackathon 2023 stand
              <br /> a chance to win a Big prize
            </motion.div>
            <motion.div
              variants={letterAnimation}
              className="mt-[41px] rounded bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 w-44 h-14 flex items-center justify-center hover:bg-gradient-to-r"
            >
              Register
            </motion.div>
            <div className="mt-[77px]">00 00 00</div>
            <motion.img
              variants={fadeInAnimation}
              custom={0}
              src={fadeStar.src}
              alt="star"
              className="absolute left-[70%] bottom-[50px]"
            />
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            custom={1}
            className="lg:absolute left-[750px] static"
          >
            <img
              src={homehero.src}
              alt="Hero"
              className="max-w-[667px] w-full"
            />
            {/* <img
            src={flare2.src}
            alt="flare"
            className="absolute right-[-40px] top-[-30px] opacity-50 w-full -z-40"
          /> */}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
