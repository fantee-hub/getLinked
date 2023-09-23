"use client";
import React, { useState } from "react";
import illustration from "../../../public/assets/images/illustration-6.png";
import walk from "../../../public/assets/images/walk.svg";
import InputSelect from "../InputSelect";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

const RegisterSection = () => {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");

  const categoryOption = [
    { value: "mobile", label: "Mobile" },
    { value: "web", label: "Web" },
    { value: "ui/ux", label: "UI/UX" },
  ];
  const groupSize = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
  ];
  console.log(category);
  return (
    <section className="py-[70px] relative px-10 overflow-hidden">
      <div className="flex justify-center items-center">
        <div>
          <img src={illustration.src} alt="illustration" />
        </div>
        <div className="bg-white bg-opacity-5 rounded-xl shadow pt-[75px] pb-[67px] px-[90px]">
          <div className="text-[32px] font-tt-clashDisplay font-semibold text-fuchsia-500 pb-11">
            Register
          </div>
          <div className="flex items-center pb-5 gap-2 text-sm">
            <div className="pt-5">Be part of this movement!</div>
            <div>
              <img src={walk.src} alt="walk" />
            </div>
          </div>

          <div className="text-2xl">CREATE YOUR ACCOUNT</div>

          <form className="pt-8 w-full text-sm">
            <div className="flex gap-8 mb-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="team_name">Team’s Name</label>
                <input
                  type="text"
                  name="team_name"
                  id="team_name"
                  className="w-64 h-12  bg-white bg-opacity-5 rounded shadow border border-white outline-none py-4 px-5"
                  placeholder="Enter the name of your group"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-64 h-12  bg-white bg-opacity-5 rounded shadow border border-white outline-none py-4 px-7"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="flex gap-8 mb-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-64 h-12  bg-white bg-opacity-5 rounded shadow border border-white outline-none py-4 px-7"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="topic">Project Topic</label>
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  className="w-64 h-12  bg-white bg-opacity-5 rounded shadow border border-white outline-none py-4 px-4"
                  placeholder="What is your group project topic"
                />
              </div>
            </div>

            <div className="flex gap-8 mb-5">
              <div className="flex flex-col gap-1">
                <div>Category</div>
                <InputSelect
                  placeholder={"Select Category"}
                  option={categoryOption}
                  setOption={setCategory}
                  optionValue={category}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div>Group size</div>
                <InputSelect
                  placeholder={"Select"}
                  option={groupSize}
                  setOption={setSize}
                  optionValue={size}
                />
              </div>
            </div>
            <div className="text-white font-montserrat flex items-center">
              <div>
                <Checkbox
                  required
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{
                    color: "#ffffff",
                    "&.Mui-checked": {
                      color: "#D434FE",
                    },
                  }}
                />
              </div>
              <div>
                I agreed with the event terms and conditions and privacy policy
              </div>
            </div>
            <div className="mt-5">
              <button className="w-full h-14 flex items-center justify-center bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
