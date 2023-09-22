import React from "react";
import illustration from "../../../public/assets/images/illustration-4.png";
import { prizes } from "@/src/utils";

const Prizes = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 relative py-[70px]">
      {/* <div className="bg-prizes-bg bg-no-repeat bg-cover w-full h-full absolute left-0 right-0 top-0 -z-20 opacity-10"></div> */}
      <div className="flex items-center justify-center gap-[37px]">
        <div>
          <img src={illustration.src} alt="illustration" />
        </div>
        <div>
          <div className="font-tt-clashDisplay text-[32px] font-bold max-w-[25rem] mx-auto">
            Prizes and
            <br />
            <span className="text-[#D434FE]">Rewards</span>
          </div>
          <div className="pt-3  max-w-[25rem] mx-auto">
            Highlight of the prizes or rewards for winners and for participants.
          </div>
          <div className="flex items-center justify-center gap-[30px] relative mt-[200px]">
            {prizes.map((prize) => (
              <div
                key={prize.id}
                className={` ${
                  prize.title === "1st"
                    ? "h-80 bg-purple-600 bg-opacity-10 rounded-lg border border-purple-600"
                    : " h-72"
                } w-52 bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500 flex items-center justify-center text-center flex-col`}
              >
                <div className="absolute">
                  <img
                    src={prize.img}
                    alt="prizes"
                    className={`${
                      prize.title === "1st"
                        ? "max-w-[288px] h-72 top-[-170px]"
                        : "w-44 h-44 "
                    } object-cover top-[-150px]`}
                  />
                </div>
                <div className="max-w-[10rem] text-4xl font-bold mt-[110px]">
                  {prize.title}
                  <div className="text-2xl">Runner</div>
                </div>
                <div
                  className={`text-[32px] font-bold mt-5 ${
                    prize.title === "1st" ? "text-[#903AFF]" : "text-[#D434FE] "
                  }`}
                >
                  {prize.prize}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
