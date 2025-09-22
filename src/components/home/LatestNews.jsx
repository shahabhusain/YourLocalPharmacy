import React from "react";
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import { IoMdArrowForward } from "react-icons/io";
const articles = [
  {
    img: img1,
    date: "July 12, 2025",
    text: "See how data and creativity combine to create high-impact marketing campaigns.",
  },
  {
    img: img2,
    date: "July 12, 2025",
    text: "See how data and creativity combine to create high-impact marketing campaigns.",
  },
  {
    img: img3,
    date: "July 12, 2025",
    text: "See how data and creativity combine to create high-impact marketing campaigns.",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white py-16">
      <div className="w-[90%] mx-auto px-4">
        {/* Section Header */}
        <p className="uppercase text-sm font-semibold tracking-wide text-gray-700">
          Latest News
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
          Your Local Erdington Pharmacy Latest Articles
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={item.img}
                alt=""
                className=""
              />
              <div className="p-6 flex flex-col gap-y-2 flex-1">
                <p className="text-gray-700 text-sm">{item.date}</p>
                <p className="mt-3 text-gray-900 leading-relaxed flex-1">
                  {item.text}
                </p>
  <button className=' flex  text-[#fff] items-center '> <span className='bg-[#80E900] rounded-full py-3 px-6 '>Read more</span> <span className='h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full'><IoMdArrowForward size={20} /></span></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
