import React, { useState } from "react";
import icon1 from "../../assets/sum.png";
import SelectCategory from "./SelectCategory";
import Staff from "./Staff";
import DateTime from "./Date&Time";
import BasicDetail from "./BasicDetail";
import Summery from "./Summery";

const Main = () => {
  const [component, setComponent] = useState(0);

  const data = [
    { img: icon1, btn: "Services" },
    { img: icon1, btn: "Staff" },
    { img: icon1, btn: "Date & Time" },
    { img: icon1, btn: "Basic Detail" },
    { img: icon1, btn: "Summary" },
  ];

  return (
    <div className="md:mt-[402px] mt-[330px] mb-[100px] w-[90%] mx-auto flex flex-col md:flex-row justify-between">
      {/* Sidebar Steps */}
      <div className="bg-[#f8f8f8] p-6 rounded-md md:w-[30%] md:flex hidden flex-col gap-y-5">
        {data.map((item, index) => {
          // ✅ state logic for text color
          let textColor =
            component === index
              ? "text-[#80E900]" // active
              : index < component
              ? "text-[#80E900]" // completed
              : "text-[#4E4E4E]"; // default

          // ✅ border highlight for active
          let borderClass = component === index ? "border-[#80E900] border-[2px]" : "";

          // ✅ icon background
          let iconBg =
            component === index
              ? "bg-[#80E900]"
              : index < component
              ? "bg-[#80E900]" // completed step also green
              : "bg-[#f8f8f8]";

          return (
            <button
              key={index}
              disabled={index > component} // prevent jumping ahead
              className={`${borderClass} w-full bg-white flex items-center gap-4 shadow-md py-3 px-5 rounded-md md:text-[20px] text-[14px] font-medium ${textColor} ${
                index > component ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <span
                className={`w-[50px] h-[50px] ${iconBg} rounded-full flex items-center justify-center`}
              >
                <img src={item.img} alt="" />
              </span>
              {item.btn}
            </button>
          );
        })}
      </div>

      {/* Dynamic Components */}
      <div className="md:w-[68%]">
        {component === 0 ? (
          <SelectCategory component={component} setComponent={setComponent} />
        ) : component === 1 ? (
          <Staff component={component} setComponent={setComponent} />
        ) : component === 2 ? (
          <DateTime component={component} setComponent={setComponent} />
        ) : component === 3 ? (
          <BasicDetail component={component} setComponent={setComponent} />
        ) : component === 4 ? (
          <Summery component={component} setComponent={setComponent} />
        ) : null}
      </div>
    </div>
  );
};

export default Main;
