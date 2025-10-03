import React, { useState, useEffect } from "react";
import sum from "../../assets/sum.png";
import { IoMdArrowForward } from "react-icons/io";

const SelectCategory = ({ component, setComponent }) => {
  // Example services array – replace with your actual data
  const services = [
    {
      title: "Ear Piercing - £15",
      duration: "15 m",
     price:"£15.00" 
    }
  ];

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

  // Restore previously selected service if it exists
  useEffect(() => {
    const stored = localStorage.getItem("selectedService");
    if (stored) {
      const parsed = JSON.parse(stored);
      const idx = services.findIndex(
        (s) => s.title === parsed.title && s.category === parsed.category
      );
      if (idx !== -1) setSelectedServiceIndex(idx);
    }
  }, []); // runs once

  const handleNext = () => {
    if (selectedServiceIndex !== null) {
      const chosen = services[selectedServiceIndex];
      localStorage.setItem("selectedService", JSON.stringify(chosen));
      setComponent(1);
    }
  };

  return (
    <div className="border-[2px] rounded-md border-[#00000013] relative md:px-12 px-4 mt-5 md:mt-0 pt-12 pb-20 flex flex-col gap-y-4">
      {/* Services */}
      <div className="flex flex-col gap-y-4 mt-2">
        <h1 className="text-[26px] font-bold text-black">Select Service</h1>
        <div className="grid grid-cols-2 gap-6 w-full h-[280px] overflow-y-scroll">
          {services.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              onClick={() => setSelectedServiceIndex(idx)}
              className={`border-[2px] md:p-6 p-2 rounded-md flex flex-col md:gap-y-5 gap-y-3 cursor-pointer ${
                selectedServiceIndex === idx
                  ? "border-[#80E900] bg-[#80e90025]"
                  : "border-[#00000017]"
              }`}
            >
              <span
                className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${
                  selectedServiceIndex === idx
                    ? "bg-[#80E900]"
                    : "bg-[#F8F8F8]"
                }`}
              >
                <img src={sum} alt="" />
              </span>
              <h1 className="text-[#4E4E4E] md:text-[20px] text-[14px] font-[500]">
                {item.title}
              </h1>
              <h2 className="text-[#4E4E4E] md:text-[20px] text-[14px] font-[500]">
                Duration: {item.duration}
              </h2>
              <buttons className="bg-[#80E900] py-1.5 px-3 rounded-sm text-white md:text-[20px] text-[14px] w-fit font-[600]" >{item.price}</buttons>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="absolute bottom-3 right-3 flex items-center gap-4">
  <button
    onClick={handleNext}
    disabled={selectedServiceIndex === null}
    aria-disabled={selectedServiceIndex === null}
    className="flex items-center text-white group disabled:opacity-40 disabled:cursor-not-allowed"
  >
    {/* Text */}
    <span
      className="bg-[#80E900] rounded-full py-3 px-6
                 transition-all duration-300 ease-in-out
                 group-hover:scale-105 group-hover:shadow-lg
                 group-disabled:scale-100 group-disabled:shadow-none"
    >
      Next
    </span>
  
    {/* Arrow */}
    <span
      className="h-[45px] w-[45px] rotate-[320deg] flex items-center justify-center 
                 bg-[#80E900] rounded-full 
                 transition-transform duration-300 ease-in-out
                 group-hover:translate-x-1 group-hover:rotate-[360deg]
                 group-disabled:translate-x-0 group-disabled:rotate-[320deg]"
    >
      <IoMdArrowForward size={20} />
    </span>
  </button>
      </div>
    </div>
  );
};

export default SelectCategory;
