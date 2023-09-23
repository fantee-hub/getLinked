import React from "react";
import { partnersImages } from "@/src/utils";
const Partners = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 py-[78px]">
      <div className="text-center flex flex-col gap-5">
        <div className="text-[32px] font-bold font-tt-clashDisplay leading-7">
          Partners and Sponsors
        </div>
        <div className="text-sm leading-7">
          Getlinked Hackathon 1.0 is honored to have the following major
          <br />
          companies as its partners and sponsors
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-2 justify-items-center items-center bg-white bg-opacity-0 rounded border border-fuchsia-500 p-[100px] max-w-[1225px] mx-auto my-[65px]">
          <div className="h-full w-full max-w-[30rem] flex justify-center items-center p-10 relative line-right line-bottom">
            <img src="/assets/partners/liberty company.png" alt="partners" />
          </div>
          <div className="h-full w-full max-w-[30rem] flex justify-center items-center p-10 relative line-right line-bottom">
            <img src="/assets/partners/liberty-pay.png" alt="parnters" />
          </div>
          <div className="h-full w-full max-w-[30rem] flex justify-center items-center p-10 relative line-bottom">
            <img src="/assets/partners/Winwise.png" alt="partners" />
          </div>
          <div className="h-full w-full max-w-[30rem] flex justify-center items-center p-10 relative line-right">
            <img src="/assets/partners/wisper.png" alt="partners" />
          </div>
          <div className="h-full w-full max-w-[30rem] flex justify-center items-center p-10 relative line-right ">
            <img src="/assets/partners/Paybox.png" alt="partners" />
          </div>
          <div className="h-full w-full max-w-[30rem] flex justify-center items-center p-10 relative ">
            <img src="/assets/partners/Vizual Plus.png" alt="partners" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;