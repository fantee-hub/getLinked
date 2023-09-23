import React from "react";
import illustration from "../../../public/assets/images/illustration-5.png";
import check from "../../../public/assets/icons/check.svg";

const Privacy = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 relative py-[70px]">
      <div className="flex items-center justify-center gap-[50px]">
        <div>
          <div className="font-tt-clashDisplay text-[32px] font-bold">
            Privacy Policy and
            <br />
            <span className="text-[#D434FE]">Terms</span>
          </div>
          <div className="text-white opacity-75 text-sm leading-7">
            Last updated on September 12, 2023
          </div>
          <div className="text-white text-sm leading-relaxed mt-[30px]">
            Below are our privacy & policy, which outline a lot of goodies.{" "}
            <br />
            it’s our aim to always take of our participant
          </div>
          <div className=" bg-zinc-300 bg-opacity-5 rounded border border-fuchsia-500 mt-[69px] text-white text-sm font-normal leading-loose px-[72px] py-[59px]">
            <div className="max-w-[425px]">
              At getlinked tech Hackathon 1.0, we value your privacy
              <br />
              and are committed to protecting your personal information.
              <br />
              This Privacy Policy outlines how we collect, use, disclose, <br />
              and safeguard your data when you participate in our tech <br />
              hackathon event. By participating in our event, you consent <br />
              to the practices described in this policy.
            </div>
            <div className="mt-6">
              <div className="text-base text-[#D434FE] font-bold">
                Licensing Policy
              </div>
              <div className="font-bold">
                Here are terms of our Standard License:
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-[18px]">
              <div className="flex gap-4">
                <div className="mt-2">
                  <img src={check.src} alt="check" />
                </div>
                <div className="">
                  The Standard License grants you a non-exclusive right to
                  <br />
                  navigate and register for our event
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-2">
                  <img src={check.src} alt="check" />
                </div>
                <div className="">
                  You are licensed to use the item available at any free source
                  <br />
                  sites, for your project developement
                </div>
              </div>
              <div className="flex justify-center mt-[19px]">
                <div className="w-[172px] h-[53px] bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded text-white flex items-center justify-center cursor-pointer hover:bg-gradient-to-r duration-150">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={illustration.src} alt="illustration" />
        </div>
      </div>
    </section>
  );
};

export default Privacy;
