"use client";
import React from "react";
import illustration from "../../../public/assets/images/illustration-2.png";
import flare1 from "../../../public/assets/images/Purple-Lens-Flare-PNG-3.png";
import flare2 from "../../../public/assets/images/Purple-Lens-Flare-PNG-4.png";
import fadeStar from "../../../public/assets/icons/star-faded.svg";
import star2 from "../../../public/assets/icons/star pu.svg";
import star from "../../../public/assets/icons/star.svg";
import { keyAttributes } from "@/src/utils";
import { motion } from "framer-motion";
import { elementList, fadeIn, letterAnimation } from "@/src/utils";

const Criteria = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 py-[78px]">
      <div className="absolute bottom-[-200px] left-0 opacity-40 -z-30">
        <img src={flare1.src} alt="star" />
      </div>
      <div className="absolute bottom-[-400px] right-0 opacity-40 -z-30">
        <img src={flare2.src} alt="star" />
      </div>
      <motion.div
        variants={elementList}
        initial="initial"
        whileInView="animate"
        className="flex items-center justify-center gap-[53px] flex-col lg:flex-row"
      >
        <motion.div variants={fadeIn} custom={0} className=" relative">
          <div className="absolute top-[-78px] left-[150px]">
            <img src={star2.src} alt="star" />
          </div>
          <img src={illustration.src} alt="illustration" />
          <div className="absolute bottom-0 right-10">
            <img src={star.src} alt="star" />
          </div>
          <div className="absolute bottom-[300px] right-[300px]">
            <img src={fadeStar.src} alt="star" />
          </div>
        </motion.div>
        <div className="text-center lg:text-left">
          <motion.div className="overflow-hidden font-tt-clashDisplay lg:text-[32px] text-xl font-bold lg:leading-10">
            <motion.div variants={letterAnimation} className="">
              Judging Criteria
            </motion.div>
            <motion.div variants={letterAnimation} className="text-[#D434FE]">
              Key attributes
            </motion.div>
          </motion.div>
          {keyAttributes.map((attr) => (
            <div key={attr.id}>
              <div className="max-w-[535px] mx-auto font-montserrat lg:leading-7 leading-7 mt-4 lg:text-sm text-xs">
                <span className="text-base font-bold text-[#FF26B9]">
                  {attr.title}
                </span>
                : {attr.desc}
              </div>
            </div>
          ))}
          <div className="flex justify-center lg:justify-start">
            <div className="lg:w-[172px] lg:h-[53px] w-24 h-8 lg:text-base text-xs bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded text-white flex items-center justify-center lg:mt-[55px] mt-7 cursor-pointer hover:bg-gradient-to-r duration-150">
              Read More
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Criteria;
