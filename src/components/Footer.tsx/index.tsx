import React from "react";

import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaLocationDot,
} from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 relative pt-[70px] bg-[#100B20]">
      <div className="flex justify-center gap-[190px]">
        <div className="flex flex-col justify-between items-stretch">
          <div className="flex-1">
            <div className="font-tt-clashDisplay font-bold text-3xl">
              get<span className="text-fuchsia-500">linked</span>
            </div>
            <div className="text-xs leading-7">
              Getlinked Tech Hackathon is a technology innovation program
              <br />
              established by a group of organizations with the aim of showcasing
              <br />
              young and talented individuals in the field of technology
              <br />
            </div>
          </div>
          <div className="">
            <div className="text-xs leading-tight mt-5">
              Terms of Use <span className="text-fuchsia-500 text-xl"> | </span>
              Privacy Policy
            </div>
          </div>
        </div>
        <div>
          <div className="text-fuchsia-500 text-sm pb-3 font-semibold">
            Useful Links
          </div>
          <ul className="flex flex-col gap-5 text-xs">
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
            <li className="flex items-center gap-4 text-xl">
              <span className="text-xs text-fuchsia-500">Follow us</span>
              <span className="hover:text-fuchsia-500 duration-150 cursor-pointer hover:scale-[1.2]">
                <FaInstagram />
              </span>
              <span className="hover:text-fuchsia-500 duration-150 cursor-pointer hover:scale-[1.2]">
                <FaXTwitter />
              </span>
              <span className="hover:text-fuchsia-500 duration-150 cursor-pointer hover:scale-[1.2]">
                <FaFacebookF />
              </span>
              <span className="hover:text-fuchsia-500 duration-150 cursor-pointer hover:scale-[1.2]">
                <FaLinkedinIn />
              </span>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-fuchsia-500 text-sm pb-3 font-semibold">
            Contact Us
          </div>
          <ul className="flex flex-col gap-5 text-xs">
            <li className="flex items-center gap-4">
              <span className="text-xl ">
                <BiSolidPhoneCall />
              </span>
              +234 679 81819
            </li>
            <li className="flex items-center gap-4 leading-5">
              <span className="text-xl">
                <FaLocationDot />
              </span>
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs my-14">
        All rights reserved. © getlinked Ltd.
      </div>
    </section>
  );
};

export default Footer;
