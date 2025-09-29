import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar-custom.css";
import { IoMdArrowForward } from "react-icons/io";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firbase";

const DateTime = ({ component, setComponent }) => {
  const [value, setValue] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("selectedSlot");
    return saved ? JSON.parse(saved) : null;
  });
  const [bookedSlots, setBookedSlots] = useState([]);

  // 🔹 Listen to booked slots in Firestore
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "BookedSlots"), (snap) => {
      const booked = snap.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          date: data.date, // Access the date field directly
          timeRange: data.timeRange, // e.g. "3:00 PM – 4:00 PM"
        };
      });
      setBookedSlots(booked);
    });

    return () => unsub();
  }, []);

  console.log("Booked slots:", bookedSlots);

  // 🔹 Generate default slots and filter out booked ones
  useEffect(() => {
    const newSlots = [];
    const currentDateString = value.toDateString();
    
    for (let hour = 10; hour < 16; hour++) {
      const startLabel =
        (hour <= 12 ? hour : hour - 12) + ":00 " + (hour < 12 ? "AM" : "PM");
      const endLabel =
        (hour + 1 <= 12 ? hour + 1 : hour - 11) +
        ":00 " +
        (hour + 1 < 12 ? "AM" : "PM");

      const slotObj = {
        id: `default-${hour}`,
        startDate: startLabel,
        endDate: endLabel,
        slot: `${startLabel} – ${endLabel}`,
        date: currentDateString,
      };

      // Check if this slot is booked
      const isBooked = bookedSlots.some(
        (bookedSlot) => 
          bookedSlot.date === currentDateString && 
          bookedSlot.timeRange === slotObj.slot
      );

      if (!isBooked) {
        newSlots.push(slotObj);
      }
    }
    setSlots(newSlots);
  }, [value, bookedSlots]);

  const handleSlotClick = (item) => {
    setSelected(item);
    localStorage.setItem("selectedSlot", JSON.stringify(item));
    setComponent(3);
  };

  const tileDisabled = ({ date, view }) => {
    if (view !== "month") return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="border-2 rounded-xl relative h-full border-black/10 px-6 pt-6 pb-20 w-full mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-4 text-black">Date &amp; Time</h1>

      <div className="w-full flex flex-col md:flex-row justify-between gap-6">
        {/* Calendar */}
        <div className="border-2 md:w-[50%] m-4 rounded-xl md:p-12 p-3 border-black/10">
          <Calendar
            onChange={setValue}
            value={value}
            prevLabel="<"
            nextLabel=">"
            calendarType="gregory"
            tileDisabled={tileDisabled}
          />
        </div>

        {/* Time slots */}
        <div className="border-2 md:w-[50%] h-[400px] overflow-y-scroll rounded-xl flex flex-col gap-y-5 p-4 border-black/10">
          <h1 className="text-[20px] font-medium text-black">Time Slot</h1>

          <div className="grid grid-cols-2 gap-4">
            {slots.length === 0 && (
              <p className="col-span-2 text-sm text-gray-500">
                All slots are booked for this date.
              </p>
            )}
            {slots.map((item) => {
              const isSelected = selected?.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSlotClick(item)}
                  className={`flex flex-col gap-y-1 p-4 rounded-md transition-colors
                    ${
                      isSelected
                        ? "bg-green-500 text-white border-2 border-green-700"
                        : "bg-[#F8F8F8] hover:bg-green-100"
                    }`}
                >
                  <h1 className="text-[14px] font-normal">
                    {item.startDate} – {item.endDate}
                  </h1>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 absolute bottom-3 right-3">
        <button
          onClick={() => setComponent(1)}
          className="bg-[#80e90086] rounded-full py-3 px-6 text-white"
        >
          Back
        </button>
        <button
          onClick={() => selected && setComponent(3)}
          disabled={!selected}
          className={`flex text-white items-center ${
            !selected ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          <span className="bg-[#80E900] rounded-full py-3 px-6">Next</span>
          <span className="h-[45px] w-[45px] flex items-center justify-center bg-[#80E900] rounded-full">
            <IoMdArrowForward size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DateTime;