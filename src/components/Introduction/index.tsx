import React from "react";
import idea from "../../../public/assets/images/introduction-icon.png";
import star from "../../../public/assets/icons/sata gra.svg";
import star2 from "../../../public/assets/icons/star pu.svg";
import arrow from "../../../public/assets/icons/arrow.svg";

const Introduction = () => {
  return (
    <section className="pt-[56px] pb-[84px] px-10 border-b border-white border-opacity-20">
      <div className="flex items-center justify-center gap-[106px] lg:flex-row flex-col">
        <div className="relative">
          <img src={idea.src} alt="idea" />

          <div className="absolute top-[190px] lg:-left-14 left-0">
            <img src={star.src} alt="star" />
          </div>
          <div>
            <img
              src={arrow.src}
              alt="arrow"
              className="absolute -bottom-8 -right-7"
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <div className="font-bold lg:text-[32px] text-xl font-tt-clashDisplay relative lg:leading-10">
            Introduction to getlinked
            <br />
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </div>
          <div className="max-w-[535px] mx-auto font-montserrat lg:leading-7 mt-4 lg:text-sm text-xs leading-7">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </div>
          <div className="absolute top-[30px] right-0">
            <img src={star2.src} alt="star" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
