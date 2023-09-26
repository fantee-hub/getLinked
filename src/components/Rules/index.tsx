"use client";
import React from "react";
import illustration from "../../../public/assets/images/illustration-1.png";
import flare1 from "../../../public/assets/images/Purple-Lens-Flare-PNG.png";
import flare2 from "../../../public/assets/images/Purple-Lens-Flare-PNG 2.png";
import { motion } from "framer-motion";
import { elementList, fadeIn, letterAnimation } from "@/src/utils";
import star from "../../../public/assets/icons/star.svg";
import fadeStar from "../../../public/assets/icons/star-faded.svg";

const Rules = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 relative pb-[84px] lg:pb-0">
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
        className="flex items-center justify-center flex-col-reverse lg:flex-row"
      >
        <div className="text-center lg:text-left relative">
          <div className="absolute -top-20 right-[200px]">
            <img src={fadeStar.src} alt="" />
          </div>
          <div className="absolute -bottom-10 -right-10">
            <img src={star.src} alt="" />
          </div>
          <motion.div className="overflow-hidden font-tt-clashDisplay lg:text-[32px] font-bold text-xl lg:leading-10">
            <motion.div variants={letterAnimation} className="">
              Rules and
            </motion.div>
            <motion.div variants={letterAnimation} className="text-[#D434FE]">
              Guidelines
            </motion.div>
          </motion.div>
          <div className="max-w-[535px] mx-auto font-montserrat lg:leading-7 mt-4 leading-7 lg:text-sm text-xs">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </div>
        </div>

        <motion.div variants={fadeIn} custom={0}>
          <img src={illustration.src} alt="illustration" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Rules;
