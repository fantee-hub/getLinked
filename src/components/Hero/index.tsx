"use client";
import React, { useState, useEffect } from "react";
import homehero from "../../../public/assets/images/home-hero.png";
import flare from "../../../public/assets/images/Purple-Lens-Flare-PNG.png";
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
  const [timeLeft, setTimeLeft] = useState<number>(150000);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(hours).padStart(2, "0")}h ${String(
    minutes
  ).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;

  return (
    <section className="relative border-b border-white border-opacity-20 ">
      <img
        src={flare.src}
        alt="flare"
        className="absolute top-[-250px] left-[-50px] opacity-40 -z-30"
      />

      <div className="max-w-[1400px] mx-auto px-10 overflow-hidden">
        <div className="font-bold lg:text-[36px] text-base italic text-right  relative pt-8">
          {currentText}
          <div className="absolute bottom-[-20px] right-10">
            {isTyping && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="255"
                height="17"
                viewBox="0 0 255 17"
                fill="none"
                className="animated-line w-[115px] lg:w-auto"
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

        <motion.div
          variants={heroBanner}
          initial="initial"
          animate="animate"
          className="mt-10 flex items-center justify-between lg:flex-row flex-col"
        >
          <motion.div className="overflow-hidden text-center lg:text-left">
            <motion.div className="lg:text-[80px] text-[32px] font-bold font-tt-clashDisplay leading-none flex flex-col gap-1 overflow-hidden pt-[70px]">
              <motion.div
                variants={letterAnimation}
                className="relative pt-10 lg:pt-0"
              >
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
                    <img
                      src={chain.src}
                      alt="chain"
                      className="w-8 h-8 lg:w-auto lg:h-auto"
                    />
                  </span>
                  <span>
                    <img
                      src={bang.src}
                      alt="bang"
                      className="w-8 h-8 lg:w-auto lg:h-auto"
                    />
                  </span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:text-xl text-xs leading-8 mt-2 font-montserrat"
              variants={letterAnimation}
            >
              Participate in getlinked tech Hackathon 2023 stand
              <br /> a chance to win a Big prize
            </motion.div>
            <div className="flex justify-center lg:justify-start">
              <motion.div
                variants={letterAnimation}
                className="mt-[41px] rounded bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 w-44 h-14 flex items-center justify-center hover:bg-gradient-to-r"
              >
                Register
              </motion.div>
            </div>
            <div className="mt-[77px] mb-10 flex gap-5 justify-center lg:justify-start">
              <div>
                <span className=" text-[48px] lg:text-[64px] leading-[63px] font-unica">
                  {`${String(hours).padStart(2, "0")}`}
                </span>
                <span>H</span>
              </div>
              <div>
                <span className=" text-[48px] lg:text-[64px] leading-[63px] font-unica">
                  {`${String(minutes).padStart(2, "0")}`}
                </span>
                <span>M</span>
              </div>
              <div>
                <span className=" text-[48px] lg:text-[64px] leading-[63px] font-unica">
                  {`${String(seconds).padStart(2, "0")}`}
                </span>
                <span>S</span>
              </div>
            </div>

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
            className="lg:absolute lg:left-[650px] static top-[-20px]"
          >
            <img
              src={homehero.src}
              alt="Hero"
              className="max-w-[828px] w-full md:w-[45vw] 2xl:w-full"
            />
            {/* <img
            src={flare2.src}
            alt="flare"
            className="absolute right-[-40px] top-[-30px] opacity-50 w-full -z-40"
          /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
