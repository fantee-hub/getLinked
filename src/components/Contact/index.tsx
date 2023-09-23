import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import flare1 from "../../../public/assets/images/contact-flare.png";
import flare2 from "../../../public/assets/images/Purple-Lens-Flare-PNG-4.png";

const ContactPage = () => {
  return (
    <section className="py-[70px] relative px-10 overflow-hidden">
      <div className="absolute left-0 top-[-150px] opacity-50 w-full">
        <img src={flare1.src} alt="flare" />
      </div>
      <div className="absolute bottom-[-300px] right-0 opacity-50 -z-30 overflow-hidden">
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

          <form>
            <div className="flex flex-col gap-11">
              <div>
                <input
                  type="text"
                  name="firstName"
                  id="firstname"
                  className="w-96 h-12 bg-white bg-opacity-5 rounded shadow border border-white outline-none px-7 py-4 placeholder:text-white"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-96 h-12 bg-white bg-opacity-5 rounded shadow border border-white outline-none px-7 py-4 placeholder:text-white"
                  placeholder="Mail"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  className="w-96 h-28 bg-white bg-opacity-5 rounded shadow border border-white outline-none px-4 py-2 placeholder:text-white resize-none"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="w-44 h-14 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded flex items-center justify-center">
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
