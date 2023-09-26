"use client";
import React from "react";
import illustration from "../../../public/assets/images/illustration-4.png";
import { prizes } from "@/src/utils";
import flare1 from "../../../public/assets/images/Purple-Lens-Flare-PNG.png";
import flare2 from "../../../public/assets/images/Purple-Lens-Flare-PNG 2.png";
import star from "../../../public/assets/icons/star pu.svg";
import star2 from "../../../public/assets/icons/star.svg";
import { motion } from "framer-motion";
import {
  elementList,
  fadeIn,
  letterAnimation,
  staggerChildren,
} from "@/src/utils";

const Prizes = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 relative py-[70px]">
      <div className="absolute top-[-250px] left-[-50px] opacity-50 -z-30">
        <img src={flare1.src} alt="flare" className="w-full" />
      </div>
      <div className="absolute top-[200px] right-[0px] opacity-50 -z-30">
        <img src={flare2.src} alt="flare" className="w-full" />
      </div>
      <motion.div
        variants={elementList}
        initial="initial"
        whileInView="animate"
        className="max-w-[1222px] mx-auto"
      >
        <motion.div className="overflow-hidden font-tt-clashDisplay lg:text-[32px] font-bold max-w-[25rem] mx-auto lg:hidden block text-center text-xl">
          <motion.div variants={letterAnimation}>Prizes and</motion.div>
          <motion.div variants={letterAnimation} className="text-[#D434FE]">
            Rewards
          </motion.div>
        </motion.div>
        <div className="pt-3  max-w-[25rem] mx-auto text-xs text-center pb-10 lg:hidden block">
          Highlight of the prizes or rewards for winners and for participants.
        </div>
        {/* <div className="bg-prizes-bg bg-no-repeat bg-cover w-full h-full absolute left-0 right-0 top-0 -z-20 opacity-10"></div> */}
        <div className="flex items-center justify-center gap-[37px] flex-col lg:flex-row">
          <motion.div variants={fadeIn} className="relative">
            <div className="absolute -top-40 lg:left-10 left-5">
              <img src={star.src} alt="star" className="w-5 h-5" />
            </div>
            <div className="absolute -bottom-20 lg:left-10 left-0">
              <img src={star2.src} alt="star" className="w-5 h-5" />
            </div>
            <img src={illustration.src} alt="illustration" />
          </motion.div>
          <div className="w-full">
            <div className="lg:block hidden">
              <motion.div className="font-tt-clashDisplay text-[32px] font-bold max-w-[25rem] mx-auto overflow-hidden lg:leading-10">
                <motion.div variants={letterAnimation}>Prizes and</motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="text-[#D434FE]"
                >
                  Rewards
                </motion.div>
              </motion.div>
              <div className="pt-3  max-w-[25rem] mx-auto">
                Highlight of the prizes or rewards for winners and for
                participants.
              </div>
            </div>
            <div className="flex items-center justify-center lg:gap-[30px] gap-4 relative lg:mt-[200px] mt-[100px]">
              <div className="absolute lg:-top-40 lg:left-20 -top-20 right-0">
                <img src={star2.src} alt="star" className="w-5 h-5" />
              </div>
              <div className="absolute top-0 right-0 lg:block hidden">
                <img src={star2.src} alt="star" className="w-5 h-5" />
              </div>
              <div className="absolute lg:-bottom-5 right-40 opacity-50 -bottom-10">
                <img src={star2.src} alt="star" className="w-5 h-5" />
              </div>
              {prizes.map((prize, index) => (
                <motion.div
                  variants={staggerChildren}
                  custom={index}
                  key={prize.id}
                  className={` ${
                    prize.title === "1st"
                      ? "lg:h-80 h-36 bg-purple-600 bg-opacity-10 rounded-lg border border-purple-600"
                      : " lg:h-72 h-32"
                  } lg:w-52 lg:max-w-full max-w-[96px] w-full bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500 flex items-center justify-center text-center flex-col`}
                >
                  <div className="absolute">
                    <img
                      src={prize.img}
                      alt="prizes"
                      className={`${
                        prize.title === "1st"
                          ? "lg:max-w-[288px] h-32 max-w-[128px]  lg:h-72 lg:top-[-170px] top-[-100px]"
                          : "lg:max-w-[176px] max-w-[80px] lg:h-44 h-20 "
                      } object-cover lg:top-[-150px] top-[-80px]`}
                    />
                  </div>
                  <div className="max-w-[10rem] lg:text-4xl font-bold lg:mt-[110px] mt-5 text-xs">
                    {prize.title}
                    <div className="lg:text-2xl text-xs">Runner</div>
                  </div>
                  <div
                    className={`lg:text-[32px] text-sm font-bold mt-5 ${
                      prize.title === "1st"
                        ? "text-[#903AFF]"
                        : "text-[#D434FE] "
                    }`}
                  >
                    {prize.prize}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Prizes;
