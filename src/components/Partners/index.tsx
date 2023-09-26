import React from "react";
import flare1 from "../../../public/assets/images/Purple-Lens-Flare-PNG.png";
import flare2 from "../../../public/assets/images/Purple-Lens-Flare-PNG 2.png";
const Partners = () => {
  return (
    <section className="px-10 border-b border-white border-opacity-20 py-[78px] relative">
      <div className="absolute top-[-250px] left-[-250px] opacity-50 -z-30">
        <img src={flare1.src} alt="flare" className="w-full" />
      </div>
      <div className="absolute top-[400px] right-[0px] opacity-50 -z-30">
        <img src={flare2.src} alt="flare" className="w-full" />
      </div>
      <div className="text-center flex flex-col gap-5">
        <div className="lg:text-[32px] text-xl font-bold font-tt-clashDisplay lg:leading-7 leading-7">
          Partners and Sponsors
        </div>
        <div className="lg:text-sm lg:leading-7 text-xs leading-7">
          Getlinked Hackathon 1.0 is honored to have the following major
          <br />
          companies as its partners and sponsors
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-2 justify-items-center items-center bg-white bg-opacity-0 rounded border border-fuchsia-500 lg:px-[100px] lg:py-[50px] p-5 lg:max-w-[1225px] mx-auto my-[65px] max-w-full">
          <div className="h-full w-full lg:max-w-[20rem] flex justify-center items-center lg:p-10 p-4 relative line-right line-bottom">
            <img
              src="/assets/partners/liberty company.png"
              alt="partners"
              className=""
            />
          </div>
          <div className="h-full w-full lg:max-w-[20rem] flex justify-center items-center lg:p-10 p-4 relative line-right line-bottom">
            <img src="/assets/partners/liberty-pay.png" alt="parnters" />
          </div>
          <div className="h-full w-full lg:max-w-[20rem] flex justify-center items-center lg:p-10 p-4 relative line-bottom">
            <img src="/assets/partners/Winwise.png" alt="partners" />
          </div>
          <div className="h-full w-full max-w-[20rem] flex justify-center items-center lg:p-10 p-4 relative line-right">
            <img src="/assets/partners/wisper.png" alt="partners" />
          </div>
          <div className="h-full w-full max-w-[20rem] flex justify-center items-center lg:p-10 p-4 relative line-right ">
            <img src="/assets/partners/Paybox.png" alt="partners" />
          </div>
          <div className="h-full w-full max-w-[20rem] flex justify-center items-center lg:p-10 p-4 relative ">
            <img src="/assets/partners/Vizual Plus.png" alt="partners" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
