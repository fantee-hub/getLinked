"use client";
import React, { useState, useEffect } from "react";
import illustration from "../../../public/assets/images/illustration-6.png";
import walk from "../../../public/assets/images/walk.svg";
import InputSelect from "../InputSelect";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import { categoryList } from "@/src/api";
import toast from "react-hot-toast";
import { register } from "@/src/api";

const RegisterSection = () => {
  const [categories, setCategories] = useState("");
  const [values, setValues] = useState({});
  const [checked, setChecked] = React.useState(false);
  const [categoryData, setCateGoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [size, setSize] = useState("");

  const opt = categoryData.map((item: any) => {
    return { value: item.id, label: item.name };
  });

  const groupSize = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (Object.keys(values).length == 0) {
      return toast.error("make sure all input fields are not empty");
    }
    //@ts-ignore
    const { team_name, email, phone, topic } = values;
    const inputData = {
      email,
      phone_number: phone,
      team_name,
      //@ts-ignore
      group_size: Number(size.value),
      project_topic: topic,
      privacy_poclicy_accepted: checked,
      //@ts-ignore
      category: Number(categories.value),
    };
    try {
      const data = await register(inputData);
      if (data) {
        setIsLoading(false);
        toast.success("Registered Successfully");
        e.target.reset();
        setIsLoading(false);
      }
    } catch (e: any) {
      setIsLoading(false);
      toast.error(e.message);
    }
    console.log(inputData);
  };
  const handleInputChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const fetchCategory = async () => {
    try {
      const { data } = await categoryList();
      if (data) {
        //@ts-ignore
        // setCategory({ value: data.name, label: data.name });
        setCateGoryData(data);
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  console.log(opt);

  return (
    <section className="py-[70px] relative lg:px-10 px-0 overflow-hidden">
      <div className="fixed flare py-[67px] px-5 lg:p-0 w-full h-screen overflow-auto top-0 bottom-0 bg-[#140D27] z-[999] lg:static lg:bg-transparent lg:overflow-hidden lg:h-auto">
        <div className="lg:hidden text-sm text-fuchsia-500 font-bold px-5 pb-5 flex justify-start">
          Register
        </div>
        <div className="flex justify-center items-center lg:flex-row flex-col ">
          <div>
            <img src={illustration.src} alt="illustration" />
          </div>
          <div className="lg:bg-white lg:bg-opacity-5 bg-opacity-1 bg-transparent rounded-xl shadow lg:pt-[75px] pt-5 pb-[67px] lg:px-[90px] px-4 max-w-[30rem] mx-auto lg:max-w-full">
            <div className="text-[32px] font-tt-clashDisplay font-semibold text-fuchsia-500 pb-11 hidden lg:block">
              Register
            </div>
            <div className="flex items-center lg:pb-5 pb-2 gap-2 lg:text-sm text-xs">
              <div className="pt-5">Be part of this movement!</div>
              <div>
                <img src={walk.src} alt="walk" />
              </div>
            </div>

            <div className="lg:text-2xl text-xl">CREATE YOUR ACCOUNT</div>

            <form
              className="pt-8 w-full lg:text-sm text-xs"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-8 mb-5 lg:flex-row flex-col">
                <div className="flex flex-col gap-1">
                  <label htmlFor="team_name">Team’s Name</label>
                  <input
                    type="text"
                    name="team_name"
                    id="team_name"
                    className="lg:w-64 h-12 w-full  bg-white bg-opacity-5 rounded shadow border border-white outline-none py-4 px-5"
                    placeholder="Enter the name of your group"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="lg:w-64 h-12 w-full  bg-white bg-opacity-5 rounded shadow border border-white outline-none py-4 px-7"
                    placeholder="Enter your phone number"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex gap-8 mb-5 lg:flex-row flex-col">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="lg:w-64 h-12 w-full  bg-white bg-opacity-5 rounded shadow border border-white outline-none py-4 px-7"
                    placeholder="Enter your email address"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="topic">Project Topic</label>
                  <input
                    type="text"
                    name="topic"
                    id="topic"
                    className="lg:w-64 h-12 w-full  bg-white bg-opacity-5 rounded shadow border border-white outline-none py-4 px-4"
                    placeholder="What is your group project topic"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex lg:gap-8 mb-5 gap-3">
                <div className="flex flex-col gap-1 flex-1">
                  <div>Category</div>
                  <InputSelect
                    placeholder={"Select Category"}
                    option={opt}
                    setOption={setCategories}
                    optionValue={categories}
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
              <div className="text-pink-500 text-xs pb-3 italic">
                Please review your registration details before submitting
              </div>
              <div className="text-white font-montserrat flex items-center">
                <div>
                  <Checkbox
                    required
                    checked={checked}
                    onChange={handleChange}
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
                  I agreed with the event terms and conditions and privacy
                  policy
                </div>
              </div>
              <div className="mt-5 flex justify-center">
                <button
                  className="lg:w-full w-44 h-14 flex items-center justify-center bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <CircularProgress
                      color="inherit"
                      size={20}
                      className="mr-2"
                    />
                  )}
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
