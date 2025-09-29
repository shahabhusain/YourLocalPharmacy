import React, { useState, useEffect } from "react";
import sum from "../../assets/sum.png";
import { IoMdArrowForward } from "react-icons/io";

const Staff = ({ component, setComponent }) => {
  const [selectedStaffIndex, setSelectedStaffIndex] = useState(null);

  const staffOptions = [
    { icon: sum, title: "Any Staff" },
    { icon: sum, title: "Their Master" },
    { icon: sum, title: "Zainab Master" },
      { icon: sum, title: "Janet Nalwoga" },
  ];

  /** Restore previously chosen staff if it exists */
  useEffect(() => {
    const stored = localStorage.getItem("selectedStaff");
    if (stored) {
      const parsed = JSON.parse(stored);
      const idx = staffOptions.findIndex((s) => s.title === parsed.title);
      if (idx !== -1) setSelectedStaffIndex(idx);
    }
  }, []);

  /** Save to localStorage and go forward */
  const handleNext = () => {
    if (selectedStaffIndex !== null) {
      const chosen = staffOptions[selectedStaffIndex];
      localStorage.setItem("selectedStaff", JSON.stringify(chosen));
      setComponent(2); // go to next step
    }
  };

  return (
    <div className="border-[2px] rounded-md border-[#00000013] relative p-12 flex flex-col gap-y-4 w-full md:h-full h-[900px]">
      <h1 className="text-[24px] font-bold text-black">Staff</h1>

      <div className=" grid grid-cols-1 w-full md:grid-cols-3  gap-6">
        {staffOptions.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            onClick={() => setSelectedStaffIndex(index)}
            className={`border-[2px] w-full p-6 rounded-md flex flex-col gap-y-5 cursor-pointer ${
              selectedStaffIndex === index
                ? "border-[#80E900]"
                : "border-[#00000017]"
            }`}
          >
            <span
              className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${
                selectedStaffIndex === index ? "bg-[#80E900]" : "bg-[#F8F8F8]"
              }`}
            >
              <img src={item.icon} alt="" />
            </span>
            <h1 className="text-[#4E4E4E] text-[20px] font-[500]">{item.title}</h1>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 absolute bottom-3 right-3">
        <button
          onClick={() => setComponent(0)}
          className="bg-[#80e90086] rounded-full py-3 px-6 text-white"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={selectedStaffIndex === null}
          className="flex text-[#fff] items-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="bg-[#80E900] rounded-full py-3 px-6">Next</span>
          <span className="h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full">
            <IoMdArrowForward size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Staff;
