import React from "react";

const Nav = () => {
  return (
    <nav className="border-b border-white border-opacity-20">
      <section className="max-w-[1256px] mx-auto pt-16 pb-6 flex justify-between items-center">
        <div className="font-tt-clashDisplay flex font-bold text-[36px]">
          <span>get</span>
          <span className="text-[#D434FE]">Linked</span>
        </div>
        <ul className="font-montserrat flex gap-14 items-center">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
          <li className="ml-[65px] rounded bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 w-44 h-14 flex items-center justify-center">
            Register
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
