import React from "react";
import illustration from "../../../public/assets/images/illustration-1.png";
import flare1 from "../../../public/assets/images/Purple-Lens-Flare-PNG.png";
import flare2 from "../../../public/assets/images/Purple-Lens-Flare-PNG 2.png";

const Rules = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 relative pb-[84px] lg:pb-0">
      <div className="absolute top-[-250px] left-[-50px] opacity-50 -z-30">
        <img src={flare1.src} alt="flare" className="w-full" />
      </div>
      <div className="absolute top-[200px] right-[0px] opacity-50 -z-30">
        <img src={flare2.src} alt="flare" className="w-full" />
      </div>
      <div className="flex items-center justify-center flex-col-reverse lg:flex-row">
        <div className="text-center lg:text-left">
          <div className="font-tt-clashDisplay text-[32px] font-bold">
            Rules and
            <br /> <span className="text-[#D434FE]">Guidelines</span>
          </div>
          <div className="max-w-[535px] mx-auto font-montserrat leading-7 mt-4 text-sm">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </div>
        </div>

        <div>
          <img src={illustration.src} alt="illustration" />
        </div>
      </div>
    </section>
  );
};

export default Rules;
