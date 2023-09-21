import React from "react";
import idea from "../../../public/assets/images/introduction-icon.png";

const Introduction = () => {
  return (
    <section className="pt-[56px] pb-[84px] px-10">
      <div className="flex items-center justify-center gap-[106px]">
        <div>
          <img src={idea.src} alt="idea" />
        </div>
        <div>
          <div className="font-bold text-[32px] font-tt-clashDisplay">
            Introduction to getlinked
            <br />
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </div>
          <div className="max-w-[535px] mx-auto font-montserrat leading-7 mt-4">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
