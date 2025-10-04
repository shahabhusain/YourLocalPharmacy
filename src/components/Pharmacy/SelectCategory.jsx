import React, { useState, useEffect } from "react";
import sum from "../../assets/sum.png";
import { IoMdArrowForward } from "react-icons/io";

const SelectCategory = ({ component, setComponent }) => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const buttons = [
    { button: "All", filter: "all" },
    { button: "NHS", filter: "nh" },
    { button: "Private - Other", filter: "pr" },
    { button: "Flu Vaccine", filter: "fl" },
    { button: "Travel", filter: "tr" },
    { button: "Weight Management", filter: "we" },
    { button: "Ear Wax removal", filter: "er" },
    { button: "Cryotherapy", filter: "cr" },
     { button: "NWP", filter: "nv" },
  ];

  const services = [
    { category: "nh", icon: sum, title: "BP check - £5 unless eligible for NHS Hypertension case finding Service", desc: "Duration: 15 m" },
    { category: "nh", icon: sum, title: "New medicine service – free (10mins)", desc: "Duration: 15 m"},
    { category: "nh",  icon: sum, title: "NHS Blood Pressure Service – Free (10 mins)", desc: "Duration: 15 m" },
    { category: "nh",  icon: sum, title: "Flu Vaccination NHS UNDER 65s (Seasonal) - FREE", desc: "Duration: 15 m" },
    { category: "nh",  icon: sum, title: "Contraception Service - New", desc: "Duration: 15 m" },
    { category: "nh",  icon: sum, title: "Contraception Service - Ongoing Supply", desc: "Duration: 15 m" },
    { category: "pr",  icon: sum, title: "Vitamin B12 - £30 for single dose (15mins)", desc: "Duration: 15 m", price:"£30.00" },
     { category: "pr",  icon: sum, title: "Urinary Tract Infection (UTI) - £20 (15 mins)", desc: "Duration: 15 m", price:"£20.00" },
      { category: "pr",  icon: sum, title: "BCG Scar Check - £30 (10 mins)", desc: "Duration: 15 m", price:"£30.00" },
       { category: "pr",  icon: sum, title: "Blood testing (PAID SERVICE) – Prices vary please ask in store (15mins)", desc: "Duration: 15 m", price:"£45.00" },
         { category: "pr",  icon: sum, title: "Ear Piercing - £15", desc: "Duration: 15 m", price:"£10.00" },
         { category: "pr",  icon: sum, title: "Non Travel Vaccination - Prices vary please ask in store", desc: "Duration: 15 m"},
          { category: "pr",  icon: sum, title: "Prescribing Consultation - PAID (15 mins)", desc: "Duration: 15 m"},
           { category: "fl",  icon: sum, title: "Flu Vaccination NHS OVER 65s (Seasonal) – FREE", desc: "Duration: 15 m"},
                  { category: "fl",  icon: sum, title: "Flu Vaccination Private (Seasonal) - £18 (5mins)", desc: "Duration: 15 m", price:"£18.00" },

                   { category: "tr",  icon: sum, title: "Travel clinic – Prices vary please ask in store (30mins)", desc: "Duration: 30 m"},
                  { category: "tr",  icon: sum, title: "Hajj & Umrah Vaccination", desc: "Duration: 15 m", price:"£45.00" },


                       { category: "we",  icon: sum, title: "Weight Management (Repeat IN-PERSON consultation)", desc: "Duration: 10 m"},
                            { category: "we",  icon: sum, title: "Weight Management (initial IN-PERSON consultation)", desc: "Duration: 45 m"},
                                 { category: "we",  icon: sum, title: "Weight Management (repeat - PHONE consultation)", desc: "Duration: 10 m"},
                                      { category: "we",  icon: sum, title: "Weight Management (initial VIDEO consultation)", desc: "Duration: 45 m"},

                                      { category: "er",  icon: sum, title: "Ear Wax Removal 1 ear - £35", desc: "Duration: 30 m", price:"£35.00" },
                                      { category: "er",  icon: sum, title: "Ear Wax Removal 2 ears £60 (30mins)", desc: "Duration: 30 m", price:"£60.00" },

                                       { category: "cr",  icon: sum, title: "Cryotherapy – Consultation £30 (15mins)", desc: "Duration: 15 m", price:"£30.00" },

                                         { category: "nv",  icon: sum, title: "NWP - Bld ONLY", desc: "Duration: 15 m"},
                            { category: "nv",  icon: sum, title: "NWP - Vac", desc: "Duration: 15 m"},
                                 { category: "nv",  icon: sum, title: "NWP - Bld+Vac", desc: "Duration: 15 m"},
                                      { category: "nv",  icon: sum, title: "NWP - Any service WITH BCG", desc: "Duration: 15 m"},

  ];

  /** Restore previously selected service if it exists */
  useEffect(() => {
    const stored = localStorage.getItem("selectedService");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Find the index again (optional, you could store just the object)
      const idx = services.findIndex(
        (s) => s.title === parsed.title && s.category === parsed.category
      );
      if (idx !== -1) setSelectedServiceIndex(idx);
    }
  }, []);

  const filteredServices =
    filter === "all" ? services : services.filter((item) => item.category === filter);

  /** When user clicks Next */
  const handleNext = () => {
    if (selectedServiceIndex !== null) {
      const chosen = services[selectedServiceIndex];
      localStorage.setItem("selectedService", JSON.stringify(chosen));
      setComponent(1);
    }
  };

  return (
    <div className="border-[2px] rounded-md border-[#00000013] relative md:px-12 px-4 mt-5 md:mt-0 pt-12 pb-20 flex flex-col gap-y-4">
      <h1 className="text-[24px] font-bold text-black">Select Category</h1>

      {/* Filter Buttons */}
      <div className="flex items-center flex-wrap gap-3">
        {buttons.map((item) => (
          <button
            key={item.filter}
            onClick={() => setFilter(item.filter)}
            className={`border-[2px] ${
              filter === item.filter ? "bg-[#80E900] text-white" : ""
            } border-[#00000013] text-[#4E4E4E] md:text-[14px] text-[10px] font-medium py-1 px-2 rounded-md`}
          >
            {item.button}
          </button>
        ))}
      </div>

      {/* Services */}
      <div className="flex flex-col gap-y-4 mt-2">
        <h1 className="text-[26px] font-bold text-black">Select Service</h1>
        <div className="grid grid-cols-2 gap-6 h-[280px] overflow-y-scroll">
          {filteredServices.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              onClick={() => {
                // need original index in services array, not just filtered
                const globalIndex = services.indexOf(item);
                setSelectedServiceIndex(globalIndex);
              }}
              className={`border-[2px] md:p-6 p-2 rounded-md flex flex-col md:gap-y-5 gap-y-3 cursor-pointer ${
                selectedServiceIndex === services.indexOf(item)
                  ? "border-[#80E900] bg-[#80e90025]"
                  : "border-[#00000017]"
              }`}
            >
              <span
                className={`w-[50px] h-[50px] rounded-full flex items-center justify-center ${
                  selectedServiceIndex === services.indexOf(item)
                    ? "bg-[#80E900]"
                    : "bg-[#F8F8F8]"
                }`}
              >
                <img src={item.icon} alt="" />
              </span>
              <h1 className="text-[#4E4E4E] md:text-[20px] text-[14px] font-[500]">{item.title}</h1>
              <h2 className="text-[#4E4E4E] md:text-[20px] text-[14px] font-[500]">{item.desc}</h2>
              {!item.price ? null : <buttons className="bg-[#80E900] py-1.5 px-3 rounded-sm text-white md:text-[20px] text-[14px] w-fit font-[600]" >{item.price}</buttons>}
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
