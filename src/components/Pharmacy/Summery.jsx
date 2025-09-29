import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowForward } from "react-icons/io";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firbase";

const Summery = ({ component, setComponent }) => {
  const [payment, setPayment] = useState(1); 

  // Helper to safely read JSON from localStorage
  const getLS = (key) => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  };

  const basicDetail = getLS("basicDetails");
  const selectedService = getLS("selectedService");
  const selectedSlot = getLS("selectedSlot");

  // ✅ Save appointment in Firestore
  const handleNext = async () => {
    const payload = {
      basicDetail,
      selectedService,
      selectedSlot,
      paymentMethod: payment === 1 ? "Pay Locally" : "Credit Card",
    };

    try {
      const docRef =await addDoc(collection(db, "BookedSlots"), {
  date: selectedSlot.date,
  timeRange: selectedSlot.startDate
    ? `${selectedSlot.startDate} – ${selectedSlot.endDate}`
    : "",
});
      console.log("Appointment saved with ID:", docRef.id);
      localStorage.clear();
      setComponent(0);
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="border-[2px] rounded-md border-[#00000013] relative p-4 flex flex-col gap-y-4 w-full md:h-full h-[650px]">
      <h1 className="text-[24px] font-bold text-black">Summary</h1>

      <div className="border-[2px] border-[#00000013] max-h-[350px] flex flex-col gap-y-5 rounded-md p-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Customer */}
          <button className="flex gap-1 items-center w-full hover:bg-[#80E9001A] p-3 border border-[#0000001b] rounded-md">
            <span className="bg-white w-[50px] h-[50px] rounded-full shadow-sm flex items-center justify-center">
              <CgProfile />
            </span>
            <span className="flex flex-col items-start gap-y-1 text-[10px] font-[400] text-black/50">
              Customer
              <span className="text-[14px] text-black font-medium">
                {basicDetail.firstName || "—"} {basicDetail.lastName || ""}
              </span>
            </span>
          </button>

          {/* Service */}
          <button className="flex gap-1 items-center w-full hover:bg-[#80E9001A] p-3 border border-[#0000001b] rounded-md">
            <span className="flex flex-col items-start gap-y-1 text-[10px] font-[400] text-black/50">
              Service
              <span className="text-[14px] text-black font-medium">
                {selectedService.title || "—"} {selectedService.desc || ""}
              </span>
            </span>
          </button>

          {/* Date & Time */}
          <button className="flex gap-1 items-center w-full hover:bg-[#80E9001A] p-3 border border-[#0000001b] rounded-md">
            <span className="flex flex-col items-start gap-y-1 text-[10px] font-[400] text-black/50">
              Date & Time
              <span className="text-[14px] text-black font-medium">
                {selectedSlot.date}/ {selectedSlot.startDate} - {selectedSlot.endDate}
              </span>
            </span>
          </button>
        </div>

        {/* Price */}
        {selectedService.price && (
          <>
            <button className="flex items-center justify-between w-full">
              <span className="text-[#4E4E4E] text-[14px]">Subtotal</span>
              <span className="text-[#4E4E4E] p-4 rounded-md bg-[#F8F8F8]">
                {selectedService.price}
              </span>
            </button>
            <button className="flex items-center justify-between w-full">
              <span className="text-[#4E4E4E] text-[14px]">
                Total Amount Payable
              </span>
              <span className="text-[#4E4E4E] p-4 rounded-md bg-[#F8F8F8]">
                {selectedService.price}
              </span>
            </button>
          </>
        )}

        {/* Payment Method */}
        <div className="flex items-center md:justify-between md:gap-0 gap-x-2">
          <h2 className="text-[#80E900] font-normal text-[10px]">
            Select Payment Method
          </h2>
          <div className="flex items-center md:gap-4 gap-2">
            <button
              onClick={() => setPayment(1)}
              className={`md:text-[16px] text-[12px] ${
                payment === 1
                  ? "bg-[#80E900] text-white"
                  : "text-[#4E4E4E] border border-black/10"
              } md:py-3 py-1 md:px-5 px-2 rounded-md`}
            >
              Pay Locally
            </button>
            <button
              onClick={() => setPayment(2)}
              className={`md:text-[16px] text-[12px] ${
                payment === 2
                  ? "bg-[#80E900] text-white"
                  : "text-[#4E4E4E] border border-black/10"
              } md:py-3 py-1 md:px-5 px-2 rounded-md`}
            >
              Credit Card
            </button>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center gap-4 absolute bottom-3 right-3">
        <button
          onClick={() => setComponent(3)}
          className="bg-[#80e90086] rounded-full py-3 px-6 text-white"
        >
          Back
        </button>
        <button onClick={handleNext} className="flex text-white items-center">
          <span className="bg-[#80E900] rounded-full py-3 px-6">Next</span>
          <span className="h-[45px] w-[45px] flex items-center justify-center bg-[#80E900] rounded-full">
            <IoMdArrowForward size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Summery;
