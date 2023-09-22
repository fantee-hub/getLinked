"use client";

import React, { useState } from "react";
import illustration from "../../../public/assets/images/illustration-3.png";
import { faqContents } from "@/src/utils";
import Accordion from "./Accordion";

const Faq = () => {
  const [currentOpen, setCurrentOpen] = useState(false);

  return (
    <section className="px-10 border-b border-white border-opacity-20 relative py-[60px]">
      <div className="flex justify-center items-center gap-7">
        <div>
          <div className="font-tt-clashDisplay text-[32px] font-bold">
            Frequently Ask
            <br />
            <span className="text-[#D434FE]"> Question</span>
          </div>
          <div>
            We got answers to the questions that you might
            <br />
            want to ask about getlinked Hackathon 1.0
          </div>
          <div className="flex flex-col gap-6 mt-[68px] max-w-[427px] mx-auto text-sm">
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
          </div>
        </div>
        <div>
          <img src={illustration.src} alt="illustration" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
