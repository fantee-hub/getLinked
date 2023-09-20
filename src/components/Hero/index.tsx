"use client";
import React, { useState, useEffect } from "react";

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
      }, 100);

      return () => clearTimeout(timeout);
    }
    setIsTyping(true);
  }, [currentIndex]);

  return (
    <div>
      <div className="font-bold text-[36px] italic text-right pr-[55px] relative pt-8">
        {currentText}
        <div className="absolute bottom-[-16px] right-20">
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
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
