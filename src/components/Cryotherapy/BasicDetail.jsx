import React, { useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";

const BasicDetail = ({ component, setComponent }) => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("basicDetails");
    return saved
      ? JSON.parse(saved)
      : { firstName: "", lastName: "", email: "", phone: "", note: "" };
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("basicDetails", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Simple validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem("basicDetails", JSON.stringify(formData));
      setComponent(4); // ✅ Move only if valid
    }
  };

  return (
    <div className="border-[2px] rounded-md border-[#00000013] relative md:p-12 p-4 flex flex-col gap-y-4 w-full md:h-full h-[500px]">
      <h1 className="text-[24px] font-bold text-black">Basic Details</h1>

      <form className="flex flex-col gap-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center gap-6">
          <div className="w-full">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] bg-transparent focus:outline-[#80E900] border border-[#00000024]"
              type="text"
              placeholder="First Name"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          <div className="w-full">
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] bg-transparent focus:outline-[#80E900] border border-[#00000024]"
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-full">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] bg-transparent focus:outline-[#80E900] border border-[#00000024]"
              type="email"
              placeholder="Email Address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="w-full">
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-[#4E4E4E] w-full py-3 px-5 rounded-md text-[14px] bg-transparent focus:outline-[#80E900] border border-[#00000024]"
              type="tel"
              placeholder="Phone Number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
        </div>

        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="text-[#4E4E4E] py-3 px-5 rounded-md text-[14px] bg-transparent focus:outline-[#80E900] border border-[#00000024]"
          rows={5}
          placeholder="Note"
        />
      </form>

      {/* Navigation buttons */}
      <div className="flex items-center gap-4 absolute bottom-3 right-3">
        <button
          onClick={() => setComponent(2)}
          className="border-[#80e90086] border-[2px] text-black rounded-full py-3 px-6 "
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="flex items-center text-white group"
        >
          <span className="bg-[#80E900] rounded-full py-3 px-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
            Next
          </span>
          <span className="h-[45px] w-[45px] rotate-[320deg] flex items-center justify-center bg-[#80E900] rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[360deg]">
            <IoMdArrowForward size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BasicDetail;
