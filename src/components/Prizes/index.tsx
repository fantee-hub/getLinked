import React from "react";
import illustration from "../../../public/assets/images/illustration-4.png";
import { prizes } from "@/src/utils";

const Prizes = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 relative py-[70px] ">
      <div className="max-w-[1222px] mx-auto">
        <div className="font-tt-clashDisplay lg:text-[32px] font-bold max-w-[25rem] mx-auto lg:hidden block text-center text-xl">
          Prizes and
          <br />
          <span className="text-[#D434FE]">Rewards</span>
        </div>
        <div className="pt-3  max-w-[25rem] mx-auto text-xs text-center pb-10 lg:hidden block">
          Highlight of the prizes or rewards for winners and for participants.
        </div>
        {/* <div className="bg-prizes-bg bg-no-repeat bg-cover w-full h-full absolute left-0 right-0 top-0 -z-20 opacity-10"></div> */}
        <div className="flex items-center justify-center gap-[37px] flex-col lg:flex-row">
          <div>
            <img src={illustration.src} alt="illustration" />
          </div>
          <div className="w-full">
            <div className="lg:block hidden">
              <div className="font-tt-clashDisplay text-[32px] font-bold max-w-[25rem] mx-auto ">
                Prizes and
                <br />
                <span className="text-[#D434FE]">Rewards</span>
              </div>
              <div className="pt-3  max-w-[25rem] mx-auto">
                Highlight of the prizes or rewards for winners and for
                participants.
              </div>
            </div>
            <div className="flex items-center justify-center lg:gap-[30px] gap-4 relative lg:mt-[200px] mt-[100px]">
              {prizes.map((prize) => (
                <div
                  key={prize.id}
                  className={` ${
                    prize.title === "1st"
                      ? "lg:h-80 h-36 bg-purple-600 bg-opacity-10 rounded-lg border border-purple-600"
                      : " lg:h-72 h-32"
                  } lg:w-52 lg:max-w-full max-w-[96px] w-full bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500 flex items-center justify-center text-center flex-col`}
                >
                  <div className="absolute">
                    <img
                      src={prize.img}
                      alt="prizes"
                      className={`${
                        prize.title === "1st"
                          ? "lg:max-w-[288px] h-32 max-w-[128px]  lg:h-72 lg:top-[-170px] top-[-105px]"
                          : "lg:max-w-[176px] max-w-[80px] lg:h-44 h-20 "
                      } object-cover lg:top-[-150px] top-[-80px]`}
                    />
                  </div>
                  <div className="max-w-[10rem] lg:text-4xl font-bold lg:mt-[110px] mt-5 text-xs">
                    {prize.title}
                    <div className="lg:text-2xl text-xs">Runner</div>
                  </div>
                  <div
                    className={`lg:text-[32px] text-sm font-bold mt-5 ${
                      prize.title === "1st"
                        ? "text-[#903AFF]"
                        : "text-[#D434FE] "
                    }`}
                  >
                    {prize.prize}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
