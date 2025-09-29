import React, { useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";

const BasicDetail = ({ component, setComponent }) => {
  // 🔹 Initial state – load from localStorage if present
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("basicDetails");
    return saved
      ? JSON.parse(saved)
      : { firstName: "", lastName: "", email: "", phone: "", note: "" };
  });

  // 🔹 Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("basicDetails", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Ensure data is saved before moving on
    localStorage.setItem("basicDetails", JSON.stringify(formData));
    setComponent(4);
  };

  return (
    <div className="border-[2px] rounded-md border-[#00000013] relative md:p-12 p-4 flex flex-col gap-y-4 w-full md:h-full h-[450px]">
      <h1 className="text-[24px] font-bold text-black">Basic Details</h1>

      <form className="flex flex-col gap-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center gap-6">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]"
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div className="flex items-center gap-6">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]"
            type="email"
            placeholder="Email Address"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]"
            type="tel"
            placeholder="Phone Number"
          />
        </div>

        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="text-[#4E4E4E] py-3 px-5 rounded-md text-[14px] font-[400] bg-transparent focus:outline-[#80E900] border-[1px] border-[#00000024]"
          rows={5}
          placeholder="Note"
        />
      </form>

      {/* Navigation buttons */}
      <div className="flex items-center gap-4 absolute bottom-3 right-3">
        <button
          onClick={() => setComponent(2)}
          className="bg-[#80e90086] rounded-full py-3 px-6 text-white"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex text-white items-center"
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

export default BasicDetail;
