import React from "react";
import { Collapse } from "react-collapse";
import { motion } from "framer-motion";
import { staggerChildren } from "@/src/utils";

const Accordion = ({ children, num, setOpen, curOpen, title }: any) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    setOpen(isOpen ? false : num);
  };
  return (
    <motion.div variants={staggerChildren} custom={num}>
      <div
        onClick={handleToggle}
        className={`cursor-pointer pb-[13px] flex justify-between border-b border-fuchsia-500  ${
          !isOpen ? "accordion-item" : ""
        } `}
      >
        <div className="lg:text-sm text-xs">{title}</div>
        <div className="toggle-sign">
          <div className={`plus ${isOpen ? "checked" : ""}`}></div>
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="pt-[13px] leading-7">{children}</div>
      </Collapse>
    </motion.div>
  );
};

export default Accordion;
