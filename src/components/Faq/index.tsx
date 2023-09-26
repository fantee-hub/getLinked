"use client";
import React, { useState } from "react";
import illustration from "../../../public/assets/images/illustration-3.png";
import { faqContents } from "@/src/utils";
import Accordion from "./Accordion";
import star2 from "../../../public/assets/icons/star pu.svg";
import star from "../../../public/assets/icons/star.svg";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { elementList, fadeIn, letterAnimation } from "@/src/utils";

const Faq = () => {
  const [currentOpen, setCurrentOpen] = useState(false);

  return (
    <Element name="faq">
      <section className="px-10 border-b border-white border-opacity-20 relative py-[60px]">
        <motion.div
          variants={elementList}
          initial="initial"
          whileInView="animate"
          className="flex justify-center items-center gap-7 flex-col lg:flex-row"
        >
          <div className="relative text-center lg:text-left">
            <div className="absolute top-[-50px] lg:left-[-50px] left-0">
              <img src={star2.src} alt="star" />
            </div>
            <motion.div className="font-tt-clashDisplay lg:text-[32px] text-xl font-bold lg:leading-10 overflow-hidden">
              <motion.div variants={letterAnimation}>Frequently Ask</motion.div>
              <motion.div variants={letterAnimation} className="text-[#D434FE]">
                Question
              </motion.div>
            </motion.div>
            <div className="pt-4 lg:text-base text-xs lg:leading-7">
              We got answers to the questions that you might
              <br />
              want to ask about getlinked Hackathon 1.0
            </div>
            <motion.div className="flex flex-col gap-6 mt-[68px] max-w-[427px] mx-auto lg:text-sm text-left text-xs">
              {faqContents.map((faqs, index) => (
                <Accordion
                  key={faqs.id}
                  num={index}
                  title={faqs.title}
                  curOpen={currentOpen}
                  setOpen={setCurrentOpen}
                >
                  {faqs.answer}
                </Accordion>
              ))}
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn}
            custom={0}
            className="relative mt-10 lg:mt-0"
          >
            <img src={illustration.src} alt="illustration" />
            <div className="absolute bottom-[-20px] right-[150px]">
              <img src={star.src} alt="star" />
            </div>
            <div className="absolute top-0 right-[350px]">
              <img src={star2.src} alt="star" className="w-6 h-6" />
            </div>
            <div className="absolute top-[250px] left-20">
              <img src={star2.src} alt="star" className="w-6 h-6" />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Faq;
