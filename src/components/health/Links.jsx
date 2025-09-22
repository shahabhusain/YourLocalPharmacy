import React from "react";
import { FaSearch } from "react-icons/fa";

const Links = () => {
    const data = [
        {
            title:"Amnesia, see Memory loss (amnesia)",
            link:""
        },
         {
            title:"Amputation",
            link:""
        },
         {
            title:"Amputation",
            link:""
        },
         {
            title:"Anabolic",
            link:""
        },
         {
            title:" Anaemia (iron deficiency), see Iron deficiency",
            link:""
        },
         {
            title:"Anaemia (vitamin B12 or folate deficiency), see Vitamin B12 or folate deficiency ",
            link:""
        },
         {
            title:"AAA screening, see Abdominal aortic aneurysm screening",
            link:""
        },
         {
            title:"AAA screening, see Abdominal aortic aneurysm screening",
            link:""
        },
          {
            title:"AAA screening, see Abdominal aortic aneurysm screening",
            link:""
        },
    ]
  return (
    <div className="mt-[400px] mb-[100px] w-[90%] mx-auto flex flex-col gap-y-12">
      <div className="flex focus-within:outline-[#80E900] py-3 px-5 rounded-2xl bg-[#00000009] items-center justify-between">
        <input
          type="text"
          placeholder="search"
          className="focus:outline-none w-full border-none bg-transparent"
        />
        <FaSearch size={20} className="text-[#80E900]" />
      </div>

      <div>
        <h1 className=" text-[46px] font-semibold text-black">A</h1>
          <div className=" flex flex-col gap-y-5">
             {
        data.map((item, index)=>(
                    <button key={index} className=" text-start rounded-md border-[1px] border-[#00000022] py-3 px-5">{item.title}</button>
        ))
       }
          </div>
      </div>
    </div>
  );
};

export default Links;
