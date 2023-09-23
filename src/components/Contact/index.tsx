"use client";
import React, { useState } from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import flare1 from "../../../public/assets/images/contact-flare.png";
import flare2 from "../../../public/assets/images/Purple-Lens-Flare-PNG-4.png";
import toast from "react-hot-toast";
import { submitContactForm } from "@/src/api";
import { CircularProgress } from "@mui/material";

const ContactPage = () => {
  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (Object.keys(values).length == 0) {
      return toast.error("make sure all input fields are not empty");
    }
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
      toast.error("Make sure all inputs are typed in correctly");
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
      <div className="absolute left-0 top-[-150px] opacity-50 w-full bg-[#150E28] -z-30 h-full">
        <img src={flare1.src} alt="flare" />
      </div>
      <div className="absolute bottom-[-300px] right-0 opacity-50 -z-30 overflow-hidden bg-[#150E28]">
        <img src={flare2.src} alt="star" />
      </div>

      <div className="flex justify-center gap-[200px] relative">
        <div className="mt-10">
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
        <div className="bg-white bg-opacity-5 rounded-xl shadow pt-[75px] pb-[67px] px-[90px]">
          <div className="font-tt-clashDisplay text-fuchsia-500 text-xl font-semibold pb-8">
            <div>Questions or need assistance?</div>
            <div>Let us know about it!</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-11">
              <div>
                <input
                  type="text"
                  name="firstName"
                  id="firstname"
                  className="w-96 h-12 bg-white bg-opacity-5 rounded shadow border border-white outline-none px-7 py-4 placeholder:text-white"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-96 h-12 bg-white bg-opacity-5 rounded shadow border border-white outline-none px-7 py-4 placeholder:text-white"
                  placeholder="Mail"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-96 h-12 bg-white bg-opacity-5 rounded shadow border border-white outline-none px-7 py-4 placeholder:text-white"
                  placeholder="Phone Number"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  className="w-96 h-28 bg-white bg-opacity-5 rounded shadow border border-white outline-none px-4 py-2 placeholder:text-white resize-none"
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
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
