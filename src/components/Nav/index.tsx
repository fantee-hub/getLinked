"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { menuSlide } from "@/src/utils";
import hamburger from "../../../public/assets/icons/hamburger.svg";
import { AnimatePresence, motion } from "framer-motion";
import Curve from "../Nav/Curve";
import close from "../../../public/assets/icons/close.svg";
const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);
  return (
    <nav className="border-b border-white border-opacity-20 sm:px-8 px-10">
      <section className="max-w-[1256px] mx-auto lg:pt-16 lg:pb-6 py-7 flex justify-between items-center">
        <div className="font-tt-clashDisplay flex font-bold lg:text-[36px] text-[15px]">
          <span>get</span>
          <span className="text-[#D434FE]">Linked</span>
        </div>

        <ul className="font-montserrat gap-14 items-center lg:flex hidden">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
          <li className="ml-[65px] rounded bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 w-44 h-14 flex items-center justify-center hover:bg-gradient-to-r">
            Register
          </li>
        </ul>
        <div
          className={` lg:hidden flex flex-col gap-2 z-[999] ${
            isActive
              ? "w-[23px] h-[23px] flex items-center justify-center rounded-full border border-purple-600"
              : ""
          }`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <img
            src={!isActive ? hamburger.src : close.src}
            alt="hamburger"
            className="w-[19px] h-[14px] "
          />
        </div>
      </section>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className=" bg-[#150E28] fixed right-0 top-0 text-white lg:hidden w-full rounded z-[99] h-screen"
          >
            <div className="h-full flex flex-col justify-between ">
              <ul className="flex flex-col gap-5 py-[150px] pl-[47px]">
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li>Contact</li>
                <li className="rounded bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 w-44 h-14 flex items-center justify-center hover:bg-gradient-to-r">
                  Register
                </li>
              </ul>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
