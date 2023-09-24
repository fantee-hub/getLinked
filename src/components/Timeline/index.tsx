"use client";
import React from "react";
import { timeLine } from "@/src/utils";
import { Element } from "react-scroll";

const Timeline = () => {
  return (
    <Element name="timeline">
      <section className="px-10 border-b border-white border-opacity-20 relative py-[70px]">
        <div className="text-center">
          <div className="font-tt-clashDisplay lg:text-[32px text-xl font-bold">
            Timeline
          </div>
          <div className="pt-3 lg:text-base text-xs leading-7">
            Here is the breakdown of the time we anticipate
            <br /> using for the upcoming event.
          </div>
        </div>

        <div className="relative container mx-auto px-6 lg:flex flex-col gap-2 my-[90px] hidden ">
          {timeLine.map((timeline, index) => {
            const isEven = index % 2 === 0;
            if (isEven)
              return (
                <div key={timeline.id}>
                  <div className="flex flex-col gap-2">
                    <div className="h-[100px] w-1 bg-fuchsia-500 md:mx-auto"></div>
                    <div className="relative">
                      <div className="text-2xl font-bold w-[53px] h-[53px] flex justify-center items-center bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full xs:absolute md:mx-auto md:left-0 md:right-0">
                        {index + 1}
                      </div>
                      <div className="absolute pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16 right-0 top-[0px]">
                        <div className="text-2xl text-[#D434FE] font-bold">
                          {timeline.date}
                        </div>
                      </div>
                      <div className="absolute xs:pt-0 md:w-1/2 md:ml-auto top-[-20px] md:pr-16 text-right">
                        <div className="text-2xl text-[#D434FE] font-bold">
                          {timeline.title}
                        </div>
                        <div className="leading-6 pt-3">{timeline.desc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            return (
              <div className="flex flex-col gap-2" key={timeline.id}>
                <div className="h-[100px] w-1 bg-fuchsia-500 md:mx-auto"></div>
                <div className="relative">
                  <div className=" text-2xl font-bold w-[53px] h-[53px] flex justify-center items-center bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full xs:absolute md:mx-auto md:left-0 md:right-0">
                    {index + 1}
                  </div>
                  <div className="absolute xs:pt-0 md:w-1/2 md:ml-auto top-[0px] md:pr-16 text-right">
                    <div className="text-2xl text-[#D434FE] font-bold">
                      {timeline.date}
                    </div>
                  </div>
                  <div className="absolute pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16 right-0 top-[-20px]">
                    <div className="text-2xl text-[#D434FE] font-bold">
                      {timeline.title}
                    </div>
                    <div className="leading-6 pt-3">{timeline.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative container mx-auto flex flex-col gap-[45px] my-[90px] lg:hidden ">
          {timeLine.map((timeline, index) => {
            const isEven = index % 2 === 0;
            if (isEven)
              return (
                <div className="flex justify-start relative" key={timeline.id}>
                  <div className="flex justify-start flex-col items-center gap-4">
                    <div className="h-[100px] w-1 bg-fuchsia-500 md:mx-auto"></div>
                    <div className=" lg:text-2xl text-base font-bold w-10 h-10 flex justify-center items-center bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full xs:absolute md:mx-auto md:left-0 md:right-0">
                      {index + 1}
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-[50px] text-xs font-bold text-fuchsia-500">
                    {timeline.date}
                  </div>
                  <div className="absolute top-[5px] left-[50px] text-xs">
                    <div className="text-fuchsia-500 font-bold pb-1">
                      {timeline.title}
                    </div>
                    <div className=" leading-5">{timeline.desc}</div>
                  </div>
                </div>
              );
            return (
              <div className="flex justify-start relative" key={timeline.id}>
                <div className="flex justify-start flex-col items-center gap-4">
                  <div className="h-[100px] w-1 bg-fuchsia-500 md:mx-auto"></div>
                  <div className=" lg:text-2xl text-base font-bold w-10 h-10 flex justify-center items-center bg-gradient-to-l from-purple-600 to-fuchsia-500 rounded-full xs:absolute md:mx-auto md:left-0 md:right-0">
                    {index + 1}
                  </div>
                </div>
                <div className="absolute bottom-2 left-[50px] text-xs font-bold text-fuchsia-500">
                  {timeline.date}
                </div>
                <div className="absolute top-[5px] left-[50px] text-xs">
                  <div className="text-fuchsia-500 font-bold pb-1">
                    {timeline.title}
                  </div>
                  <div className=" leading-5">{timeline.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Element>
  );
};

export default Timeline;
