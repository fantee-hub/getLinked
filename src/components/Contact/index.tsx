"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import star2 from "../../../public/assets/icons/star pu.svg";
import fadeStar from "../../../public/assets/icons/star-faded.svg";
import star from "../../../public/assets/icons/star.svg";
import flare1 from "../../../public/assets/images/contact-flare.png";
import flare2 from "../../../public/assets/images/Purple-Lens-Flare-PNG-4.png";
import toast from "react-hot-toast";
import { submitContactForm } from "@/src/api";
import CircularProgress from "@mui/material/CircularProgress";

const ContactPage = () => {
  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (Object.keys(values).length == 0) {
      return toast.error("make sure all input fields are not empty");
    }
    setIsLoading(true);
    try {
      //@ts-ignore
      const { firstName, email, phone, message } = values;
      const inputData = {
        first_name: firstName,
        phone_number: phone,
        email,
        message,
      };
      const data = await submitContactForm(inputData);
      if (data) {
        setIsLoading(false);
        toast.success("Thanks for reaching out 👍");
        e.target.reset();
      }
    } catch (e: any) {
      setIsLoading(false);
      toast.error(e.message);
      console.log(e);
    }
  };
  const handleInputChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);
  return (
    <section className="py-[70px] relative px-10 overflow-hidden">
      <div className="absolute left-0 top-[-150px] opacity-50 bg-[#150E28] -z-30">
        <img src={flare1.src} alt="flare" />
      </div>
      <div className="absolute bottom-[-300px] right-0 opacity-50 -z-30 overflow-hidden bg-[#150E28]">
        <img src={flare2.src} alt="star" />
      </div>

      <div className="flex justify-center gap-[200px] relative">
        <div className="mt-10 lg:block hidden">
          <div className="font-tt-clashDisplay text-[32px] font-semibold text-fuchsia-500 pb-4">
            Get in touch
          </div>
          <div className="pb-4">
            Contact
            <br />
            Information
          </div>
          <div className="pb-5">
            27,Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
          </div>
          <div className="pb-5">Call Us : 07067981819</div>
          <div className="pb-9">
            we are open from Monday-Friday
            <br />
            08:00am - 05:00pm
          </div>
          <div>
            <div className="text-fuchsia-500 pb-4">Share on</div>
            <div className="flex gap-5 items-center text-2xl">
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
            </div>
          </div>
        </div>

        <div className="lg:bg-white lg:bg-opacity-5 flare bg-opacity-1 fixed w-full lg:w-auto h-screen top-0 bottom-0 z-[999] lg:static bg-[#140D27] rounded-xl shadow lg:pt-[75px] pt-[67px] pb-[67px] lg:px-[90px] px-10 overflow-auto lg:overflow-hidden">
          <div className="pb-10 lg:hidden block" onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <circle
                cx="11.5"
                cy="11.5"
                r="11"
                stroke="url(#paint0_linear_177_298)"
              />
              <path
                d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
                stroke="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_177_298"
                  x1="11.5"
                  y1="0"
                  x2="11.5"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#FF26B9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="font-tt-clashDisplay text-fuchsia-500 text-xl font-semibold lg:pb-8 pb-6 max-w-[30rem] mx-auto lg:max-w-full relative">
            <div className="absolute left-20 top-[-50px]">
              <img src={star2.src} alt="star" className="w-5 h-5" />
            </div>
            <div className="absolute right-0 bottom-0">
              <img src={fadeStar.src} alt="star" className="w-5 h-5" />
            </div>
            <div>Questions or need assistance?</div>
            <div>Let us know about it!</div>
          </div>
          <div className="lg:hidden block text-xs pb-7">
            Email us below to any question related
            <br />
            to our event
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-[30rem] mx-auto lg:max-w-full"
          >
            <div className="flex flex-col gap-11">
              <div>
                <input
                  type="text"
                  name="firstName"
                  id="firstname"
                  className="lg:w-96 h-12 w-full bg-white bg-opacity-5 rounded shadow border border-white outline-none px-7 py-4 placeholder:text-white"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="lg:w-96 h-12 w-full bg-white bg-opacity-5 rounded shadow border border-white outline-none px-7 py-4 placeholder:text-white"
                  placeholder="Mail"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="lg:w-96 h-12 w-full bg-white bg-opacity-5 rounded shadow border border-white outline-none px-7 py-4 placeholder:text-white"
                  placeholder="Phone Number"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  className="lg:w-96 h-28 w-full bg-white bg-opacity-5 rounded shadow border border-white outline-none px-4 py-2 placeholder:text-white resize-none"
                  placeholder="Message"
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="w-44 h-14 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded flex items-center justify-center "
                  disabled={isLoading}
                >
                  {isLoading && (
                    <CircularProgress
                      color="inherit"
                      size={20}
                      className="mr-2"
                    />
                  )}
                  Submit
                </button>
              </div>
              <div className="lg:hidden block text-center">
                <div className="text-fuchsia-500 pb-4">Share on</div>
                <div className="flex gap-5 items-center text-2xl justify-center">
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
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
